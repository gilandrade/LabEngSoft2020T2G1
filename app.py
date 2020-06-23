from flask import Flask, render_template, redirect, url_for, flash
from flask_bootstrap import Bootstrap
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
#from datetime import datetime
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, IntegerField, DecimalField
from wtforms.validators import InputRequired, Email, Length
import decimal
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user

import fitbit
import gather_keys_oauth2 as Oauth2

Base = declarative_base() #necessaria para as tabelas relacionadas

app = Flask(__name__)
app.config['SECRET_KEY'] = 'thisissecret' #secretkey que encripta os cookies
Bootstrap(app) #para que o template visual seja executado

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:senhamysql@localhost/userDenovo' #não sei exatamente o porque mas o arquivo
#do banco de dados o test.db não foi criado na pasta do projeto, acredito que possa ser pq eu usei //root ao invés de
# mysql:///root, visto que aparentemente /// é um caminho relativo.
db = SQLAlchemy(app) #instancia e inicializacao da base de dados

login_manager = LoginManager() #inicialização da biblioteca flask_login para persistência de logins de usuários
login_manager.init_app(app)
login_manager.login_view = 'login'

class ProfSaude(UserMixin, db.Model, Base): #UserMixin possibilita o flaskLogin adicionar e injetar coisas novas nos usuários
    __tablename__ = 'profsaude'
    id = db.Column(db.Integer, primary_key=True)
    pacientes = relationship("Paciente")
    #separação de informações
    username = db.Column(db.String(15), unique=True)
    email = db.Column(db.String(50), unique=True)
    password = db.Column(db.String(80), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    gerenciador = db.Column(db.Boolean, nullable=False) # se prioridade for verdadeira ele pode cadastrar outros medicos
    #date_created = db.Column(db.DateTime, default=datetime.utcnow) #so para manter o registro

class Paciente(db.Model, Base): #UserMixin possibilita o flaskLogin adicionar e injetar coisas novas nos usuários
    __tablename__ = 'paciente'
    id = db.Column(db.Integer, primary_key=True)
    ProfSaude_id = db.Column(db.Integer, db.ForeignKey('profsaude.id'))
    #separação de informações
    username = db.Column(db.String(15), unique=True)
    email = db.Column(db.String(50), unique=True)
    password = db.Column(db.String(80), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    height = db.Column(db.Integer, nullable=False) # altura em centímetros.
    weight = db.Column(db.Integer, nullable=False)
    #separação
    access_token = db.Column(db.String(300), unique=True)
    refresh_token = db.Column(db.String(100))
    #date_created = db.Column(db.DateTime, default=datetime.utcnow) #so para manter o registro

@login_manager.user_loader #persistência do login de usuário
def load_user(user_id):
    return ProfSaude.query.get(int(user_id))

class LoginForm(FlaskForm): #Forms da biblioteca wtforms para facilitar as requisições de login
    username = StringField('Usuário', validators=[InputRequired(), Length(min=4,max=15)], render_kw={"placeholder": "Insira seu usuário"})
    password = PasswordField('Senha', validators=[InputRequired(), Length(min=8,max=80)], render_kw={"placeholder": "Insira sua senha"})
    remember = BooleanField('Mantenha-me conectado')

class RegisterForm_Paciente(FlaskForm): #Forms da biblioteca wtforms para facilitar as requisições de cadastro
    name = StringField('Nome completo', validators=[InputRequired(), Length(min=4,max=50)], render_kw={"placeholder": "Nome e sobrenome"})
    email = StringField('Email', validators=[InputRequired(), Email(message='Email inválido'), Length(max=50)], render_kw={"placeholder": "Insira seu email"})
    username = StringField('Usuário', validators=[InputRequired(), Length(min=4,max=15)], render_kw={"placeholder": "Escolha seu usuário"})
    password = PasswordField('Senha', validators=[InputRequired(), Length(min=8,max=80)], render_kw={"placeholder": "Escolha sua senha"})
    age = IntegerField('Idade', validators=[InputRequired()], render_kw={"placeholder": "Entre com sua idade, ex: 30, 40."})
    weight = IntegerField('Peso', validators=[InputRequired()], render_kw={"placeholder": "Valor inteiro em kg, ex: 70, 80."})
    height = IntegerField('Altura em cm', validators=[InputRequired()], render_kw={"placeholder": "Valor inteiro, ex: 165, 183."})




@app.route('/')
def index():
    #flash('teste de mensagem flashed')
    #print(generate_password_hash("gerenciando", method='sha256')) Precisei usar isso para criar a conta gerenciador
    return render_template('index.html')

@app.route('/login', methods=['GET','POST'])
def login():
    form = LoginForm()

    if form.validate_on_submit():
        user = ProfSaude.query.filter_by(username=form.username.data).first()
        if user:
            if check_password_hash(user.password, form.password.data): #verificação de hash de segurança
                login_user(user, remember=form.remember.data)
                return redirect(url_for('dashboard'))
        return '<h1> Usuário ou senha inválidos</h1>'
        #return '<h1>' + form.username.data + ' ' + form.password.data + '</h1>'


    return render_template('login.html', form=form)

#@app.route('/signup', methods=['GET','POST'])
#def signup():
#    form = RegisterForm()

#    if form.validate_on_submit():
#        hashed_password = generate_password_hash(form.password.data, method='sha256') #geração da hash de segurança
        
#        # integração com o fitbit.
#        CLIENT_ID = '22BMBD'
#        CLIENT_SECRET = '41bf164e37513442e8fc5c3f36f3d876'
#        #Solicitação de código de acesso para o cliente
#        server=Oauth2.OAuth2Server(CLIENT_ID, CLIENT_SECRET)
#        server.browser_authorize()
#        ACCESS_TOKEN=str(server.fitbit.client.session.token['access_token'])
#        REFRESH_TOKEN=str(server.fitbit.client.session.token['refresh_token'])
        
#        new_user = Paciente(username=form.username.data,email=form.email.data,password=hashed_password, name=form.name.data ,age=form.age.data,weight=form.weight.data,height=form.height.data, access_token=ACCESS_TOKEN, refresh_token=REFRESH_TOKEN)
        
#        db.session.add(new_user) #adiciona novo usuário no banco de dados
#        db.session.commit() #atualiza banco de dados
#        flash('Cadastro bem-sucedido')
        
#        return redirect('/login')
        
#        #return '<h1>Cadastro bem-sucedido!</h1>'
#        #debug dos forms de cadastro:
#        #return '<h1>' + form.username.data + ' ' + form.password.data + ' ' + str(form.age.data) + ' ' + str(form.weight.data) + ' ' + form.email.data + '</h1>'

#    return render_template('signup.html', form=form)

@app.route('/dashboard', methods=['GET','POST'])
@login_required #função que só permite o acesso após o login
def dashboard():
    return render_template('dashboard.html', name=current_user.username)

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('index'))

@app.route('/noaccount')
def noaccount():
    return render_template('noaccount.html')

@app.route('/signupMedico')
def signupMedico():
    return render_template('signupMedico.html')

@app.route('/signupPaciente', methods=['GET','POST'])
def signupPaciente():
    form = RegisterForm_Paciente()

    if form.validate_on_submit():

        hashed_password = generate_password_hash(form.password.data, method='sha256') #geração da hash de segurança
        
        # integração com o fitbit.
        CLIENT_ID = '22BMBD'
        CLIENT_SECRET = '41bf164e37513442e8fc5c3f36f3d876'
        #Solicitação de código de acesso para o cliente
        server=Oauth2.OAuth2Server(CLIENT_ID, CLIENT_SECRET)
        server.browser_authorize()
        ACCESS_TOKEN=str(server.fitbit.client.session.token['access_token'])
        REFRESH_TOKEN=str(server.fitbit.client.session.token['refresh_token'])
        
        new_user = Paciente(ProfSaude_id=current_user.id ,username=form.username.data,email=form.email.data,password=hashed_password, name=form.name.data ,age=form.age.data,weight=form.weight.data,height=form.height.data, access_token=ACCESS_TOKEN, refresh_token=REFRESH_TOKEN)
        
        db.session.add(new_user) #adiciona novo usuário no banco de dados
        db.session.commit() #atualiza banco de dados
        flash('Cadastro bem-sucedido')
        return redirect('/dashboard')
    return render_template('signupPaciente.html', form=form)

@app.route('/listaPacientes')
def listaPacientes():
    return render_template('listaPacientes.html')

@app.route('/perfilPS')
def perfilPS():
    return render_template('perfilPS.html')

if __name__ == '__main__':
    app.run(debug=True)


from flask import Flask, render_template, redirect, url_for
from flask_bootstrap import Bootstrap
from flask_sqlalchemy import SQLAlchemy
#from datetime import datetime
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, IntegerField, DecimalField
from wtforms.validators import InputRequired, Email, Length
import decimal
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user


app = Flask(__name__)
app.config['SECRET_KEY'] = 'thisissecret'
Bootstrap(app) #para que o template visual seja executado

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:senhamysql@localhost/userTeste' #não sei exatamente o porque mas o arquivo
#do banco de dados o test.db não foi criado na pasta do projeto, acredito que possa ser pq eu usei //root ao invés de
# mysql:///root, visto que aparentemente /// é um caminho relativo.
db = SQLAlchemy(app) #instancia e inicializacao da base de dados

login_manager = LoginManager() #inicialização da biblioteca flask_login para persistência de logins de usuários
login_manager.init_app(app)
login_manager.login_view = 'login'

class User(UserMixin, db.Model): #UserMixin possibilita o flaskLogin adicionar e injetar coisas novas nos usuários
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(15), unique=True)
    email = db.Column(db.String(50), unique=True)
    password = db.Column(db.String(80), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    weight = db.Column(db.Integer, nullable=False)
    #date_created = db.Column(db.DateTime, default=datetime.utcnow) #so para manter o registro

@login_manager.user_loader #persistência do login de usuário
def load_user(user_id):
    return User.query.get(int(user_id))

class LoginForm(FlaskForm): #Forms da biblioteca wtforms para facilitar as requisições de login
    username = StringField('Usuário', validators=[InputRequired(), Length(min=4,max=15)])
    password = PasswordField('Senha', validators=[InputRequired(), Length(min=8,max=80)])
    remember = BooleanField('Mantenha-me conectado')

class RegisterForm(FlaskForm): #Forms da biblioteca wtforms para facilitar as requisições de cadastro
    email = StringField('Email', validators=[InputRequired(), Email(message='Email inválido'), Length(max=50)])
    username = StringField('Usuário', validators=[InputRequired(), Length(min=4,max=15)])
    password = PasswordField('Senha', validators=[InputRequired(), Length(min=8,max=80)])
    age = IntegerField('Idade', validators=[InputRequired()])
    weight = IntegerField('Peso', validators=[InputRequired()])




@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET','POST'])
def login():
    form = LoginForm()

    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user:
            if check_password_hash(user.password, form.password.data): #verificação de hash de segurança
                login_user(user, remember=form.remember.data)
                return redirect(url_for('dashboard'))
        return '<h1> Usuário ou senha inválidos</h1>'
        #return '<h1>' + form.username.data + ' ' + form.password.data + '</h1>'


    return render_template('login.html', form=form)

@app.route('/signup', methods=['GET','POST'])
def signup():
    form = RegisterForm()

    if form.validate_on_submit():
        hashed_password = generate_password_hash(form.password.data, method='sha256') #geração da hash de segurança
        new_user = User(username=form.username.data,email=form.email.data,password=hashed_password,age=form.age.data,weight=form.weight.data)
        db.session.add(new_user) #adiciona novo usuário no banco de dados
        db.session.commit() #atualiza banco de dados

        return '<h1>Cadastro bem-sucedido!</h1>'
        #debug dos forms de cadastro:
        #return '<h1>' + form.username.data + ' ' + form.password.data + ' ' + str(form.age.data) + ' ' + str(form.weight.data) + ' ' + form.email.data + '</h1>'

    return render_template('signup.html', form=form)

@app.route('/dashboard')
@login_required #função que só permite o acesso após o login
def dashboard():
    return render_template('dashboard.html', name=current_user.username)

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)

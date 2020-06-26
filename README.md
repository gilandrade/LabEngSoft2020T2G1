Instruções para executar a aplicação Web:

Os arquivos referentes a aplicação Web deste repositório são: a pasta "python-fitbit-master", as pastas "templates" e "static" e por fim os arquivos "app.py", "gather_keys_oauth2.py" e "requirements.txt", além deste próprio. CERTIFIQUE-SE QUE TODOS ESSES ARQUIVOS E PASTAS ENCONTRAM-SE NO MESMO DIRETÓRIO.

Para garantir que tudo funcione recomenda-se usar a versão 3.8.2 ou mais atualizada do Python. É necessário também ter o MySQL baixado na máquina que realizará o teste.

  Procedimento de instalação do MySQL e configuração: 
  
   - Download no link: https://dev.mysql.com/downloads/windows/installer/8.0.html;
   - Baixe a versão web community, normalmente é menor; Após isso clicar em "no thanks, just start my download" no final da página;
   - Escolher o tipo de instalação "Developer Default" mesmo. Clicar em "execute" para os requirements e depois clique em "install"; após o download caso clicando "next" ainda ocorre problema falta de requirements apenas clique em "yes";
   - Clicar em "execute", após baixar tudo clicar em "next", "next" na opção Standalone..., "next" em server configuration type(não precisa alterar nada) e "next" em Use Strong Password;
   
   - No campo MySQL Root Password inserir "senhamysql", caso contrário ou caso já tenha o MySQL
    baixado em sua máquina com outra Root Password será necessário alterar a linha do arquivo "app.py" na qual diz: 
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:senhamysql@localhost/userDenovo' necessita-se remover o senhamysql e inserir no lugar a sua senha, caso minha senha 
    fosse "senha123" , por exemplo, a linha ficaria:
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:senha123@localhost/userDenovo'
    
   - Após essa configuração da Root Password basta clicar em next, next e finish e a instalação banco de dados estará completa. Pode dar um "cancel" nas opções após o "finish"
   - Posteriormente certifique-se que o ícone MySQL Notifier da barra de tarefas indica que está em estado "running";
   - Abra o MySQL 8.0 Command Line Client, entre com sua senha root, e insira o comando : "CREATE DATABASE userDenovo;" e depois o comando: "USE userDenovo;"
   - Após isso a configuração que o aplicativo precisa para começar a utilizar o banco de dados está completa.
    
  Procedimento para criar um envoltório virtual (virtual env) no Visual Studio Code:
   - Caso não tenha o Visual Studio Code(VScode) baixado, link para download: https://code.visualstudio.com/Download
   - Abra o a pasta onde vc salvou todos os arquivos citados anteriormete no VScode, e no terminal do interpretador insira um desses dois comandos :
              # macOS/Linux: sudo apt-get install python3-venv # If needed        
                            python3 -m venv env
              # Windows: python -m venv env
   - Após isso deve ser gerada a pasta "env" no diretório.
   - Uma vez que a página foi criada, abra o "app.py" no VSCode e insira o seguinte comando no terminal: "source env/bin/activate" (Linux/macOS) ou "env\scripts\activate" (Windows)
   - Caso de problema do windows não permitir scripts, é necessário abrir o Windows Power Shell como administrador, e usar o comando "Set-ExecutionPolicy RemoteSigned"
   pode-se usar um "Get-ExecutionPolicy" para verificar se deu certo.
   - Verifique que no terminal é para aparacer entre parenteses a palavra env, ex. (env) na nova linha de comando a ser inserida, isso garante que o terminal está usando o 
   interpretador do envoltório virtual.
   - Feito isso execute o seguinte comando no terminal: "pip install -r requirements.txt", esse comando garante que todas as bibliotecas que o programa depende serão devidamente
   instaladas. Agora falta pouco para ter a aplicação web funcionando! Aguenta aí.
   
  - Próximo passo é criar todas as tabelas no banco de dados, para isso no terminal do visual studio code, insira o comando "Python", aguarde a resposta do terminal e insira o 
  comando "from app import db", e depois o comando "db.create_all()" após a resposta do servidor execute o comando "exit()" para voltar ao terminal padrão do vscode.
  
  - O penúltimo passo agora é abrir de novo o MySQL 8.0 Command Line Client e insira a seguinte linha de comando:
  INSERT INTO profsaude VALUES(1,'gerenciador','gerencia@gmail.com','sha256$xFbZAefs$801958abebbc31ec789dd5bc95c3670859f5c8f9fd8d969782af81e8a5acca93', 'Chefe',1);
  Esse comando cria a conta do médico gerente usada para fazer login na aplição web. O usuário é "gerenciador" e a senha é "gerenciando".
  
  - Após isso retorne para o terminal do VScode e digite o comando : "Python app.py" para executar o aplicativo. Depois de carregado click no link que aparece na última
  "Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)" e a sua aplicação estará finalmente rodando no http://127.0.0.1:5000/ , divirta-se!!!
  
  Fim!!
                                                                   

    
  



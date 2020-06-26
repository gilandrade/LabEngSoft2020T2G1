Instruções para executar a aplicação Web:

Os arquivos referentes a aplicação Web deste repositório são: a pasta "python-fitbit-master", as pastas "templates" e "static" e por fim os arquivos "app.py", "gather_keys_oauth2.py" e "requirements.txt", além deste próprio. CERTIFIQUE-SE QUE TODOS ESSES ARQUIVOS E PASTAS ENCONTRAM-SE NO MESMO DIRETÓRIO.

Para garantir que tudo funcione recomenda-se usar a versão 3.8.2 ou mais atualizada do Python. É necessário também ter o MySQL baixado na máquina que realizará o teste.

  Procedimento de instalação do MySQL e configuração: 
  
   - Download no link: https://dev.mysql.com/downloads/windows/installer/8.0.html;
   - Escolher o tipo de instalação default mesmo. Clicar em "next" após o download e selecionar a opção "Standalone MySQL Server / Classic MySQL";
   
   - Depois disso clicar em "next" quando aparece a opção de alterar as portas. No campo MySQL Root Password inserir "senhamysql", caso contrário ou caso já tenha o MySQL
    baixado em sua máquina com outra Root Password será necessário alterar a linha do arquivo "app.py" na qual diz: 
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:senhamysql@localhost/userDenovo' necessita-se remover o senhamysql e inserir no lugar a sua senha, caso minha senha 
    fosse "senha123" , por exemplo, a linha ficaria:
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:senha123@localhost/userDenovo'
    
   - Após essa configuração da Root Password basta clicar em next, next e finish e a instalação banco de dados estará completa.
   - Posteriormente certifique-se que o ícone MySQL Notifier da barra de tarefas indica que está em estado "running";
   - Abra o MySQL Command Line Client, entre com sua senha root, e insira o comando : "CREATE DATABASE userDenovo;"
   - Após isso a configuração que o aplicativo precisa para começar a utilizar o banco de dados está completa.
    
  Procedimento para criar um envoltório virtual (virtual env) no Visual Studio Code:
   - Caso não tenha o Visual Studio Code(VScode) baixado, link para download: https://code.visualstudio.com/Download
   - Abra o a pasta onde vc salvou todos os arquivos citados anteriormete no VScode, e no terminal do interpretador insira um desses dois comandos :
              # macOS/Linux:                                                        |           # Windows:
              sudo apt-get install python3-venv    # If needed                      |           python -m venv env
              python3 -m venv env                                                   |    
   - Após isso deve ser gerada a pasta "env" no diretório.
   - Uma vez que a página foi criada, abra o "app.py" no VSCode e insira o seguinte comando no terminal: "source env/bin/activate" (Linux/macOS) ou "env\scripts\activate" (Windows)
   - Verifique que no terminal é para aparacer entre parenteses a palavra env, ex. (env) na nova linha de comando a ser inserida, isso garante que o terminal está usando o 
   interpretador do envoltório virtual.
   - Feito isso execute o seguinte comando no terminal: "pip install -r requirements.txt", esse comando garante que todas as bibliotecas que o programa depende serão devidamente
   instaladas. Agora falta pouco para ter a aplicação web funcionando! Aguenta aí.

                                                                   

    
  



# LabEngSoft2020T2G1

COMO INSTALAR OS PACOTES NECESSÁRIOS PARA RODAR O CÓDIGO NO SEU COMPUTADOR

Primeiro, tenha um Node.js intalado na sua máquina. Os passos a seguir podem ser verificados nas páginas de documentação do react native e react navigation, os respectivos links seguem abaixo. Os comandos devem ser utilizados no prompt de comando SEM ASPAS.

https://reactnative.dev/docs/environment-setup

https://reactnavigation.org/docs/getting-started

1) Crie uma pasta base como ambiente de trabalho geral
2) Usando o prompt de comando, navegue até essa pasta e dê o comando: "npm install -g expo-cli"
3) Use o comando "expo init Nome_Projeto" para criar um projeto em react native, substituindo Nome_Projeto pelo nome que quiser
4) Entre na pasta recém criada ("cd Nome_Projeto")
5) Agora iremos instalar as dependências adicionais relacionadas ao React Navigation. Use o comando "npm install @react-navigation/native"
6) Use o comando "expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view"
7) Finalmente, use os comandos "npm install @react-navigation/stack" e "npm install @react-navigation/bottom-tabs"
8) Copiei os arquivos e pastas do repositório do Git para esta pasta do projeto.
9) Para rodar o projeto, use "npm start". Uma página no seu navegador irá ser aberta como interface de visualização.
10) Para ver o estado do aplicativo em si, há dois métodos:
  
  a) Pelo celular: Para celulares android, basta instalar o aplicativo Expo na play store e scanear o qr code.
  
  b) Pelo navegador: Basta clicar na opção de abrir pelo navegador na aba lateral esquerda da interface no seu browser. Uma nova aba será aberta. Nela, aperte F12 e use a visualização de celular disponível, escolhendo um modelo de celular qualquer. NOTA: ainda está em estado beta, e este modo de visualização gerou alguns bugs de posicionamento de objetos que não ocorrem no celular.


Principais arquivos do app de login flask e mysql!!
Para executá-los é necessário instalar as bibliotecas descritas em requirements em um envoltório virtual criado na mesma pasta em que os arquivos se localizam, após todas as bibliotecas instaladas acredito ser necessário criar o banco de dados na sua máquina, para isso baixe o mysql, instale faça login nele e execute "CREATE DATABASE userTeste" em sua linha de comando, após isso execute "app.py" no terminal referente ao projeto e ele executará criando as páginas no endereço localhost.

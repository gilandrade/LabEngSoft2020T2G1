# LabEngSoft2020T2G1

COMO INSTALAR OS PACOTES NECESSÁRIOS PARA RODAR O CÓDIGO NO SEU COMPUTADOR

Primeiro, tenha um Node.js intalado na sua máquina. Os comandos devem ser utilizados no prompt de comando SEM ASPAS.

1) Crie uma pasta base como ambiente de trabalho geral
2) Usando o prompt de comando, navegue até essa pasta e dê o comando: "npm install -g expo-cli"
3) Use o comando "expo init Nome_Projeto" para criar um projeto em react native, substituindo Nome_Projeto pelo nome que quiser
4) Entre na pasta recém criada ("cd Nome_Projeto")
5) Agora iremos instalar as dependências adicionais relacionadas ao React Navigation. Use o comando "npm install @react-navigation/native"
6) Use o comando "expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view"
7) Finalmente, use os comandos "npm install @react-navigation/stack", "npm install @react-navigation/bottom-tabs" e "npm install --save react-native-progress-circle"
8) Copie os arquivos e pastas do repositório do Git para esta pasta do projeto.
9) Para rodar o projeto, use "npm start". Uma página no seu navegador irá ser aberta como interface de visualização.
10) Para ver o estado do aplicativo em si, há dois métodos:
  
  a) Pelo celular: Para celulares android, basta instalar o aplicativo Expo na play store e scanear o qr code.
  
  b) Pelo navegador: Basta clicar na opção de abrir pelo navegador na aba lateral esquerda da interface no seu browser. Uma nova aba será aberta. Nela, aperte F12 e use a visualização de celular disponível, escolhendo um modelo de celular qualquer. NOTA: ainda está em estado beta, e este modo de visualização gerou alguns bugs de posicionamento de objetos que não ocorrem no celular.


NOTA: As telas 'SettingsScreen', 'SettingsScreen copy' e 'LoginScreen' estão nos arquivos apenas para fins de teste, e não estão implementados.

Páginas para enventual consulta e pesquisa de React Native e Navigation:

https://reactnative.dev/docs/environment-setup

https://reactnavigation.org/docs/getting-started

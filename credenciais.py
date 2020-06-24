import fitbit
import gather_keys_oauth2 as Oauth2
import pandas as pd 
import datetime
from datetime import date
import os
import json
CLIENT_ID = '22BMBD'
CLIENT_SECRET = '41bf164e37513442e8fc5c3f36f3d876'

#Solicitação de código de acesso para o cliente
server=Oauth2.OAuth2Server(CLIENT_ID, CLIENT_SECRET)
server.browser_authorize()
ACCESS_TOKEN=str(server.fitbit.client.session.token['access_token'])
REFRESH_TOKEN=str(server.fitbit.client.session.token['refresh_token'])
auth2_client=fitbit.Fitbit(CLIENT_ID,CLIENT_SECRET,oauth2=True,access_token=ACCESS_TOKEN,refresh_token=REFRESH_TOKEN)

#Definindo datas
'''
year = input('Insira o ano: ')
month = input('Insira o mês: ')
day = input('Insira o dia: ')
'''
data = str(date.today().strftime("%Y-%m-%d"))


#Chamando dados
oneDayData = auth2_client.time_series('activities/steps', base_date=data, period = '30d')
'''d = json.dumps(oneDayData)
print(d)'''

#Criando o arquivo .json
with open('Passos '+ data +'.json', 'w') as f:
    json.dump(oneDayData, f)


#Salvando em planilha excel
'''
time_list = []
val_list = []
for i in oneDayData['activities-steps']:
    val_list.append(i['value'])
    time_list.append(i['dateTime'])
df = pd.DataFrame({'Passos':val_list,'Dia':time_list})
filename = oneDayData['activities-steps'][0]['dateTime']
path = os.path.join(os.path.expanduser("~"), "Desktop/")
df.to_excel(path + 'Passos ' + filename + '.xlsx', columns=['Passos','Dia'], header = True, index = False)
'''
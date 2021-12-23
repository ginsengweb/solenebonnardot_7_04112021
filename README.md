# solenebonnardot_7_04112021
# GROUPOMANIA COMMUNITY


## GROUPOMANIA

Ceci est le dernier projet de ma formation Openclassrooms : un réseau social d'entreprise que j'ai nommé groupomania Community.
J'ai entièrement réalisé ce projet.
### Les technologies sont les suivantes :
#### FRONT : 
- React
- Sass (node-sass)
- Packages (axios, dayJs, react-dom, react-router-dom)
#### BACK : 
- NodeJS
- Express
- MySQL (manipulé avec MySQL Workbench et la CommandLineClient)
- Packages (bcrypt, cors, dotenv, file-system/fs, jsonwebtoken, sequelize, mysql2, nodemon, multer)



### Pour lancer Groupomania Community :
Créez un fichier .env dans front-end/client/config
```
$ HOST = localhost
$ CLIENT_PORT = 3000
$ SERVER_PORT = 8080
$ DB_USER = dbUser
$ DB_PASSWORD = dbPassword
$ DB_NAME = dbName
$ TOKEN = token
```
Clônez le repo, puis ouvrez le terminal de commande
Back + dépendances
```
$ cd back-end/ && npm i
```
Démarrez le server
```
$ nodemon server.js
```
Ouvrez un nouveau terminal
```
$ cd front-end/client
```
Lancez react :
```
$ npm start
```

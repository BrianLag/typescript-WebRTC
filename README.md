# Typescript WebRTC 

  ce repo sert de tuto pour créer une application de chat vidéo en se servant de React , Typescript et WebRTC

  tuto adapté de la vidéo Youtube de __Darwin Tech__ : [lien ici](https://www.youtube.com/watch?v=gnM3Ld6_upE)
                                     

# Commands
  ## ./

  `npm start` launch server side on port 5000

  ## ./Front

  `npm start` launch front side on port 3000

# List of Steps

  ## step 1 : Typescript installation

    npm i express cors socket.io
    npm i --save-dev nodemon typescript ts-node

  ### installation des types

    npm i --save-dev @types/node @types/express @types/cors

  ### initialisation de Typescript

    npx tsc --init

  ## step 2 : create server
    touch server.ts
  - create simple server listener
  - add nodemon script to launch server.ts


  ## step 3 : initialize socket-io
    npm i @types/socket.io
  - importer socket dans server.ts
  - créer des connections et des événements "voir commit : add socket connection"

  ## step 4 : Adding Video
    cd front/
    npm i simple-peer socket.io-client @material-ui/core @material-ui/icons react-copy-to-clipboard
    npm i --save-dev @types/react @types/socket.io-client @types/react-dom @types/react-copy-to-clipboard @types/simple-peer
  - clean App.js
  - add video with useEffect and useRef

  ## step 5 : add react-copy-to-clipboard
  - import textfield from material icon and create useState to save name and link to copy


# Etat du projet 
  - [x] Server Typescript
  - [ ] Chat Vidéo 
  - [ ] Add delight to the experience when all tasks are complete :tada:
 
Projet ~~terminé~~  terminé un jour
    
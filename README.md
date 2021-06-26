# Typescript WebRTC 

  ce repo sert de tuto pour créer une application de chat vidéo en se servant de React , Typescript et WebRTC

  tuto adapté de la vidéo Youtube de Darwin Tech : https://www.youtube.com/watch?v=gnM3Ld6_upE
                                     

## Commands

## commit 1 : Typescript installation

  - $ npm i express cors socket-io
  - $ npm i --save-dev nodemon typescript ts-node

  installation des types
  - $ npm i --save-dev @types/node @types/express @types/cors

  initialisation de Typescript
  - $ npx tsc --init

## commit 2 : create server
  - $ touch server.ts
  - create simple server listener
  - add nodemon script to launch server.ts

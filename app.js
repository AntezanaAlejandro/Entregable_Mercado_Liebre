const express = require('express');
const path = require('path');
const app = express();
//middlewares
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
//rutas: get, post, put, delete
app.get('/', (req, res)=>{
  res.sendFile(path.resolve(__dirname,'./views/index.html'));
})


app.listen(3001, ()=> console.log("Servidor escuchando en puerto 3001"));

































/*
1) crear directorio y entrar en él
2) como es un proyecto de VS Code: npm init
3) npm i express nodemon
4) git init
5) crear carpeta "public"
 a) images
 b) css
6) crear carpeta "views". Aquí todos los HTML
7) crear app.js 
😍 En app.js:
  const express = require('express');

  const app = express(); // creo la aplicación en la constante "app"

  app.listen(3001,() => console.log("Servidor escuchando en puerto 3001")); //(puerto, callback)
9) ir en un navegador a localhost:3001
 Debería aparecer este texto: "Cannot GET /"
*/
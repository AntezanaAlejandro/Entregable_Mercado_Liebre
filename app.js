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

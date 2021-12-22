const fs = require('fs');
const path = require("path");
const userLogs = (req, res, next) =>{
fs.appendFileSync(path.join(__dirname, "../logs/userLogs.txt"), "El usuario ingreso a la ruta: " + req.url + "\n" , "utf-8" );
next()
}
module.exports = userLogs

 /* console.log(req.url) */ //se accede a la url que se esta generando en cada peticion
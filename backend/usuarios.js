const express =require('express');//tabnine
const router= express.Router();
const mysqlConnection =require('../db/db');

// Colocar los middleware 
//callbacks
router.get('/usuarios',(req,res)=>{
  mysqlConnection.query('SELECT * FROM `REGISTRO_USUARIO`',(err,rows,fields)=>{
    //si no hay error
    if(!err){
      //verdadero
    res.json(rows);
  }else{
    console.log(err);
  }
  }) //Fin query
})//Fin del get
//buscar usuario
router.get('/usuario/:cedula',(req,res)=>{
  const {cedula}= req.params;
  mysqlConnection.query('SELECT * FROM `REGISTRO_USUARIO` where cedula = ?',[cedula],(err,rows,fields)=>{
    //si no hay error
    if(!err){
      //verdadero
    res.json(rows);
  }else{
    console.log(err);
  }
  }) //Fin query
})//Fin del get
//Agregar un nuuevo usuario 
router.post('/nuevo-usuario',(req,res)=>{
  const {cedula,nombres,apellidos,correo,usuario,contraseña}=req.body;
  let estudiante =[cedula,nombres,apellidos,correo,usuario,contraseña];
  let nuevousuario =`INSERT INTO usuarios(cedula,nombres,apellidos,correo,usuario,contraseña) VALUES(?,?,?,?,?,?)`;
mysqlConnection.query(nuevousuario,usuario,(err, results,fields)=>{
  if(err){
    return console.error(err.message)

  }else{
    res.json({message: 'Usuario registrado exitosamente'})
  }})
})//

module.exports =router;

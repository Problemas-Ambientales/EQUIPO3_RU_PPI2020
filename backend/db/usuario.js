const express =require('express');//tabnine
const router= express.Router();
const mysqlConnection =require('../db/db');

// Colocar los middleware 
//callbacks
router.get('/usuario',(req,res)=>{
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
  mysqlConnection.query('SELECT * FROM `REGISTRO_USUARIO` where CEDULA = ?',[CEDULA],(err,rows,fields)=>{
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
router.put('/usuario/:CEDULA', (req, res) => {
    const {NOMBRE, APPELIDO, USUARIO, CONTRASEÑA  } = req.body;

    const { CEDULA } = req.params;

    mysqlConnection.query(`UPDATE ESTUDIANTE SET NOMBRE = ?, APELLIDO = ?, USUARIO = ?, CONTRASEÑA = ?, WHERE CEDULA = ?`,

        [NOMBRE, APELLIDO, USUARIO, CONTRASEÑA,CEDULA ], (err, rows, fields) => {
            if (!err) {
                res.json({ status: `Usuario registrado` });
            } else {
                console.log(err);
            }
        });
});

//eliminar usuario
router.delete('/usuario/:CEDULA', (req,res) => {
    const {CEDULA} = req.params;
    mysqlConnection.query('DELETE FROM REGISTRO_USUARIO WHERE CEDULA=?', [CEDULA], (err, rows, fields) =>{
        if(!err){
            res.json({ status:'usuario eliminado'});
        }else{
            console.log(err);
        }
    });
});

module.exports =router;

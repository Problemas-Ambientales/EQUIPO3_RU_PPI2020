const express =require('express');//tabnine
const router= express.Router();
const mysqlConnection= require('../db/db');

// Colocar los middleware 
//callbacks
router.get('/',(req,res)=>{
  mysqlConnection.query('SELECT * FROM MATERIAL',(err,rows,fields)=>{
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
router.get('/material/:MATERIAL',(req,res)=>{
  const {CODIGO}= req.params;
  mysqlConnection.query('SELECT * FROM MATERIAL where CODIGO = ?',[CODIGO],(err,rows,fields)=>{
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
router.post('/nuevo-material',(req,res)=>{
  const {COGIGO, NOMBRE, DESCRIPCION}=req.body;
  let MATERIAL =[COGIGO, NOMBRE, DESCRIPCION];
  let nuevomaterial =`INSERT INTO MATERIAL(COGIGO, NOMBRE, DESCRIPCION) VALUES(?,?,?)`;
mysqlConnection.query(nuevomaterial,MATERIAL,(err,results,fields)=>{
  if(err){
    return console.error(err.message)

  }else{
    res.json({message: 'material registrado exitosamente'})
  }})
})//
//actualizar usuario 
router.put('/MATERIAL/:CODIGO', (req, res) => {
    const {NOMBRE, DESCRIPCION} = req.body;

    const {CODIGO} = req.params;

    mysqlConnection.query(`UPDATE MATERIAL SET CODIGO = ?, NOMBRE = ?, DESCRIPCION`,

        [COGIGO, NOMBRE, DESCRIPCION], (err, rows, fields) => {
            if (!err) {
                res.json({ status: `MATERIA registrado` });
            } else {
                console.log(err);
            }
        });
});

//eliminar usuario
router.delete('/material/:CODIGO', (req,res) => {
    const {CODIGO} = req.params;
    mysqlConnection.query('DELETE FROM MATERIAL WHERE CEDULA=?', [CODIGO], (err, rows, fields) =>{
        if(!err){
            res.json({ status:'material eliminado'});
        }else{
            console.log(err);
        }
    });
});


module.exports =router;

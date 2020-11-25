const express =require('express');//tabnine
const router= express.Router();
const mysqlConnection= require('../db/db');

// Colocar los middleware 
//callbacks
router.get('/',(req,res)=>{
  mysqlConnection.query('SELECT * FROM TIEMPO_TOTAL',(err,rows,fields)=>{
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
router.get('/TIEMPO_BIODEGRADACION/:IDTIEMPO_BIODEGRADACION',(req,res)=>{
  const {IDTIEMPO_BIODEGRADACION}= req.params;
  mysqlConnection.query('SELECT * FROM PRODUCTO where IDTIEMPO_BIODEGRADACION = ?',[IDTIEMPO_BIODEGRADACION],(err,rows,fields)=>{
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
router.post('/nuevo-tiempo_biodegradacion',(req,res)=>{
  const {IDTIEMPO_BIODEGRADACION,PRODUCTO, MATERIAL, TIEMPO_BIODEGRADACION}=req.body;
  let MATERIAL =[IDTIEMPO_BIODEGRADACION,PRODUCTO, MATERIAL, TIEMPO_BIODEGRADACION];
  let nuevomaterial =`INSERT INTO TIEMPO_BIODEGRADACION(IDTIEMPO_BIODEGRADACION,PRODUCTO, MATERIAL, TIEMPO_BIODEGRADACION) VALUES(?,?,?,?)`;
mysqlConnection.query(nuevotiempo_biodegradacion,TIEMPO_BIODEGRADACION,(err,results,fields)=>{
  if(err){
    return console.error(err.message)

  }else{
    res.json({message: 'tiempo de biodegradacion registrado exitosamente'})
  }})
})//
//actualizar usuario 
router.put('/TIEMPO_BIODEGRADACION/:IDTIEMPO_BIODEGRADACION', (req, res) => {
    const {PRODUCTO, MATERIAL, TIEMPO_BIODEGRADACION} = req.body;

    const {IDTIEMPO_BIODEGRADACION} = req.params;

    mysqlConnection.query(`UPDATE TIEMPO_BIODEGRADACION SET IDTIEMPO_BIODEGRADACION = ?, PRODUCTO = ?, MATERIAL = ? TIEMPO_BIODEGRADACION = ? `,

        [IDTIEMPO_BIODEGRADACION,PRODUCTO, MATERIAL, TIEMPO_BIODEGRADACION], (err, rows, fields) => {
            if (!err) {
                res.json({ status: `TIEMPO_BIODEGRADACION registrado` });
            } else {
                console.log(err);
            }
        });
});

//eliminar usuario
router.delete('/TIEMPO_BIODEGRADACION/:IDTIEMPO_BIODEGRADACION', (req,res) => {
    const {IDTIEMPO_BIODEGRADACION} = req.params;
    mysqlConnection.query('DELETE FROM TIEMPO_BIODEGRADACION WHERE IDTIEMPO_BIODEGRADACION =?', [IDTIEMPO_BIODEGRADACION], (err, rows, fields) =>{
        if(!err){
            res.json({ status:'TIEMPO_BIODEGRADACION eliminado'});
        }else{
            console.log(err);
        }
    });
});

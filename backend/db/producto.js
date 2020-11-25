const express =require('express');//tabnine
const router= express.Router();
const mysqlConnection= require('../db/db');

// Colocar los middleware 
//callbacks
router.get('/',(req,res)=>{
  mysqlConnection.query('SELECT * FROM PRODUCTO',(err,rows,fields)=>{
    //si no hay error
    if(!err){
      //verdadero
    res.json(rows);
  }else{
    console.log(err);
  }
  }) //Fin query
})//Fin del get
//buscar producto
router.get('/PRODUCTO/:CODIGO',(req,res)=>{
  const {CODIGO}= req.params;
  mysqlConnection.query('SELECT * FROM PRODUCTO where CODIGO = ?',[CODIGO],(err,rows,fields)=>{
    //si no hay error
    if(!err){
      //verdadero
    res.json(rows);
  }else{
    console.log(err);
  }
  }) //Fin query
})//Fin del get
//Agregar un nuuevo producto
router.post('/nuevo-producto',(req,res)=>{
  const {COGIGO, NOMBRE, DESCRIPCION}=req.body;
  let MATERIAL =[COGIGO, NOMBRE, DESCRIPCION];
  let nuevomaterial =`INSERT INTO MATERIAL(COGIGO, NOMBRE, DESCRIPCION) VALUES(?,?,?)`;
mysqlConnection.query(nuevoproducto,PRODUCTO,(err,results,fields)=>{
  if(err){
    return console.error(err.message)

  }else{
    res.json({message: 'producto registrado exitosamente'})
  }})
})//
//actualizar producto
router.put('/PRODUCTO/:CODIGO', (req, res) => {
    const {NOMBRE, DESCRIPCION} = req.body;

    const {CODIGO} = req.params;

    mysqlConnection.query(`UPDATE PRODUCTO SET CODIGO = ?, NOMBRE = ?, DESCRIPCION`,

        [COGIGO, NOMBRE, DESCRIPCION], (err, rows, fields) => {
            if (!err) {
                res.json({ status: `producto registrado` });
            } else {
                console.log(err);
            }
        });
});

//eliminar producto
router.delete('/producto/:CODIGO', (req,res) => {
    const {CODIGO} = req.params;
    mysqlConnection.query('DELETE FROM PRODUCTO WHERE CEDULA=?', [CODIGO], (err, rows, fields) =>{
        if(!err){
            res.json({ status:'producto eliminado'});
        }else{
            console.log(err);
        }
    });
});


module.exports =router;

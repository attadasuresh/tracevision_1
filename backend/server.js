const express = require("express");
const mysql = require("mysql");
const cors = require("cors");


const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"e2etracking"
})

app.use(express.json())
app.use(cors())
// INISTALL NODEMOON TO RUNNING SERVER AUTOMIATICALLY INSTAL FOR CODE IS = NPM INIT  AND AFTER TYPING AD NODEMON CLICKING ENTER MORE TIMES


// LOGIN POST DATA

app.post("/Login",(req,res)=>{
    const {username,password}=req.body;

    const sql = `SELECT * FROM login WHERE name = '${username}'` ;
    db.query(sql,(err,data)=>{
        if (data.length === 0){
            res.json(false)
        }else{
            if (data[0].password === password){
                res.json(true)

            }else{
                res.json(false)

            }
        }
          })

})
app.listen(3000,()=>{
    console.log("successfully running");
})
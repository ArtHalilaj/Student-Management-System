const express = require("express");

const mysql = require('mysql');

const cors = require('cors');

const cookieParser = require('cookie-parser');

const bodyParser = require('body-parser');

const session = require('express-session'); 


const { check, validationResult, body, Result } = require('express-validator');


const Router= express.Router();





const app = express();


app.use(cors({
    origin:["http://localhost:3000"],
    methods:["POST", "GET", "PUT","DELETE"],
    credentials:true
}));

app.use(express.json());

app.use(cookieParser());

app.use(bodyParser.json());

app.use(express.json());

app.use(session({
    secret:'secret', //qeles sekret per mi enkriptu session ccookies
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure:false,
        maxAge:1000*60*60*24
    }
}))

const db = mysql.createConnection({ 
    host: "localhost",
    user: "root",
    password: "",
    database: "signup",
    port:4306
});

app.get('/',(req,res)=> {
    if(req.session.role){
        return res.json({valid:true,role:req.session.role})
    } else{
        return res.json({valid:false})
    }
})

app.get('/logout' , (req,res)=>{
    req.session.destroy();
    return res.json("success")
})

    db.connect((error)=>{
        if (error){
            console.log('Error konekt databaza',error);
        }
        else{
            console.log('U konektu me sukses')
        }
    });


    // Router.get("/get/Regjistro", (req,res)=>{
    //     db.query("SELECT * FROM login", (err,result)=>{
    //         if(err) {
    //         console.log(err)
    //         } 
    //     res.send(result)
    //     });   });

    app.get("/get/Regjistro", (req,res)=>{
        const sql= `SELECT * FROM login`;
    
        db.query(sql, (err, row)=>{
        if(!err)
        {
            res.send(row);

        } else{
            console.log(err);
        }

    });

});

        
// app.get('/about/get/Regjistro/:email', (req, res) => {
        
//     const sql = "SELECT * FROM login where email = ?";
//     const email = req.params.email;
//     db.query(sql,  [email], (err, result) => {
//         if(err) return res.json({Error: "Get Student error in sql"});
//         return res.json({Status: "Success", Result: result})
//     })
// })
    
    app.get('/get/Regjistro/:email', (req, res) => {
        
        const sql = "SELECT * FROM login where email = ?";
        const email = req.params.email;
        db.query(sql,  [email], (err, result) => {
            if(err) return res.json({Error: "Get Student error in sql"});
            return res.json({Status: "Success", Result: result})
        })
    })

    app.put('/update/get/Regjistro/:email', (req, res) => {
        const sql = "UPDATE login set name = ?, nameParent = ? , nr = ? , ditlindja = ? WHERE email = ?";
        const values = [ 
                 req.body.name,
                 req.body.nameParent ,
                 req.body.nr,
                 req.body.ditlindja 
                   ] 
           const email = req.params.email;
            db.query(sql, [...values, email], (err, data) => {
                              if(err) return res.json("Error");
                               return res.json(data);    })})
                        app.delete('/get/Regjistro/:email', (req, res) => { 
                          const sql = "DELETE FROM login WHERE email = ?";
                          const email = req.params.email;
                          db.query(sql, [email], (err, data) => { 
                              if(err) return res.json("Error"); 
                               return res.json(data); 
                              
                              })})

    // app.get("/get/:id", (req,res)=>{

    // const id = req.params.id;
    // db.query("SELECT * FROM login WHERE id = ?", id, 
    // (err,result)=>{
    //     if(err) {
    //     console.log(err)
    //     } 
    //     res.send(result)
    //     });   });

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`,`nameParent`,`nr`,`ditlindja`,`email`,`password`) VALUES (?)";
    const values = [ req.body.name,req.body.nameParent,req.body.nr,req.body.ditlindja,req.body.email,req.body.password ]  
    
    db.query(sql, [values], (err, data) => { 
        if(err) { 
        return res.json("Error");
    }       
     return res.json(data);   
    
    })})


    app.post('/login', (req, res) => {
        const sql = "SELECT * FROM login WHERE email = ? AND password = ?";    
        db.query(sql, [req.body.email,req.body.password ], (err, data) => {
            const errors = validationResult(req);
             if(!errors.isEmpty()) { 
                 return res.json(errors);  
                 } else {  
                     if(err) {   
                         return res.json("Error");    
                         }  
                         if(data.length > 0) { 
                            req.session.role=data[0].role;
                            req.session.email = req.body.email;
                             return res.json({Login:true});   
                             } else {  
                                return res.json({Login:false}); 
                            }    
                        }    
                      })})

                      app.get('/profile', (req, res) => {
                        if (req.session.email) {
                          const email = req.session.email;
                      
                          // Query the database to retrieve the user's personal information using their email
                          const sql = "SELECT * FROM login WHERE email = ?";
                          db.query(sql, [email], (err, userData) => {
                            if (err) {
                              return res.status(500).json({ error: 'Server error' });
                            }
                      
                            if (userData.length === 0) {
                              return res.status(404).json({ error: 'User not found' });
                            }
                      
                            // Send the user's email as a response
                            const user = userData[0];
                            return res.status(200).json({ email: user.email });
                          });
                        } else {
                          return res.status(401).json({ error: 'Unauthorized' });
                        }
                      });
                      
                      

    // app.get("/detyraNeKlas", (req, res) => {
    //   const sql = "SELECT * FROM apartamenti";
    //    db.query(sql, (err, data) => { 
    //     if(err) return res.json("Error");
    //      return res.json(data);    });});
    //         app.post('/createApart', (req, res) => {
    //             const sql = "INSERT INTO apartamenti (adresa,id) VALUES (?)";
    //             const values = [ 
    //                 req.body.adresa,
    //                 req.body.id
    //             ]    
    //             db.query(sql, [values], (err, data) => { 
    //                 if(err) return res.json("Error"); 
    //                 return res.json(data);   
    //              })})

    //  app.put('/detyraNeKlas/update/:id', (req, res) => {
    //   const sql = "UPDATE apartamenti set adresa = ?, id = ? WHERE ID = ?";
    //   const values = [ 
    //            req.body.adresa ,
    //            req.body.id
    //              ] 
    //      const id = req.params.id;
    //       db.query(sql, [...values, id], (err, data) => {
    //                         if(err) return res.json("Error");
    //                          return res.json(data);    })})
    //                   app.delete('/detyraNeKlas/:id', (req, res) => { 
    //                     const sql = "DELETE FROM apartamenti WHERE id = ?";
    //                     const id = req.params.id;
    //                     db.query(sql, [id], (err, data) => { 
    //                         if(err) return res.json("Error"); 
    //                          return res.json(data); 
                            
    //                         })})


                            app.get("/students", (req, res) => {
                                const sql = "SELECT * FROM students s INNER JOIN login l ON s.studentID=l.id";
                                 db.query(sql, (err, data) => { 
                                  if(err) return res.json("Error");
                                   return res.json(data);    });});
                                      app.post('/create', (req, res) => {
                                          const sql = "INSERT INTO students (Name, Email,studentID) VALUES (?)";
                                          const values = [ 
                                              req.body.name, 
                                              req.body.email ,
                                              req.body.idStud 
                                          ]    
                                          db.query(sql, [values], (err, data) => { 
                                              if(err) return res.json("Error"); 
                                              return res.json(data);   
                                           })})
                          
                               app.put('/update/:id', (req, res) => {
                                const sql = "UPDATE students set Name = ?, Email = ? WHERE ID = ?";
                                const values = [ 
                                         req.body.name,
                                         req.body.email 
                                           ] 
                                   const id = req.params.id;
                                    db.query(sql, [...values, id], (err, data) => {
                                                      if(err) return res.json("Error");
                                                       return res.json(data);    })})
                                                app.delete('/students/:id', (req, res) => { 
                                                  const sql = "DELETE FROM students WHERE ID = ?";
                                                  const id = req.params.id;
                                                  db.query(sql, [id], (err, data) => { 
                                                      if(err) return res.json("Error"); 
                                                       return res.json(data); 
                                                      
                                                      })})


                                                      app.get("/paraqitProvimin", (req, res) => {
                                                        const sql = "SELECT * FROM provimi p INNER JOIN login l ON p.studID=l.id";
                                                         db.query(sql, (err, data) => { 
                                                          if(err) return res.json("Error");
                                                           return res.json(data);    });});
                                                              app.post('/createProvimin', (req, res) => {
                                                                  const sql = "INSERT INTO provimi (lenda, emriProfesorit,studID) VALUES (?)";
                                                                  const values = [ 
                                                                      req.body.lenda, 
                                                                      req.body.emriProfesorit ,
                                                                      req.body.idStud
                                                                  ]    
                                                                  db.query(sql, [values], (err, data) => { 
                                                                      if(err) return res.json("Error"); 
                                                                      return res.json(data);   
                                                                   })})
                                                  
                                                       app.put('/update/:idProvimi', (req, res) => {
                                                        const sql = "UPDATE provimi set lenda = ?, emriProfesorit = ?,nota = ? WHERE idProvimi = ?";
                                                        const values = [ 
                                                                 req.body.lenda,
                                                                 req.body.emriProfesorit,
                                                                 req.body.nota
                                                                   ] 
                                                           const idProvimi = req.params.idProvimi;
                                                            db.query(sql, [...values, idProvimi], (err, data) => {
                                                                              if(err) return res.json("Error");
                                                                               return res.json(data);    })})
                                                                        app.delete('/paraqitProvimin/:idProvimi', (req, res) => { 
                                                                          const sql = "DELETE FROM provimi WHERE idProvimi = ?";
                                                                          const idProvimi = req.params.idProvimi;
                                                                          db.query(sql, [idProvimi], (err, data) => { 
                                                                              if(err) return res.json("Error"); 
                                                                               return res.json(data); 
                                                                            })})

                                        
                                                                            
                                                                            app.get("/perzgjedhjagrupit", (req, res) => {
                                                                                const sql = "SELECT * FROM grupi g INNER JOIN login l ON g.GrupiID=l.id";
                                                                                 db.query(sql, (err, data) => { 
                                                                                  if(err) return res.json("Error");
                                                                                   return res.json(data);    });});
                                                                                      app.post('/createPerzgjedhja', (req, res) => {
                                                                                          const sql = "INSERT INTO grupi (Grupi,GrupiID) VALUES (?)";
                                                                                          const values = [ 
                                                                                              req.body.grupi, 
                                                                                              req.body.grupiID
                                                                                          ]    
                                                                                          db.query(sql, [values], (err, data) => { 
                                                                                              if(err) return res.json("Error"); 
                                                                                              return res.json(data);   
                                                                                           })})
                                                                          
                                                                               app.put('/perzgjedhjagrupit/update/:idG', (req, res) => {
                                                                                const sql = "UPDATE grupi set Grupi = ? WHERE idG = ?";
                                                                                const values = [ 
                                                                                         req.body.grupi
                                                                                           ] 
                                                                                   const idG = req.params.idG;
                                                                                    db.query(sql, [...values, idG], (err, data) => {
                                                                                                      if(err) return res.json("Error");
                                                                                                       return res.json(data);    })})
                                                                                                app.delete('/perzgjedhjagrupit/:idG', (req, res) => { 
                                                                                                  const sql = "DELETE FROM grupi WHERE idG = ?";
                                                                                                  const idG = req.params.idG;
                                                                                                  db.query(sql, [idG], (err, data) => { 
                                                                                                      if(err) return res.json("Error"); 
                                                                                                       return res.json(data); 
                                                                                                    })})
            

                //---------------------------------------------------------------------------------------------------------------



                app.get("/regjistrosemestrin", (req, res) => {
                    const sql = "SELECT * FROM semestri s INNER JOIN login l ON s.idStudent=l.id";
                     db.query(sql, (err, data) => { 
                      if(err) return res.json("Error");
                       return res.json(data);    });});
                          app.post('/createSemestri', (req, res) => {
                              const sql = "INSERT INTO semestri (lokacioni,semestri,orari,idStudent) VALUES (?)";
                              const values = [ 
                                  req.body.lokacioni,
                                  req.body.semestri,
                                  req.body.orari,
                                  req.body.idStudent

                              ]    
                              db.query(sql, [values], (err, data) => { 
                                  if(err) return res.json("Error"); 
                                  return res.json(data);   
                               })})
              
                   app.put('/update/:id', (req, res) => {
                    const sql = "UPDATE semestri set lokacioni = ?, semestri = ?,orari = ? WHERE id = ?";
                    const values = [ 
                             req.body.lokacioni,
                             req.body.semestri,
                             req.body.orari
                               ] 
                       const id = req.params.id;
                        db.query(sql, [...values, id], (err, data) => {
                                          if(err) return res.json("Error");
                                           return res.json(data);    })})
                                    app.delete('/regjistrosemestrin/:id', (req, res) => { 
                                      const sql = "DELETE FROM semestri WHERE id = ?";
                                      const id = req.params.id;
                                      db.query(sql, [id], (err, data) => { 
                                          if(err) return res.json("Error"); 
                                           return res.json(data); 
                                        })})







//---------------------------------------------------------------------------------------------------------------------
//Ndertesa 

app.get("/ndertesa", (req, res) => {
    const sql = "SELECT * FROM ndertesa";
     db.query(sql, (err, data) => { 
      if(err) return res.json("Error");
       return res.json(data);    });});
       
       app.get("/ndertesa/:id58730", (req, res) => {
        const sql = "SELECT * FROM ndertesa WHERE id58730 = ?";
         db.query(sql, (err, data) => { 
          if(err) return res.json("Error");
           return res.json(data);    });});
          app.post('/createNdertesa', (req, res) => {
              const sql = "INSERT INTO ndertesa (emri58730,DataPT) VALUES (?)";
              const values = [ 
                  req.body.emri58730,
                  req.body.DataPT

              ]  
              const currentDate = new Date().toLocaleString();  
              db.query(sql, [values,currentDate], (err, data) => { 
                  if(err) return res.json("Error"); 
                  return res.json(data);   
               })})

   app.put('/ndertesa/update/:id58730', (req, res) => {
    const sql = "UPDATE ndertesa set emri58730 = ?,DataPT = ? WHERE id58730 = ?";
    const values = [ 
             req.body.emri58730,
             req.body.DataPT
             
               ] 
       const id58730 = req.params.id58730;
        db.query(sql, [...values, id58730], (err, data) => {
                          if(err) return res.json("Error");
                           return res.json(data);    })})
                    app.delete('/ndertesa/:id58730', (req, res) => { 
                      const sql = "DELETE FROM ndertesa WHERE id58730 = ?";
                      const id58730 = req.params.id58730;
                      db.query(sql, [id58730], (err, data) => { 
                          if(err) return res.json("Error"); 
                           return res.json(data); 
                        })})




//---------------------------------------------------------------------------------------------------------------------
//Lifti 

app.get("/lifti", (req, res) => {
    const sql = "SELECT * FROM lifti";
     db.query(sql, (err, data) => { 
      if(err) return res.json("Error");
       return res.json(data);    });});
          app.post('/createLifti', (req, res) => {
              const sql = "INSERT INTO lifti (emertimi,NdertesaID) VALUES (?)";
              const values = [ 
                  req.body.emertimi,
                  req.body.NdertesaID

              ]    
              db.query(sql, [values], (err, data) => { 
                  if(err) return res.json("Error"); 
                  return res.json(data);   
               })})

   app.put('/lifti/update/:ID', (req, res) => {
    const sql = "UPDATE apartamenti set emertimi = ?,NdertesaID = ? WHERE ID = ?";
    const values = [ 
        req.body.emertimi,
        req.body.NdertesaID
               ] 
       const ID = req.params.ID;
        db.query(sql, [...values, ID], (err, data) => {
                          if(err) return res.json("Error");
                           return res.json(data);    })})
                    app.delete('/lifti/:ID', (req, res) => { 
                      const sql = "DELETE FROM lifti WHERE ID = ?";
                      const ID = req.params.ID;
                      db.query(sql, [ID], (err, data) => { 
                          if(err) return res.json("Error"); 
                           return res.json(data); 
                        })})



                                                                              
app.listen(8081, ()=> {    console.log("listening");})
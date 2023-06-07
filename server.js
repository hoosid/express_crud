// const express = require('express');
// const mysql = require('mysql');
// const app = express();

// app.set('view engine', 'ejs'); // Set EJS as the view engine

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// // Create a connection pool to manage database connections:
// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'test1'
// });
// //-----------------------------------------
// //pour selection des donner or affichage

// // Define route to fetch data from the database and render it as JSON
// app.get('/', (req, res) => {
//   pool.query('SELECT * FROM sidaxe', (error, results) => {
//     if (error) {
//       console.error('Error executing query:', error);
//       res.status(500).send('Internal Server Error');
//     } else {
//       res.render('select', { select: results });
//     }
//   });
// });

// // Route pour afficher le formulaire
// app.get('/sid', (req, res) => {
//   res.render('inser');
// });

// app.post('/sid', (req, res) => {
//   const nome = req.body.nome;
//   const prenom = req.body.prenom;

//   const sql = 'INSERT INTO sidaxe (name, prenom) VALUES (?, ?)';
//   pool.query(sql, [nome, prenom], (error, result) => {
//     if (error) {
//       console.error('Error executing query:', error);
//       res.status(500).send('Internal Server Error');
//     } else {
//       res.redirect("/");
//     }
//   });
// });
// app.get('/', (req, res) => {
//   pool.query('SELECT * FROM sidaxe', (error, results) => {
//     if (error) {
//       console.error('Error executing query:', error);
//       res.status(500).send('Internal Server Error');
//     } else {
//       res.render('select', { select: results });
//     }
//   });
// });

// // Route pour afficher le formulaire
// app.get('/sid', (req, res) => {
//   res.render('inser');
// });

// app.post('/sid', (req, res) => {
//   const nome = req.body.nome;
//   const prenom = req.body.prenom;

//   const sql = 'INSERT INTO sidaxe (name, prenom) VALUES (?, ?)';
//   pool.query(sql, [nome, prenom], (error, result) => {
//     if (error) {
//       console.error('Error executing query:', error);
//       res.status(500).send('Internal Server Error');
//     } else {
//       res.redirect("/");
//     }
//   });
// });


// //-----------------------------------------------------------

// app.delete('/', (req, res) => {
//   // Logic to delete the item based on the request body or query parameters

//   // Extract the item ID from the request body or query parameters
//   const itemId = req.body.id || req.query.id;

//   // Check if the item ID is provided
//   if (!itemId) {
//     res.status(400).send('Item ID is required');
//     return;
//   }

//   // SQL query to delete the item from the table
//   const deleteQuery = 'DELETE FROM sidaxe WHERE id = ?';

//   pool.query(deleteQuery, [itemId], (error, results) => {
//     if (error) {
//       console.error('Error deleting item:', error);
//       res.status(500).send('Error deleting item');
//       return;
//     }

//     // Assuming successful deletion, send a response indicating the item was deleted
//     res.send('Item has been deleted');
//   });
// });


// app.get('/edit/:id', (req, res) => {
  
//     // res.render('update');
  
//   const id = req.params.id;

//   var sql = `SELECT * FROM sidaxe WHERE id = "${id}"`;
//   pool.query(sql, (error, results) => {
//     if (error) {
//       console.error('Error retrieving item:', error);
//       res.status(500).send('Error retrieving item');
//       return;
//     }

//     res.render('update', { item: results[0] });
//   });
// });

// app.post('/edit/:id', (req, res) => {
//   // res.render('update');
//   res.send(`
//   <!-- edit.ejs -->
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Edit Item</title>
// </head>
// <body>
//   <h1>Edit Item</h1>
//   <form action="/edit/<%= item.id %>" method="POST">
//     <label for="nome">Name:</label>
//     <input type="text" id="nome" name="nome" value="<%= item.name %>">

//     <label for="prenom">Prenom:</label>
//     <input type="text" id="prenom" name="prenom" value="<%= item.prenom %>">

//     <button><a href="/edit/:id">delect</a></button>
//   </form>
// </body>
// </html>

  
//   `)
//   const id = req.params.id;
//   const nome = req.body.nome;
//   const prenom = req.body.prenom;

//   var sql = `UPDATE sidaxe SET name = ?, prenom = ? WHERE id = ?`;
//   pool.query(sql, [nome, prenom, id], (error, result) => {
//     if (error) {
//       console.error('Error updating item:', error);
//       res.status(500).send('Error updating item');
//       return;
//     }

//     res.redirect('/');
//   });
// });


// //delete

// app.get('/del/:id', (req, res) => {
//   var id = req.params.id;
//   var sql = `DELETE FROM sidaxe WHERE id = "${id}"`;

//   pool.query(sql, (error, result) => {
//     if (error) {
//       console.error('Error deleting item:', error);
//       res.status(500).send('Error deleting item');
//       return;
//     }

//     res.redirect('/');
//   });
// });

// app.get('/login', (req, res) => {
//   res.send(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta http-equiv="X-UA-Compatible" content="IE=edge">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Login</title>
//     </head>
//     <body>
//       <form action="/login" method="POST">
//         <label>Username:</label>
//         <input type="text" name="user" required>
//         <label>Password:</label>
//         <input type="password" name="pass" required>
//         <button type="submit">Login</button>
//       </form>
//     </body>
//     </html>
//   `);
// });

// app.post('/login', (req, res) => {
//   const user = req.body.user;
//   const pass = req.body.pass;

//   if (user === "sidali" && pass === "sidali123") {
//     res.redirect("/");
//   } else {
//     res.send("Error: Invalid username or password");
//   }
// });

// // Listen for incoming requests
// app.listen(3000, () => {
//   console.log('Express server is running on port 3000');
// });


// /-------------------------------------------------------------------------------------/

const express = require("express");
const app = express();
const port =3000;
const mysql = require('mysql');
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 
app.use(express.urlencoded({ extended: false }));
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get('/login', (req, res) => {
  res.render("login");
});

app.post('/login', (req, res) => {
  var user = req.body.user;
  var pass = req.body.pass;

  if (!user || !pass) {
    res.send("Veuillez fournir un nom d'utilisateur et un mot de passe.");
  } else if (user === "sidali" && pass === "sidali123") {
    res.redirect("crud");
  } else {
    res.send("Erreur de nom d'utilisateur ou de mot de passe.");
  }
});

    const pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'test1'
    });
    
    app.get('/crud', (req, res) => {
      var sql = "SELECT * FROM sidaxe";
      pool.query(sql, (error, results) => {
        if (error) {
          console.error('Error executing query:', error);
          res.status(500).send('Internal Server Error');
        } else {
          res.render('crud', { crud: results });
        }
      });
    });
    
// inser

app.post('/crud', (req, res) => {
  const user = req.body.username;
  const pass = req.body.password;

  var sql = "INSERT INTO sidaxe (name, prenom) VALUES (?, ?)";

  pool.query(sql, [user, pass], (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.redirect("/crud");
    }
  });
});

// update

app.get('/edit/:id', (req, res) => {
  
      // res.render('update');
    
    const id = req.params.id;
  
    var sql = `SELECT * FROM sidaxe WHERE id = "${id}"`;
    pool.query(sql, (error, results) => {
      if (error) {
        console.error('Error retrieving item:', error);
        res.status(500).send('Error retrieving item');
        return;
      }
  
      res.render('update', { crud: results[0] });
    });
  });
  
  app.post('/edit/:id', (req, res) => {

    const id = req.params.id;
    const nome = req.body.nome;
    const prenom = req.body.prenom;
  
    var sql = `UPDATE sidaxe SET name = ?, prenom = ? WHERE id = ?`;
    pool.query(sql, [nome, prenom, id], (error, result) => {
      if (error) {
        console.error('Error updating item:', error);
        res.status(500).send('Error updating item');
        return;
      }else{
  
      res.redirect('/crud');
      }
    });
  });




//delete

app.get('/crud/:id',(req,res)=>{
  var id = req.params.id;
  const sql =`DELETE FROM sidaxe WHERE id="${id}"`;

  pool.query(sql,(error,results)=>{
    if(error){
      console.error("error",error);
      res.status(500).send("error");
      return;
    }else{
    res.redirect("/crud");
    }
  })
});

app.listen(port,()=>{
  console.log("le serveur marche "+port);
})





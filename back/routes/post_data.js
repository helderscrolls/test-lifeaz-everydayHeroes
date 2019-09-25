const express = require("express")
const connection = require('../connection/db')
// const bodyParser = require('body-parser');



// Router
const router = express.Router();

router.post("/", (req, res) => {
  const formData = req.body;
  console.log('logBack', req.body);


  connection.query('INSERT INTO temoignages SET ?', formData, (err, results) => {
    if (err)
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      throw res.status(500).send('Erreur lors de la récupération des employés');
    // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
    return res.status(200).json(results);
  })
})





module.exports = router;

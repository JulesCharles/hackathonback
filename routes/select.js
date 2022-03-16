const express = require('express');
const mysql = require('../config/db');

const Router = express.Router()


/* recuperer sujet pour le select */
Router.get("/", (req, res) => {
	const sql = "SELECT * FROM sujet"
	mysql.query(sql, (err, result) => {
		if (err) {
			res.status(500).send("Error retrieving data from database")
		} else {
			res.status(200).json(result)
		}
	})
})
/* poster message de l'utilisateur */
Router.post('/feedback', (req, res) => {
    const {id_feedback, message, users_id} = req.body
    let datas = [id_feedback, message, users_id]
    let sql = "INSERT INTO feedback (id_feedback, message, users_id) VALUES (?, ?, ?)"
    mysql.query(sql, datas, (err, result) => {
        if (err){
            console.error(err)
            res.status(500).send('error retriving datas')
        } else {
            res.status(200).json(result)
        }
    })
  })


  /* crée son comtpe */
  Router.post('/users', (req, res) => {
    const {id_users, mail, password} = req.body
    let datas = [id_users, mail, password]
    let sql = "INSERT INTO users (id_users, mail, password) VALUES (?, ?, ?)"
    mysql.query(sql, datas, (err, result) => {
        if (err){
            console.error(err)
            res.status(500).send('error retriving datas')
        } else {
            res.status(200).json(result)
        }
    })
  })



/* recuperer question du quizz */
Router.get("/questions", (req, res) => {
	const sql = "SELECT questions FROM quizz"
	mysql.query(sql, (err, result) => {
		if (err) {
			res.status(500).send("Error retrieving data from database")
		} else {
			res.status(200).json(result)
		}
	})
})

/* recuperer les reponses du quizz */
Router.get("/reponses", (req, res) => {
	const sql = "SELECT reponses FROM quizz"
	mysql.query(sql, (err, result) => {
		if (err) {
			res.status(500).send("Error retrieving data from database")
		} else {
			res.status(200).json(result)
		}
	})
})




  Router.post('/quizz', (req, res) => {
    const {id_quizz, questions, reponses, image_choc, image_educ, points, id_users} = req.body
    let datas = [id_quizz, questions, reponses, image_choc, image_educ, points, id_users]
    let sql = "INSERT INTO quizz (id_quizz, questions, reponses, image_choc, image_educ, points, id_users) VALUES (?, ?, ?, ?, ?, ?, ?)"
    mysql.query(sql, datas, (err, result) => {
        if (err){
            console.error(err)
            res.status(500).send('error retriving datas')
        } else {
            res.status(200).json(result)
        }
    })
  })



module.exports = Router
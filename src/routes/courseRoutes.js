// Question: Pourquoi séparer les routes dans différents fichiers ?
// Réponse : Cela permet de gérer les points d'entrée de manière organisée et facilite la navigation dans le code.
// Question : Comment organiser les routes de manière cohérente ?
// Réponse: Grouper les routes par fonctionnalité ou ressource, et respecter une hiérarchie logique.

const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Routes pour les cours
router.post('/addCourse', courseController.createCourse);    
router.get('/:id', courseController.getCourse);
router.get('/', courseController.listCourses);


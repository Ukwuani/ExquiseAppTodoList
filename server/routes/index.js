const router = require('express').Router()
const Controller = require('../controller')
// Create
router.post('/todolist', (req, res) => Controller.createTodoList(req, res))

// Read
router.get('/todolist', (req, res) => Controller.getTodoList(req, res))

// Update
router.put('/todolist', (req, res) => Controller.updateTodoList(req, res))

// Delete
router.delete('/todolist', (req, res) => Controller.deleteTodoListItem(req, res))

module.exports = router
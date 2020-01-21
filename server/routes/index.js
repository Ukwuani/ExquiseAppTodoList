const Router = require('express').Router()
const Controller = require('../controller')

module.exports = () => {
    // Create
    Router.post('/todolist', (req, res) => Controller.createTodoList(req, res))

// Read
    Router.get('/todolist', (req, res) => Controller.getTodoList(req, res))

// Update
    Router.put('/todolist', (req, res) => Controller.updateTodoList(req, res))

// Delete
    Router.delete('/todolist', (req, res) => Controller.deleteTodoListItem(req, res))
}
const Datastore = require('nedb')
const  db = new Datastore('.db/todolist.db')
const model = require('../model/todolist')

// Load DB
db.loadDatabase()

module.exports = {
    /**
     */
    async createTodoList(req, res) {
        const _model = new model(req.body)
        const response = await db.insert(_model, (err, newDoc) => {
            if (err) {
                return {
                    status: 401,
                    success: false,
                    msg: err
                }
            }
            return {
                status: 200,
                success: true,
                msg: 'Todo Item Created'
            }
         })
        res.json(response)
    },

    /**
     */
    async getTodoList(req, res) {
        const response = await db.find(req.query, (err, docs) => {
             if (err) {
                return {
                    status: 401,
                    success: false,
                    msg: err
                }
            }
            return docs
         })
        res.send(response)
    },

    /**
     */
    async updateTodoList(req, res) {
        const response = await db.update({ _id: req.body.id }, { $set:  req.body.data  }, {}, (err, num) => {
            if (err) return {
                status: 401,
                success: false,
                msg: err
            }

            return {
                status: 200,
                success: true,
                msg: 'Item updated'
            }
        })
        res.send(response)
    },

    /**
     */
    async deleteTodoListItem(req, res) {
        const response = await db.remove({ _id: req.query.id }, {}, function (err, numRemoved) {
            if (err) {
                return {
                    status: 401,
                    success: false,
                    msg: err
                }
            }
            return {
                status: 200,
                success: true,
                msg: "Item deleted"
            }
        });
        res.send(response)
    }
}
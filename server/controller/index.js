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
        await db.insert(_model, (err, newDoc) => {
            if (err) {
                res.json({
                    status: 401,
                    success: false,
                    msg: err
                })
            }
            res.json({
                status: 200,
                success: true,
                msg: newDoc
            })
         })
    },

    /**
     */
    async getTodoList(req, res) {
        await db.find(req.query, (err, docs) => {
             if (err) {
                res.json({
                    status: 401,
                    success: false,
                    msg: err
                })
            }
            res.json(docs)
         })
    },

    /**
     */
    async updateTodoList(req, res) {
        await db.update({ _id: req.body.id }, { $set:  req.body.data  }, {}, (err, num) => {
            if (err) res.json({
                status: 401,
                success: false,
                msg: err
            })

            res.json({
                status: 200,
                success: true,
                msg: req.body.data
            })
        })
    },

    /**
     */
    async deleteTodoListItem(req, res) {
        await db.remove({ _id: req.query.id }, {}, function (err, numRemoved) {
            if (err) {
                res.json({
                    status: 401,
                    success: false,
                    msg: err
                })
            }
            res.json({
                status: 200,
                success: true,
                msg: "Item deleted"
            })
        });
    }
}
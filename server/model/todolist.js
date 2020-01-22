module.exports = class {
    constructor({title, label, date}) {
        this.title = title
        this.label = label
        this.time = date
        this.createdAt = new Date()
        this.updatedAt = Date.now()
    }
}
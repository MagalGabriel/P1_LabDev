const Sequelize = require("sequelize")
const sequelize = new Sequelize("p1", "root","", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
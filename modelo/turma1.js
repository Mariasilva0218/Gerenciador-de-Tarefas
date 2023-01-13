const Sequelize = require('sequelize')
const database = require("../db")

const INFO1M = database.define('1INFOM', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
})
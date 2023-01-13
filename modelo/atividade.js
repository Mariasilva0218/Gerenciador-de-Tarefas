const Sequelize = require('sequelize')
const database = require("../db")

const ATIVIDADES = database.define('ATIVIDADES', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    materia: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    data: {
        type: Sequelize.TIME,
        allowNull: true
    },
})
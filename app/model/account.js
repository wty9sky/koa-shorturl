const {
    sequelize
} = require('../../../core/db')
const {
    Sequelize,
    Model
} = require('sequelize')

class Account extends Model {

}

Account.init({
    // 测评ID
    account: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey:true
    },
    // 测评名称
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // 测评时间
    hash:{
        type:Sequelize.STRING,
        allowNull:false
    }
}, {
    sequelize,
    tableName: 'account'
})

module.exports = {
    ExamDb
}
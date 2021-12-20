const {
    sequelize
} = require('../../core/sequelize')
const {
    Model,
    DataTypes
} = require('sequelize')

class Url extends Model {

}

Url.init({
    url_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url:{
        type:DataTypes.STRING,
        allowNull:false
    },
    show:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true
    },
    visit:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0
    }
}, {
    sequelize,
    tableName: 'urls'
})

module.exports = {
    Url
}
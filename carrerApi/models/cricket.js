const Sequelize=require("sequelize");

const sequelize=require("../util/database");

const Cricketers=sequelize.define('cricketer',{
    id:{
      type:Sequelize.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true
    },
    name:{
      type:Sequelize.STRING,
      allowNull:false
    },
    dob:{
        type:Sequelize.STRING,
        allowNull:false
    },
    photo:{
        type:Sequelize.STRING,
        allowNull:false
    },
    place:{
        type:Sequelize.STRING,
        allowNull:false
    },
    carrer:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    score:{
        type:Sequelize.STRING,
        allowNull:false
    },
    fifties:{
        type:Sequelize.STRING,
        allowNull:false
    },
    centuries:{
        type:Sequelize.STRING,
        allowNull:false
    },
    wickets:{
        type:Sequelize.STRING,
        allowNull:false
    },
    matches:{
        type:Sequelize.STRING,
        allowNull:false
    },
    average:{
        type:Sequelize.STRING,
        allowNull:false
    }
  });

module.exports=Cricketers;  
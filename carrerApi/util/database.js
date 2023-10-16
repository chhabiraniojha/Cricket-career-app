const Sequelize=require("sequelize");

const sequelize=new Sequelize('cricket-carrer','root','rinku9938300585@',{
    dialect:'mysql',
    host:'localhost',
    logging: false
});

module.exports=sequelize;
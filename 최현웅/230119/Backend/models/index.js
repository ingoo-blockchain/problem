const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config")["db"][env];

const sequelize = new Sequelize(config.database, config.username, config.password, config)

fs.readdirSync(__dirname).filter((file)=> file.indexOf("model")!== -1).map(file => {
    try {
        require(path.join(__dirname, file))(sequelize, Sequelize)
    } catch(e) {
        console.log(`Error requiring file: ${file}. Error: ${e}`)
    }
})

const {models} = sequelize
for (const key in models){
    if(typeof models[key].associate !== "function") continue
    models[key].associate(models) 
    
}

module.exports = {
    sequelize, 
    Sequelize
}



// const t1 = fs.readdirSync(__dirname);
// console.log("t1",t1);

// const t2 = fs.readdirSync(__dirname).filter((file)=> file.indexOf("model")!== -1);
// console.log("t2", t2)

// const t31 = fs.readdirSync(__dirname).filter((file)=> file.indexOf("model")!== -1).forEach(file =>{
//     require(path.join(__dirname, file))
// })
// console.log("t3", t31)
// fs.readdirSync(__dirname).filter((file) => file.indexOf("model") !== -1).forEach((file) => {
//         require(path.join(__dirname, file))(sequelize, Sequelize)
//     })
// fs.readdirSync(__dirname).filter((file)=> file.indexOf("model")!== -1).map(file => {
//     try {
//         require(path.join(__dirname, file))
//     } catch(e) {
//         console.log(`Error requiring file: ${file}. Error: ${e}`)
//     }
// })(sequelize, Sequelize)
// console.log("t3-2", t32);
// fs.readdirSync(__dirname).filter((file)=> file.indexOf("model")!== -1).forEach(file =>{
//         require(path.join(__dirname, file))
//     })(sequelize, Sequelize);

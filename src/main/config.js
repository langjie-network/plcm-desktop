

const configDev={

    actionUrl:"http://localhost:7001"
}

const configProd={

    actionUrl:"https://action.langjie.com"
}

const config= process.env.ENV=="dev"?configDev:configProd

console.log("run on "+process.env.ENV)
module.exports = config;



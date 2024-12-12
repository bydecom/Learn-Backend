const express = require('express')
const morgan = require('morgan')
const {default: helmet} = require('helmet')
const compression = require('compression')   
const app = express()


//init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
//init db

//init router
app.get('/',(req , res, next) => {
    const strCompress ='Hello bydecom'
    return res.status(200).json({
        message:'Welcome Bydecom',
        metaData: strCompress.repeat(100000)
        
    })
})
//handle error


module.exports = app
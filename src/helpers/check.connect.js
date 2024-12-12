'use strict'

const mongoose = require('mongoose')

const countConnect = () => {
    const numConnect = mongoose.connections.length
    console.log(`NUmber of Conecctions:: ${numConnect}`)
}

module.exports ={
    countConnect
} 
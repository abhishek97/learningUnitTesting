/**
 * Created by abhishek on 07/08/16.
 */
'use strict';


const express = require('express');
const path = require('path');
const app = express();

app.use('/', express.static( path.join(__dirname , 'www') ) );

app.get('/getfare' , function (req , res) {

    const km = req.query['km'];
    const time = req.query['time'];

    let fare = calculateFare(km , time);

   res.send( {fare} );
});

function calculateFare(km , time) {

    return 25 + Math.max( 0 , km - 2 ) * 8 + Math.max(0 , time - 15);
}

module.exports = {
    calculateFare
}

app.listen( 8080 , function () {
    console.log('.. Server running ')
});
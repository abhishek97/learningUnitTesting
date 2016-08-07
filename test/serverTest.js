/**
 * Created by abhishek on 07/08/16.
 */
'use strict';
 
const assert = require('assert');
const server = require('../server');

describe('server tests' , () => {
    describe('calcfare()' , () => {
        it('return fare' , () => {
            assert.equal(server.calculateFare(3 , 16) , 34 , "WRONG");
        })
    })
});
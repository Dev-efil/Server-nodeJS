const express = require("express");
const router = express.Router();
const connection = require('../../config/dbConfig');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Login
router.post('/login', function(req, res, next)
{  
    connection.getConnection(function(error, tempCont){
        if(error)
        {
            tempCont.release();
            console.log('Error: can not connect database');
        }
        else
        {
            var sql = "SELECT id,username,password,email FROM Login WHERE email='"+req.body.email+"'";
            tempCont.query(sql, (err, results, fields)=>{
                if(err)
                {
                    return res.status(500).json({message: err});
                }
                if(results.length < 1)
                {
                    return res.status(401).json({message: 'Athentication failed'});
                }
                else if(results)
                {
                    var password = results[0].password;
                    bcrypt.compare(req.body.password, password, (err, result)=>{
                        if(err)
                        {

                        }
                        if(result)
                        {

                        }
                        else
                        {
                            return res.status(401).json({message: 'Authentication failed'});
                        }
                    });
                }
            });
        }
    });
});

module.exports = router;
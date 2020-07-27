const jwt = require('jsonwebtoken');
require("dotenv").config({ path: "../../variables.env" });
const accessTokenSecret = process.env.JWT_SECRET;

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const db = req.app.locals.db;

        //add code to find u/p

        const user =  await db.collection('users').findOne(
            {
                $and: [
                    {'username' : username},
                    {'password' : password}
                ]
            }
        );

        if (user) {
            // Generate an access token
            const accessToken = jwt.sign({ username: user.username,  role: user.role }, accessTokenSecret);

            res.json({
                accessToken
            });
        } else {
            res.json({
                "error": true,
                "errorMsg": "Username or password incorrect"
            });
        }
    } catch(err){
        console.log(err);
    }
}
  
exports.checkAuth = async (req, res) => {
    res.send(200);
}

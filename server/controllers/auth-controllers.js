const { User } = require('../models/authModels');
const bcrypt = require('bcrypt');

const saltRound = 10

const authControllers = {
    signUp: async (req, res) => {

        try {
            const { name, password, email } = req.body;

            const hashedPassword = await bcrypt.hash(password, saltRound);

            const newUser = await User.create({
                name: name,
                password: hashedPassword,
                email: email
            })

            if (newUser) {
                res.status(201).json({ 
                    message: 'User created successfully', 
                    data: { 
                    name: newUser.name, 
                    email: newUser.email
                }})
            } else {
                res.status(400).json({
                    message: 'Failed to create user'
                })
            }
        } catch (error) {
            res.status(500).json({
                message: 'Something went wrong'
            })
        }
    },

    login: async (req, res)  => {
        try {
            const { password, email } = req.body;

            const user = await User.findOne({ 
                email: email
            })

            if (user) {
                const comparePassword = await bcrypt.compare(password, user.password)

                if (comparePassword) {
                    res.status(201).json({
                        message: 'Login successfull'
                    })
                } else { 
                    res.status(400).json({
                        message: 'Incorrect password'
                    })
                } 
            } else {
                res.status(400).json({
                    message: 'user does not exist'
                })
            }
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = authControllers;
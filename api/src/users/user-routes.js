const express = require('express')
const router = express.Router()

const { generateJwt } = require('../utils')
const { cookieOptions } = require('../../config')
const usersRepository = require('./users-repository')

router.post('/login', (req, res) => {
  const { username, password } = req.body
  usersRepository
    .getByUsername(username, password)
    .then(userData => {
      res.cookie('jwt', generateJwt(userData), cookieOptions)
      res.status(200).send(userData)
    })
    .catch(err => {
      if (err === 'User not found')
        res.status(200).send({ message: 'Cannot find user with this username' })
      else if (err === 'Invalid password') {
        res.status(200).send({ message: 'Invalid password' })
      } else {
        console.log('Error:', err)
        res.status(500).send({ message: 'An error has occurred' })
      }
    })
})

module.exports = router

const bcrpyt = require('bcrypt')
const camelize = require('camelize')
const pgPool = require('../pg-pool')

const getByUsername = (username, password) => {
  return pgPool
    .query(`select * from users where username = $1;`, [username])
    .then(res => {
      if (!res.rows[0]) throw 'User not found'
      const results = camelize(res.rows[0])

      if (bcrpyt.compareSync(password, results.password)) {
        delete results.password
        return results
      } else throw 'Invalid password'
    })
}

const getById = userId => {
  return pgPool
    .query(`select id from users where id = $1;`, [userId])
    .then(res => {
      if (!res.rows[0]) throw 'User not found'
      return camelize(res.rows[0])
    })
}

module.exports = {
  getByUsername,
  getById,
}

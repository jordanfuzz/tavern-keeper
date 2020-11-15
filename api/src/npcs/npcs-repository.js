const camelize = require('camelize')
const pgPool = require('../pg-pool')

const getAll = () => {
  return pgPool.query('select * from npcs;').then(res => camelize(res.rows))
}

module.exports = {
  getAll,
}

const camelize = require('camelize')
const { v4: uuidv4 } = require('uuid')
const pgPool = require('../pg-pool')

const getAll = () => {
  return pgPool.query('select * from npcs;').then(res => camelize(res.rows))
}

const save = npcData => {
  const npcId = uuidv4()

  const saveQuery = `
  insert into npcs(id, name, avatar_url) 
  values($1, $2, $3)
  returning *;
`

  return pgPool.query(saveQuery, [npcId, npcData.name, npcData.avatarUrl])
}

module.exports = {
  getAll,
  save,
}

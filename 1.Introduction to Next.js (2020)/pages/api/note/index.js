import nc from 'next-connect'
import notes from '../../../src/data/data'

const handler = nc()
  .get((req, res) => {
    res.json({ data: notes })
  })
  .post((req, res) => {
    const note ={
      ...req.body,
      id: Data.now()
    }

    notes.push(note)
    res.json({ data: note })
  })

module.exports = handler
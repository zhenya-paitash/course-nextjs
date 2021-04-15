import nc from 'next-connect'
import notes from '../../../src/data/data'

const getNote = id => notes.find(n => n.id === +id)

const handler = nc()
  .get((req, res) => {
    const note = getNote(req.query.id)

    if (!note) {
      res.status(404)
      res.end()
      return
    }

    res.json({ data: note })
  })
  .patch((req, res) => {
    const note = getNote(req.query.id)

    if (!note) {
      res.status(404)
      res.end()
      return
    }

    const updNote = notes.findIndex(n => n.id === +req.query.id)
    const updated = { ...note, ...req.body }

    note[updNote] = updated
    res.json({ data: updated })
  })
  .delete((req, res) => {
    const note = getNote(req.query.id)

    if (!note) {
      res.status(404)
      res.end()
      return
    }

    const delNote = notes.findIndex(n => n.id === +req.query.id)
    notes.splice(delNote, 1)

    res.json({ data: req.query.id })
  })

module.exports = handler
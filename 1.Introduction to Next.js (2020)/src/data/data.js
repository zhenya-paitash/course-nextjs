const notes = Array
  .from({ length: 15 }, 
    (_, idx) => ({
      id: Date.now() + idx,
      title: `Note ${idx + 1}`
    })
  )


module.exports = notes
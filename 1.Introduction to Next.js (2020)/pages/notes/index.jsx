import React from 'react'
import Link from 'next/link'

const Note = () => {
  const notes = Array.from({ length: 15 }, (_, idx) => ({ id: idx + 1, title: `Note: ${idx + 1}` }))

  return (
    <>
      <h1>Notes</h1>

      {notes.map(note => (
        <div>
          <Link
            key={note.id}
            href="/notes/[id]"
            as={`/notes/${note.id}`}
          >
            <a><strong>{note.title}</strong></a>
          </Link>
        </div>
      ))}

    </>
  )
}

export default Note
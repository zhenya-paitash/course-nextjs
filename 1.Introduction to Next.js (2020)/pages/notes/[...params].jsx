import React from 'react'
import { useRouter } from 'next/router'

const NoteParams = () => {
  const router = useRouter()
  // /notes/1/2/3/4/5
  const { params } = router.query

  return (
    <h1>
      Note /{ params }
    </h1>
  )
}

export default NoteParams
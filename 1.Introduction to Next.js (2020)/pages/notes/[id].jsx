/** @jsxImportSource theme-ui */
import { useRouter } from 'next/router'
import Link from 'next/link'

const _ = ({ note }) => {
  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Note: {note?.title} </h1>
    </div>
  )
}

export default _

export async function getServerSideProps({params, req, res}) {
  console.log(params)
  const response = await fetch(`http://localhost:3000/api/note/${params.id}`)

  if (!response.ok) {
    // res.writeHead(304, { Location: '/notes' }).end()
    return {props: {}}
  }

  const {data} = await response.json()
  
  
  if (data) {
    return {
      props: {note: data}
    }
  }
}
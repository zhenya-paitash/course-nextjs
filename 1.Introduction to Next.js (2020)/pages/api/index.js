import nc from 'next-connect'

const handler = nc()
  .get((req, res) => {
    res.json({ message: 'GET is ok' })
  })
  .post((req, res) => {
    res.json({ message: 'POST is ok' })
  })

// export default (req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'application/json');
//   res.end(
//     JSON.stringify({
//       message: 'hello',
//     })
//   );
// };

export default handler
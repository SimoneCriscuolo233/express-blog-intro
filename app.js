const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Server del mio blog')
})
const myArray = [{
  title: 'Placeholder',
  content: 'immagine',
  img: 'img/placeholder600px.png',
  tags: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']
},
{
  title: 'Placeholder',
  content: 'immagine',
  img: 'img/placeholder600px.png',
  tags: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']
},
{
  title: 'Placeholder',
  content: 'immagine',
  img: 'img/placeholder600px.png',
  tags: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']
},
{
  title: 'Placeholder',
  content: 'immagine',
  img: 'img/placeholder600px.png',
  tags: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']
},
{
  title: 'Placeholder',
  content: 'immagine',
  img: 'img/placeholder600px.png',
  tags: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem']
},
]
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

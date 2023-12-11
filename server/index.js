const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({"name":'soumya'}).send();
})

app.get('/hello',(req,res)=>{
    res.json({'msg':'this is a json response...'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
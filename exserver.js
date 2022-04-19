const { json } = require('body-parser');
const express = require('express');
const app = express()

app.use(express.json());

const person=[
    {
        id:1,
        name:"sonu",
        roll:"4"
    },
    {
        id:2,
        name:"sonu",
        roll:"4"
    },
    {
        id:3,
        name:"sonu",
        roll:"4"
    }

]


app.listen(5600, (req, res)=>{
    console.log('started')
    
});

app.get('/', (req, res)=> {
    res.write("welcome")
    res.end();
})

app.get('/person', (req, res) => { 
   res.json(person);

 })

app.get('/person/:id', (req, res) => { 
    let {id} = req.params;
    let result = person.find(el =>
        el.id === parseInt(id));

     if (result) res.status(200).send(result);
     res.status(404).send('not found')   
    
 })

 app.post('/person',(req, res) => { 
    // console.log(req.body)
    person.push({id: person.length +1, ...req.body});
    res.status(201).send('done')
  })

  app.delete('/person/:id', (req, res)=>{
      const {id} = req.params;
      person.splice(parseInt(id) -1, 1);
      res.status(200).send("deleted")
  })

  app.put("/person/:id", (req, res) => {
    const { id } = req.params;
    let index = person.findIndex(el => el.id == id);
    person[index] = { ...person[index], ...req.body };
    res.send("Person updated");
  });
const { response } = require("express")
const express = require("express")
const app = express()
const port = 8000
const { faker } = require('@faker-js/faker');

class User {
    constructor() {
        this.id = faker.datatype.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.lastName = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();

    }
}

class Company {
    constructor() {
        this.id = faker.datatype.number();
        this.companyName = faker.company.companyName()
        this.address = faker.address.city();
        
    }
}

console.log(new User)
console.log(new Company)

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get('/', (req, res)=>{
    res.json(User)
})

app.get('/world', (req, res)=>{
    res.json("Worldeee")
})

app.get('/names', (req, res)=>{
    res.json(users)
})

app.get('/names/:id', (req, res)=>{
    const id = req.params.id
    res.json(users[id])
})

app.post('/names', (req, res)=>{
    users.push(req.body)
    res.json({status: "ok"})
})

app.put('/names/:id', (req, res)=>{
    const id = req.params.id
    users[id] = req.body
    res.json({status: "ok"})
})

app.delete('/names/:id', (req, res)=>{
    const id = req.params.id
    users.splice(id, 1)
    res.json({status: "deleted ok"})
})


app.listen( port, () => console.log(`Listening on port: ${port}`) );
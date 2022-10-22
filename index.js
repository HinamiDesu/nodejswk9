const express = require('express')
const app = express()

app.get('/',(req, res) => {
    res.send('Hello World')
})

app.get('/getname',(req, res) => {
    res.send('Rawinan Kaewpuang')
})

app.get('/getprofile',(req, res) => {
    let data = {
        name: 'Rawinan Kaewpuang',
        age: 19,
        apocalypse: 'No pain No gain',
        details:'I am A Sophomore Student In Multimedia Entertainment Engineering, Bangkok University.Along The Way I Have Been Studying In Bangkok Iniversity. I Have Learnt A Lot Hard Skill And Soft Skill To Become Who I Want To Be And Follow My DREAM',
    }
    res.send(data)
})

app.get('/getabout',(req, res) => {
    let data = {
        name: 'Rawinan Kaewpuang',
        age: 19,
        email: 'rawinan.kaew@bumail.net',
        address:'Pathumyhani,Thailand',
    }
    res.send(data)
})

app.get('/getproject',(req, res) => {
    let data = {
        project_name: 'BeatBox Knockout',
        project_description: 'Bu Creative sandbox X Workpoint',
        project_link : 'none', 
    }
    res.send(data)
})

app.get('/getcontact',(req, res) => {
    let data = {
        address: 'Pathumthani,Thailand',
        email: 'rawinan.kaew@bumail.net',
        phone_number:'-',
    }
    res.send(data)
})

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})
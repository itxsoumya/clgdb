const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors');
const app = express()

// const corsOptions = {
//   origin: function (origin, callback) {
//     const allowedOrigins = ['http://localhost:5173', 'https://clgdb.onrender.com'];

//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
// };
app.use(cors());
app.use(bodyParser.json())
require('dotenv').config()
const port = process.env.PORT || 5000
const db_url = process.env.DB_URL
const db_user = process.env.DB_USERNAME
const db_pass = process.env.DB_PASSWORD
const uri = `mongodb+srv://${db_user}:${db_pass}@${db_url}.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(uri)

const db = mongoose.connection;


const studentSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  rollNumber:{
    type:String
  },
  regNumber:{type:Number},
  branch:{type:String},
  phoneNumber:{type:Number},
  gender:{type:String},
  dob:{type:String},
  district:{type:String},
  city:{type:String},
  zipCode:{type:Number},
  email:{type:String},
  igusername:{type:String},
  hobby:{type:String},
  currentSem:{type:Number}
  
});

const Student = mongoose.model('Student',studentSchema)

db.on('connected', () => {
  console.log('[+] connected to database')



  app.get('/', (req, res) => {
    res.json({ "name": 'haaa....' }).send();
  })

  app.post('/',(req,res)=>{

    console.log('--------------')
    console.log(req.body)
    console.log('-------------')
    
    
    const newStudent = new Student(req.body)

    // have't done error handling 

    newStudent.save().then(()=>res.json(req.body)).catch(err=>{
      res.status(500).json({error:'Internal Server Error'})
    })

  })


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})

db.on('error', (err) => {
  console.log('[+] db err: ', err)
})






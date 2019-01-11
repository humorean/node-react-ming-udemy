
const express = require('express');
const app = express();
// const router = express.Router();

app.set('port', (process.env.PORT || 5002));

app.listen(app.get('port'),()=>{
    console.log(`Node app is listening to port ${app.get('port')}`);
});



// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT WTF Mike?' });
});

app.use('/', (req,res)=>{
    res.send('You are home oh hell yea!!!');
});
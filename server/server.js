const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let calcArray = []


app.post('/calc', (req, res) => {
    console.log('we made it!')
    
    res.sendStatus(201);
    console.log(calculate(req.body));
    // calcArray.push(req.body);
    // console.log(calcArray);     
})

function calculate(object){
    if (object.operator === '+'){
        return Number(object.number1) + Number(object.number2);
    }
    else if (object.operator === '-'){
        return Number(object.number1) - Number(object.number2);
    }
    else if (object.operator === '*'){
        return Number(object.number1) * Number(object.number2);
    }
    else if (object.operator === '/'){
        return Number(object.number1) / Number(object.number2);
    }
}



app.listen(5000, ()=> {
    console.log('🌽 I\'m listening....');
});


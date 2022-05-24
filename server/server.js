const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 5000

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let calcHistory = [];

app.get('/calc', (req,res)=> {
    res.send(calcHistory);
})

app.post('/calc', (req, res) => {
    console.log('we made it!')
    let something = req.body;

    console.log(calculate(something));
    something.result = (calculate(something)); 
    calcHistory.push(something);  //pushed object into calcHistory array
    console.log('calcHistory Array:', calcHistory); // 
    res.sendStatus(201); //shows created 
})

//changes operator string and calculates 
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
    } else {console.log('no operator found!')}

}



// app.listen(5000, ()=> {
//     console.log('🌽 I\'m listening....');
// });


const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let calcHistory = [];
let secondObject = {};

app.get('/calc', (req,res)=> {
    res.send(calcHistory);
})

app.post('/calc', (req, res) => {
    console.log('we made it!')
    
    console.log(calculate(req.body));
    secondObject.equation = (req.body); // added property to secondObject 
    secondObject.result = (calculate(req.body)); // added property to secondObject 
    console.log('secondObject:', secondObject); // test to see if the equation and result got added 
    calcHistory.push(secondObject);  // 
    console.log('calcHistory Array:', calcHistory); // 
    res.send({tacos: secondObject});

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
    } else {console.log('no operator found!')}
}



app.listen(5000, ()=> {
    console.log('🌽 I\'m listening....');
});


const express = require('express');
const app = express();


app.get('/', (request, response) => {
    response.send(`
        <h1>99 Bottles of beer on the walls </h1>
       <h2> <a href="/localhost:3000/98" > Take one down pass it around</a> </h2>
    `)
});


app.get('/:number_of_bottles', (request, response) => {
   if(request.params.number_of_bottles != 0){
    response.send(`
        <h1>${request.params.number_of_bottles} Bottles of beer on the walls </h1>
       <h2> <a href="/${parseInt(request.params.number_of_bottles)-1}" > Take one down pass it around</a> </h2>
    `)
 }else (
    response.send(
        '<h2> <a href="/localhost:3000/" > Home Page </a> </h2>'
))
});







app.listen(3000, () => {
    console.log('listening 3000')
})
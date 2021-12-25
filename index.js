const exprees = require('express');
const app = exprees();
const port = 8000;

//use express router
app.use('/', require('./routes'))
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, (err)=>{
    if(err){
        console.log(`Error: ${err}`);
    }
    console.log(`Server is up and running on port: ${port}`);
})
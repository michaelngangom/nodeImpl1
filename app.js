var express = require('express');
var app=express();
let ejs = require('ejs');

app.set('view engine','ejs');


app.get('/',(request,response)=>{
    response.send('default route');
});

app.get('/home',(request,response)=>{
    response.render('../views/pages/home.ejs');
});
app.get('/setupdata',(request,response)=>{
    response.render('../views/pages/data.ejs');
});

app.get('/hpp',(request,response)=>{
    response.render('../views/pages/hpp.ejs');
});

app.get('/api',(request,response)=>{
    response.render('../views/pages/api.ejs');
});
app.get('/cse',(request,response)=>{
    response.render('../views/pages/cse.ejs');
});
app.get('/checkout',(request,response)=>{
    response.render('../views/pages/checkout.ejs');
});
app.get('/android',(request,response)=>{
    response.render('../views/pages/android.ejs');
});

app.get('/ios',(request,response)=>{
    response.render('../views/pages/ios.ejs');
});

app.listen(3030,(req,res)=>{
    console.log('Server started on 3000');
});




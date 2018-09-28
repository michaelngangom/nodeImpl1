var express = require('express');
var app=express();
let ejs = require('ejs');
var request = require('request');

var options = { method: 'POST',
  url: 'https://checkout-test.adyen.com/v37/paymentSession',
  headers: 
   { 'Postman-Token': '53830841-9521-4eee-8707-6b18a5cad8bb',
     'Cache-Control': 'no-cache',
     'X-Api-Key': '',
     'Content-Type': 'application/json' },
  body: 
   { amount: { currency: 'EUR', value: 17408 },
     reference: 'Your order number',
     shopperReference: 'yourShopperId_IOfW3k9G2PvXFu2j',
     channel: 'Web',
     html: true,
     origin: 'http://localhost:8080',
     returnUrl: 'https://www.yourshop.com/checkout/result',
     countryCode: 'NL',
     shopperLocale: 'nl_NL',
     merchantAccount: 'MichaelNgangom',
     sdkVersion: '1.3.0' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log();
});



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




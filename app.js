const express = require('express');


const ejs = require('ejs');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('views'));
 

app.set('view engine', 'ejs');

const path = require('path');
app.use(express.static(path.join(__dirname, '/upload')))




const router = require("./controller/controller")


app.use('/', router);









   


// // sending mail
// var nodeMailer=require('nodemailer');
// var transport=nodeMailer.createTransport({
//     host:'smtp.gmail.com', //simple mail transfer protocol (smpt)? smtp is use send to send ans recive email
//     port:587,
//     secure:false,
//     requireTLS:true, 
//     auth:
//     {
//         user:'harshkaushik9213466015@gmail.com',
//         pass:'phwd vztb icql dmsg'
//     }

// });




// var mailOptions = {
//     from: 'harshkaushik9213466015@gmail.com',
//     to: '',
//     subject:'node mail',
//     text: "hlo ",
// }
// transport.sendMail(mailOptions,function(error,info)
// {
//     if(error)
//     {
//         console.log(error);

//     }
//     else{
//         console.log('email has been send',info.response);
//     }
// })

app.listen(1234);



 




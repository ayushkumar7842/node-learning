var nodemailer = require('nodemailer');
require('dotenv').config();


const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure:true,
     //service:'Gmail',
    auth:{
        user:process.env.email,
        pass:process.env.password
    }
});

let mailOptions = {
  from :process.env.email,
  to:process.env.email,
  subject:'Test mail',
  text:'Hello',
  html:"My name is <h1>test</h1>"  
};

transporter.sendMail(mailOptions,(err,info) =>{
    if(err){
        console.log('error',err);
        return;
    }
    console.log('Message sent',info.response);
})
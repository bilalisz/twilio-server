//*********** Modules */

const express =require('express')
const bodyParser =require('body-parser')
const twilio =require('twilio')
const cors =require('cors');

//*********** Global Variables */
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO__AUTH_TOKEN;
const port = process.env.PORT_NUMBER;
const app = express();
const client = twilio(accountSid,authToken);

//*********** MiddleWare functions */
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//*********** create server and APIs routers functions */
app.get('/',(req,res)=>{
    res.send({accountSid:accountSid})
})






//*********** Server is listening */
app.listen(port,()=>console.log('Server is running on port '+' '+ port))

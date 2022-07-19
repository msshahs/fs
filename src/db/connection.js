const mongoose = require('mongoose');

//establishing connection with mongoose on local host  
// it returns a promise so will use then and catch

mongoose.connect('mongodb://localhost:27017/websitedata',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connection successful');
}).catch((err)=>{
    console.log(err + ' in connecting ');
})
const url = 'mongodb+srv://haris229:gZTbE9trLh291zLU@cluster0.eesov.mongodb.net/webbank?retryWrites=true&w=majority';

const mongoose = require('mongoose');

mongoose.connect(url, (err) => {
    if (err){
        console.log(err);
    }
    else {
        console.log("connected");
    }  
})





import mongoose from 'mongoose'


mongoose.connect("mongodb://localhost/companydb",{
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(db => console.log("db is connect"))
    .catch(error => console.log(error))
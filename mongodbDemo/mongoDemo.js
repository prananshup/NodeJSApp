const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/learning', { useNewUrlParser: true })
.then(() => console.log('Connected to MongoDB....'))
.catch(err => console.error(err));

const courseSchema = new mongoose.Schema({
    name: 'String',
    author: 'String',
    price: 'Number',
    published: 'Boolean'
});

const Course = mongoose.model('Course', courseSchema);

const course1 = new Course({
    name: 'Mongo',
    author: 'Prananshu',
    price: 10.50,
    published: true
})

course1.save(course1);
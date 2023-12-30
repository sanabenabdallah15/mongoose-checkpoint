const Person=require('../person')
//create and save new person 
const person = new Person({
    name: 'John Doe',
    age: 25,
    favoriteFoods: ['Pizza', 'Burger']
  });
  
  person.save((err, data) => {
    if (err) return console.error(err);
    console.log('Person saved:', data);
  });
  //Create Many Records with model.create()
  const arrayOfPeople = [
    { name: 'Alice', age: 30, favoriteFoods: ['Pasta', 'Salad'] },
    { name: 'Bob', age: 22, favoriteFoods: ['Sushi', 'Steak'] }
  ];
  
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return console.error(err);
    console.log('People created:', data);
  });
 // Use model.find() to Search the Database
 Person.find({ name: 'John Doe' }, (err, data) => {
    if (err) return console.error(err);
    console.log('People found:', data);
  });
//Use model.findOne() to Return a Single Matching Document:
Person.findOne({ favoriteFoods: 'Pizza' }, (err, data) => {
    if (err) return console.error(err);
    console.log('Person found:', data);
  });
//Use model.findOne() to Return a Single Matching Document:
Person.findOne({ favoriteFoods: 'Pizza' }, (err, data) => {
    if (err) return console.error(err);
    console.log('Person found:', data);
  });
//Use model.findById() to Search by _id:
const personId =Person.body

Person.findById(personId, (err, data) => {
  if (err) return console.error(err);
  console.log('Person found by ID:', data);
});
//Perform New Updates Using model.findOneAndUpdate():
const personName = Person.body;

Person.findOneAndUpdate(
  { name: personName },
  { $set: { age: 20 } },
  { new: true },
  (err, data) => {
    if (err) return console.error(err);
    console.log('Person updated:', data);
  }
);
//Delete One Document Using model.findByIdAndRemove:
const personid = Person.body;

Person.findByIdAndRemove(personid, (err, data) => {
  if (err) return console.error(err);
  console.log('Person deleted:', data);
});
//Delete Many Documents with model.remove():
Person.remove({ name: 'Mary' }, (err, result) => {
    if (err) return console.error(err);
    console.log(`${result.deletedCount} people deleted`);
  });
//Chain Search Query Helpers:
Person.find({ favoriteFoods: 'Burritos' })
  .sort({ name: 1 })
  .limit(2)
  .select({ age: 0 })
  .exec((err, data) => {
    if (err) return console.error(err);
    console.log('People found:', data);
  });

    
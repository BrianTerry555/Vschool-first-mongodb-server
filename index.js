let mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;

//url to connect to database -> mongo runs on port 27017
let url = "mongodb://localhost:27017/catbabies"

//

//connect to db takes the url and a callback function
MongoClient.connect(url, (err, db)=> {
  if(err) {
    console.log("Error in running mongodb", err);
  } else {
    console.log("Success you have connected to the database");
    //connect to the catbabies collection
    let catbabies = db.collection("catbabies");
    //find all catbabies
    catbabies.find({}).toArray((err, data) => {
      if(err) {
        console.log(err);
      }
      console.log(data);
      db.close();
    });
    //insert a catbaby
    // catbabies.insertOne({
    //   name: "Jacob",
    //   color: "brown",
    //   age: 82
    // }, (err, result) => {
    //   if(err) {
    //     console.log(err);
    //   } else {
    //     console.log(result);
    //   }
    // });
    //delete catbaby with id of <id>
    // catbabies.deleteOne({_id: new mongodb.ObjectID("597fb4e99163bb9ddaf7086f")}, (err, result) => {
    //   if(err) {
    //     console.log(err);
    //   } else {
    //     console.log(result);
    //   }
    // });
    //update a catbaby with id of <id>
    catbabies.updateOne({_id: new mongodb.ObjectID("597fb16a686c689d95195746")}, {$set: {color: "orange"}}, (err, result) => {
      if(err) {
        console.log(err);
      } else {
        console.log("Success item was updated")
      }
    });
  }
});

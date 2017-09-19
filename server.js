var _ = require('lodash');
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var csv = require("csvtojson");


// Connection URL 
var url = 'mongodb://localhost:27017/contacts';
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
 
  insertDocuments(db, function() {
    db.close();
  });
});
 
var insertDocuments = function(db, callback) {
  // Get the documents collection 
  var collection = db.collection('documents');
  // Insert some documents 
            csv()
              .fromFile('csvFile/contacts.csv')
              .on("end_parsed",function(jsonArrayObj){ //when parse finished, result will be emitted here.

                var userArray =[];
                _.forEach(jsonArrayObj, function(value) {
                        userArray.push(value);
                        console.log(userArray.length);
                        
                          collection.insert([
                             userArray
                          ], function(err, result) {
                            assert.equal(err, null);
                            
                            callback(result);
                          });
                 });
                 
               })

  


  
  
}


  


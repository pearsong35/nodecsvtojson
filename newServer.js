var _ = require('lodash');
var csv = require("csvtojson");

// Convert a csv file with csvtojson
csv()
  .fromFile('csvFile/contacts.csv')
  .on("end_parsed",function(jsonArrayObj){ //when parse finished, result will be emitted here.
     console.log(jsonArrayObj.length); 
     
     var count = 0;
    _.forEach(jsonArrayObj, function(value) {
                
                console.log('this is new' + count, value);
                count++;
    });
     
     console.log('count number is:', count);
   })

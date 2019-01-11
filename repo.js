const mongodb = require('mongodb')
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'employees';

function connect(callback){
    MongoClient.connect("mongodb://localhost:27017/dbName", { 
        
    useNewUrlParser: true },function(err, client) {
      assert.equal(null, err);
      console.log("Connected successfully to server");
      if(err)
      {
          callback(err,null)

      }
      else{  callback(null,client)}
 
    });
}

function findemployee(callback){
connect((err,client)=>{const db = client.db(dbName);
    const collection = db.collection('employee');
   
   
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      client.close();
     callback(null,docs);
    });
   })
   
}

function insertemployee(color,callback){
    console.log(typeof(color));
    connect((err,client)=>{
        const db = client.db(dbName);
        const collection = db.collection('employee');
         //Insert one document
    collection.insertOne(color,(err,result) => {
        console.log("Inserted the colors")
        client.close();
        callback(result);
    }) ;

    
       
       })
       
    }
    function deleteemployee(email,callback){
        connect((err,client)=>{
            const db = client.db(dbName);
            const collection = db.collection('employee');
             //delete one document
             collection.deleteOne({ email:email }, function(err, result) {

                console.log("Removed the document with the field a equal to "+email);
                callback(result);
        }) ;
    })
}

    function updateemployee(body,callback){
        connect((err,client)=>{
            const db = client.db(dbName);
            const collection = db.collection('employee');
            //collection.find({'a': 3}).toArray(function(err, docs) {
                //console.log(docs);
              //});
            //update one document
            collection.updateOne({empid:body.empid}
               , { $set: { empid:body.empid,first_name:body.first_name,gender:body.gender,email:body.email } }, function(err, result) {
                console.log("Updated the document with the field a equal to 2");
                console.log(result)
                callback(result);
            });  
           
           
        })
    }

module.exports={findemployee,insertemployee,deleteemployee,updateemployee}

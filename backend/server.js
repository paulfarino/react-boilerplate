import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dbUrl = 'mongodb://localhost/reactboilerplateredux';

mongodb.MongoClient.connect(dbUrl, function(err, db) {

  app.get('/api/companies', (req, res) => {
    db.collection('companies').find({}).toArray((err, companies) => {
      res.json({ companies });
    });
  });

  app.listen(8080, () => console.log('Server is running on localhost:8080'));

});

import { Express } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Create a schema and model for the user data
const userDataSchema = new mongoose.Schema({
  name: String,
  registrationNumber: String,
  classSection: String
});

const UserData = mongoose.model('UserData', userDataSchema);

// Define the route to handle the POST request
app.post('/api/saveUserData', (req, res) => {
  const { name, registrationNumber, classSection } = req.body;

  const userData = new UserData({
    name,
    registrationNumber,
    classSection
  });

  userData.save()
    .then(() => {
      console.log('User data saved successfully!');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error('Failed to save user data:', error);
      res.sendStatus(500);
    });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
import express  from 'express';
import db       from './config/dbConnection.js';
import router   from './routes/index.js';

db.on('error', console.log.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const app = express();
app.use(express.json());

router(app);

export default app;
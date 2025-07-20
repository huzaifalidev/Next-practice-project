import express from 'express';
import cors from 'cors';
import routes from './routes/v1/index.js';
const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/v1', routes);

app.get('/', (req, res) => {
  const date = new Date().toLocaleString('en-US', { timeZone: 'Asia/Karachi', hour12: true });
  res.send(`Current server time is: ${date}🚀`);

});

export default app;
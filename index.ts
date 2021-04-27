import express from 'express';
import bodyParser from 'body-parser';
import CONFIG from './global_config';
import userRoute from './src/routes/users';

// rest of the code remains same
const app = express();
const PORT = CONFIG.port || 5000;
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

app.use(bodyParser.json()) // Body parse json
app.use(bodyParser.urlencoded({ extended: false })) // body type

app.use('/user', userRoute);
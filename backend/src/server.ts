require('dotenv').config();

import express from 'express';
import v1 from './api';
const app = express();

app.set('json spaces', 2);
app.use(express.json());
app.use(express.static('frontend'));
app.use('/api/v1', v1);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🐛 Bugger running on port ${PORT}`);
});

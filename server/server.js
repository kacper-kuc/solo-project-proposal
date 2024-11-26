const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config');

const staffRoutes = require('./routes/staff.routes');
const authRoutes = require('./routes/auth.routes');

app.use('/staff', staffRoutes);
app.use('/api', authRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
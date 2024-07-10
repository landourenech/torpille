const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');

const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const presenceRoutes = require('./routes/presenceRoutes');

const app = express

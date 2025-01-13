import express from "express";
import cors from "cors";
import 'dotenv/config';

// App
const App = express();
const port = process.env.PORT || 4000;

// Middlewares
App.use(express.json());
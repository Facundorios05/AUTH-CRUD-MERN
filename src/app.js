//Dependencies importations
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

//Routes importation
import authRoutes from './routes/auth.routes.js'

const app = express()

//Initializations
app.use(express.json())
app.use(morgan('dev'));
app.use(cookieParser())

app.use('/api', authRoutes);


export default app;
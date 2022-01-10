import express from 'express';
import productRoutes from './router/products';
import authRoutes from './router/auth';
import cors from 'cors';
import morgan from 'morgan';
import {createRoles} from './libs/roles'

const app = express();
createRoles();

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//routers
app.use("/",productRoutes);
app.use("/users",authRoutes);

export default app;
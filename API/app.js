import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import path from "path";
import indexRouter from './routes/index.routes.js';

const app = express();
//Hacemso que entienda JSON
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
//Servimos archivos estáticos
app.use(express.static('public'));
//Configuramos bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
// Configuramos EJS
app.set('view engine', 'ejs');
const currentModuleURL = new URL(import.meta.url);
const currentDirectory = path.dirname(currentModuleURL.pathname);
app.set('views', path.join(currentDirectory, '../', 'views'));
// Usamos las rutas
app.use('/', indexRouter);
// Not found route
app.use((req, res, next) => {
  res.status(404).json({
    message: 'Endpoint not found'
  });
});

export default app;

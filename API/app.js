import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
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
//app.set('views', path.join(__dirname, '..', 'views'));

// Usamos las rutas
app.use('/', indexRouter);
// Not found route
app.use((req, res, next) => {
  res.status(404).json({
    message: 'Endpoint not found'
  });
});

export default app;

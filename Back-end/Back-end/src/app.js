import 'dotenv/config'
import  express  from 'express'
import cors from 'cors'

import adiconarRotas from './rotas.js'


const servidor = express ();
servidor.use (cors());
servidor.use (express.json());


adiconarRotas(servidor);

servidor.listen(process.env.PORTA,() => console.log (`--> API subiu na porta ${process.env.PORTA}`))
import atividadeController from './controller/atividadeController.js'
import localController from './controller/localController.js'
import participanteController from './controller/participanteController.js'
import reservaController from './controller/reservaController.js'
import usuarioController from './controller/usuarioController.js'

export default function adiconarRotas(servidor) {
    servidor.use(atividadeController);
    servidor.use(localController);
    servidor.use(participanteController);
    servidor.use(reservaController);
    servidor.use(usuarioController);
}



import linha_profissional from '../../public/images/linha_profissional.png';
import Linha_infinity from '../../public/images/linha_infiniy.png';
import Linha_finalizadores from '../../public/images/linha_finalizadores.png';
import Linha_homecare from '../../public/images/linha_homecare.png';

export const LinhasData = [
  {
    id: 1, // auto increment
    title: "LINHA PROFISSIONAL",
    imagem: linha_profissional,
    produtoId: [1, 3, 4, 5, 10, 9, 8, 28],
  },
  {
    id: 2, // auto increment
    title: "LINHA INFINITY ONE GOLD",
    imagem: Linha_infinity,
    produtoId: [6],
  },
  {
    id: 3, // auto increment
    title: "LINHA FINALIZADORES E LEAVE-IN",
    imagem: Linha_finalizadores,
    produtoId: [1, 3, 4, 5],
  },
  {
    id: 4, // auto increment
    title: "HOME CARE E MANUTENÇÃO",
    imagem: Linha_homecare,
    produtoId: [1, 3, 4, 5],
  },
];
import linha_profissional from '../../public/images/linha_profissional.png';
import Linha_infinity from '../../public/images/linha_infiniy.png';
import Linha_finalizadores from '../../public/images/linha_finalizadores.png';
import Linha_homecare from '../../public/images/linha_homecare.png';

export const LinhasEnData = [
  {
    id: 1, // auto increment
    title: "PROFESSIONAL LINE",
    imagem: linha_profissional,
    produtoId: [1, 3, 4, 5, 10, 9, 8, 28],
  },
  {
    id: 2, // auto increment
    title: "INFINITY ONE GOLD LINE",
    imagem: Linha_infinity,
    produtoId: [6],
  },
  {
    id: 3, // auto increment
    title: "FINISHER AND LEAVE-IN LINE",
    imagem: Linha_finalizadores,
    produtoId: [1, 3, 4, 5],
  },
  {
    id: 4, // auto increment
    title: "HOME CARE AND MAINTENANCE",
    imagem: Linha_homecare,
    produtoId: [1, 3, 4, 5],
  },
];
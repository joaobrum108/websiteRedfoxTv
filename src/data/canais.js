


import logo360 from '../assets/360_logo.png';
import conecta from '../assets/conecta_logo.png';
import pets from '../assets/pets_logo.png';
import sports from '../assets/sports_logo.png';

import convidadoConecta4 from '../assets/conecta1.png';
import convidadoConecta5 from '../assets/conecta22.png';
import convidadoConecta6 from '../assets/conecta3png.png';

// import convidadoPets1 from '../assets/leleco1.png';
import convidadoPets2 from '../assets/leleco2.png';
import convidadoPets3 from '../assets/lelecopet1.png';
import convidadoPets4 from '../assets/lelecopet3.png';

import convidadoSport from '../assets/sports1.png';
import convidadoSport2 from '../assets/sports2.png';
import convidadoSport3 from '../assets/Sport33.png';

export default {

  canais: {
    RedfoxConecta: {
      id: 'RedfoxConecta',
      chip: 'Networking',
      titulo: 'RedFox Conecta',
      subtitulo: 'Cada história é um convite para sentir, aprender e se transformar. Cada pessoa é uma oportunidade única de conexão, troca e crescimento. Aqui, você não apenas assiste: você se inspira, se conecta e descobre novas formas de enxergar o mundo.',
      dialogoHorarios: 'Terça, Quinta às 20h',
      dialogoDuracao: '',
      imagem: conecta,
      playlistId: 'PLZ7xNeLDMQhypmQ1CAg-CurU7fyjJU2mm',
      fotosConvidados : {
        convidadoNumero1 : convidadoConecta4,
        convidadoNumero2 : convidadoConecta5,
        convidadoNumero3 : convidadoConecta6
      }
    },
    redfoxSport: {
      id: 'redfoxSport',
      chip: 'Esportes',
      titulo: 'RedFox Sports',
      subtitulo: 'A verdadeira emoção do esporte não está apenas nas jogadas, mas nas histórias de quem vive cada lance. Aqui, você vai sentir a intensidade do jogo através dos olhos de atletas, técnicos e apaixonados que respiram competição. Mais do que narrar partidas, este programa revela os bastidores, as superações e os momentos que fazem o esporte ser tão humano e transformador. ',
      dialogoHorarios: 'Quinta às 18:30h',
      dialogoDuracao: '60 minutos',
      imagem: sports,
      playlistId: 'PLZ7xNeLDMQhwn45JO2QSPf5wHP01aWH8X',
      fotosConvidados : {
        convidadoNumero1 : convidadoSport,
        convidadoNumero2 : convidadoSport2,
        convidadoNumero3 : convidadoSport3,
      }
    },
    redfoxPets : {
      id: 'redfoxPets',
      chip: 'Pets',
      titulo: 'RedFox Pets',
      subtitulo: 'Porque cada pet tem uma história pra contar — histórias de amizade, superação e amor incondicional. Neste programa, você vai conhecer relatos que emocionam, momentos que divertem e conexões que transformam. ',
      dialogoHorarios: 'Terça às 18:30',
      dialogoDuracao: '60 minutos',
      imagem: pets,
      playlistId: 'PLZ7xNeLDMQhy-GoaTD8Hgz94Fx1OSQ343',

      fotosConvidados : {
        convidadoNumero1 : convidadoPets2,
        convidadoNumero2 : convidadoPets3,
        convidadoNumero3 : convidadoPets4
      }
      
    },
    jornalismo : {
      id: 'redfoxJornalismo',
      chip: 'Jornalismo',
      titulo: 'Jornalismo 360',
      subtitulo: 'Informação completa, de todos os ângulos, com análises profundas, múltiplas perspectivas e a transparência que você merece. Jornalismo 360 é mais do que notícia: é contexto, credibilidade e conexão com o que realmente importa.',
      dialogoHorarios: 'Terça e Quinta às 18:30',
      dialogoDuracao: '60 minutos',
      imagem: logo360,
      playlistId: 'PLZ7xNeLDMQhxoFlgwntLi_WjkLHFzTchu',
      fotosConvidados : {
        convidadoNumero1 : logo360,
      }
    },
  },
};

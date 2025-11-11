import ageraldo from '../assets/geraldo.png';
import adilson from '../assets/adilson.png';
import alexPet from '../assets/alexPet.png';


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
  apresentadores: {
    adilsonjr: {
      id: 'adilsonjr',
      chip: 'Talk Show',
      titulo: 'Programa do Adilson Jr',
      subtitulo: 'Entrevistas exclusivas com personalidades influentes, debates relevantes sobre temas atuais e análises profundas.\n\nAdilson Jr traz sua expertise e carisma para conversas que informam e inspiram.',
      dialogoHorarios: 'Terça e Quinta às 20h',
      dialogoDuracao: '60 minutos',
      imagem: adilson,
      playlistId: 'PLZ7xNeLDMQhypmQ1CAg-CurU7fyjJU2mm',
    },
    alexpet: {
      id: 'alexpet',
      chip: 'Cultura Pop',
      titulo: 'Programa do Alex Pet',
      subtitulo: 'Tudo sobre o universo pet! Dicas essenciais de cuidados, histórias emocionantes de resgate.\n\nOrientações veterinárias e muito amor pelos nossos companheiros de quatro patas.',
      dialogoHorarios: 'Segunda, Quarta e Sexta às 18h',
      dialogoDuracao: '60 minutos',
      imagem: alexPet,
      playlistId: 'PLZ7xNeLDMQhy-GoaTD8Hgz94Fx1OSQ343',
    },
    GeraldoSapao: {
      id: 'GeraldoSapao',
      chip: 'Politica',
      titulo: 'Programa do Geraldo',
      subtitulo: 'Jornalismo sério e comprometido com a verdade.\n\nAnálises aprofundadas dos principais acontecimentos do Brasil e do mundo.',
      dialogoHorarios: 'Terça e Quinta às 21h',
      dialogoDuracao: '60 minutos',
      imagem: ageraldo,
      playlistId: 'PLZ7xNeLDMQhxoFlgwntLi_WjkLHFzTchu',
    },
  },

  canais: {
    RedfoxConecta: {
      id: 'RedfoxConecta',
      chip: 'Networking',
      titulo: 'Redfox Conecta: Conexões que Transformam Negócios',
      subtitulo: 'Apresentado por Adilson, este episódio especial revela como conexões estratégicas estão moldando o futuro do mercado com os empresários que fazem a diferença.',
      dialogoHorarios: 'Segunda, Quarta e Sexta às 18h',
      dialogoDuracao: '60 minutos',
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
      titulo: 'RedFox Sports: Onde a Paixão pelo Esporte Encontra a Inovação',
      subtitulo: 'Do campo à tela — descubra as ferramentas, estratégias e histórias que movem o mundo esportivo na era digital.',
      dialogoHorarios: 'Segunda, Quarta e Sexta às 18h',
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
      titulo: 'RedFox Pets: Conectando Você ao Universo Pet',
      subtitulo: 'Apresentado por Alex Pet, o programa que conecta você às melhores práticas, tendências e ferramentas digitais para cuidar e entender seus animais de estimação.',
      dialogoHorarios: 'Segunda, Quarta e Sexta às 18h',
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
      titulo: 'RedFox Jornalismo: Informação com Propósito',
      subtitulo: 'Apresentado por Geraldo, o programa que revela as ferramentas, práticas e bastidores do jornalismo na era digital — com profundidade, ética e inovação.',
      dialogoHorarios: 'Segunda, Quarta e Sexta às 18h',
      dialogoDuracao: '60 minutos',
      imagem: logo360,
      playlistId: 'PLZ7xNeLDMQhxoFlgwntLi_WjkLHFzTchu',
      fotosConvidados : {
        convidadoNumero1 : logo360,
      }
    },
  },
};

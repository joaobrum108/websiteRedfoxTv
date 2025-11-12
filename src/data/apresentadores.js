import ageraldo from '../assets/geraldo.png';
import adilson from '../assets/adilson.png';
import alexPet from '../assets/alexPet.png';

export default {
  apresentadores: {
    adilsonjr: {
      id: 'adilsonjr',
      canalIds: ['RedfoxConecta'],
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
      canalIds: ['redfoxPets', 'redfoxSport'],
      chip: 'Cultura Pop & Esportes',
      titulo: 'Programa do Alex Pet',
      subtitulo: 'Tudo sobre o universo pet! Dicas essenciais de cuidados, histórias emocionantes de resgate.\n\nOrientações veterinárias e muito amor pelos nossos companheiros de quatro patas.',
      dialogoHorarios: 'Segunda, Quarta e Sexta às 18h',
      dialogoDuracao: '60 minutos',
      imagem: alexPet,
      playlistId: 'PLZ7xNeLDMQhy-GoaTD8Hgz94Fx1OSQ343',
    },
    Geraldo: {
      id: 'GeraldoSapao',
      canalIds: ['redfoxJornalismo'], 
      chip: 'Politica',
      titulo: 'Programa do Geraldo',
      subtitulo: 'Jornalismo sério e comprometido com a verdade.\n\nAnálises aprofundadas dos principais acontecimentos do Brasil e do mundo.',
      dialogoHorarios: 'Terça e Quinta às 21h',
      dialogoDuracao: '60 minutos',
      imagem: ageraldo,
      playlistId: 'PLZ7xNeLDMQhxoFlgwntLi_WjkLHFzTchu',
    },
  }
}
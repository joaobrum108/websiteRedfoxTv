import ageraldo from '../assets/geraldo.png';
import adilson from '../assets/adilson.png';
import alexPet from '../assets/alexPet.png';

export default {
  apresentadores: {
    adilsonjr: {
      id: 'adilsonjr',
      canalIds: ['RedfoxConecta'],
      chip: 'Talk Show',
      titulo: 'Adilson Jr no Comando da Apresentação',
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
      titulo: 'Programa Apresentado por Alex Pet',
      subtitulo: 'RedFox Sports é o talk show apresentado por Alex Pet, que traz conversas inspiradoras com atletas, treinadores e profissionais do esporte que movimentam a cena esportiva de Guarulhos e região. O programa tem como base projetos sociais esportivos, acreditando que deles surgem grandes talentos e profissionais, um verdadeiro celeiro de referências que impulsiona o esporte local e nacional. Um espaço dinâmico e descontraído sobre superação, paixão e conquistas, conectando o público ao melhor do esporte brasileiro.\nRedFox TV a maior incentivadora dos projetos sociais esportivos de Guarulhos dando voz à todos eles!',
      dialogoHorarios: 'Segunda, Quarta e Sexta às 18h',
      dialogoDuracao: '60 minutos',
      imagem: alexPet,
      playlistId: 'PLZ7xNeLDMQhy-GoaTD8Hgz94Fx1OSQ343',
    },
    Geraldo: {
      id: 'GeraldoSapao',
      canalIds: ['redfoxJornalismo'], 
      chip: 'Politica',
      titulo: 'Programa de Informação com Geraldo',
      subtitulo: 'Jornalismo sério e comprometido com a verdade.\n\nAnálises aprofundadas dos principais acontecimentos do Brasil e do mundo.',
      dialogoHorarios: 'Terça e Quinta às 21h',
      dialogoDuracao: '60 minutos',
      imagem: ageraldo,
      playlistId: 'PLZ7xNeLDMQhxoFlgwntLi_WjkLHFzTchu',
    },
  }
}
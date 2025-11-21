import { defineStore } from "pinia";

export const usePodcastStore = defineStore("podcast", {
  state: () => ({
    episodes: [],
  }),
  actions: {
    async fetchEpisodes() {
      try {
        const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
        const channelId = import.meta.env.VITE_CHANNEL_ID;
        const urlBase = import.meta.env.VITE_YOUTUBE_URL;
        const maxResults = import.meta.env.VITE_MAX_RESULTS;

        const response = await fetch(
          `${urlBase}?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
        );

        if (!response.ok) {
          console.log(response);
          throw new Error("Erro ao buscar episódios na pasta stores");
        }

        const data = await response.json();
        this.episodes = data.items.map((item) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.high.url,
          link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        }));
        this.episodes.filter((episode) => episode.title === "Redfox Conecta");
      } catch (error) {
        console.error("Erro ao buscar episódios:", error);
      }
    },
  },
});
 

export const usePodcastPlaylist = defineStore("podcastPlaylist", {
  state: () => ({
    playlist: [],
  }),
  actions: {
    async fetchPlaylist() {
      try {
        const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
        const playlistId = import.meta.env.VITE_PLAYLIST_ID;
        const urlBase = import.meta.env.VITE_YOUTUBE_URL;
        const maxResults = import.meta.env.VITE_MAX_RESULTS;

        const response = await fetch(
          `${urlBase}?key=${apiKey}&playlistId=${playlistId}&part=snippet,id&order=date&maxResults=${maxResults}`
        );

        if (!response.ok) {
          console.log(response);
          throw new Error("Erro ao buscar episódios na pasta stores");
        }

        const data = await response.json();
        this.playlist = data.items.map((item) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.high.url,
          link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        }));
      } catch (error) {
        console.error("Erro ao buscar episódios:", error);
      }
    },
  },
});
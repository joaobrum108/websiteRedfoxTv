import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "redfoxTheme",
    themes: {
      redfoxTheme: {
        dark: true,
        colors: {
          primary: "#FFFFFF",
          secondary: "#8D8D8D",
          dark: "#141414",
          red: "#db0e35",
          redDark: "#a40b28",
          green: "#0EDB6A",
        },
      },
    },
  },
});

export default vuetify;
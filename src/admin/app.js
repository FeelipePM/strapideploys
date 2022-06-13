import PlathanusLogin from './extensions/plathanus-login.png';
import PlathanusMenu from './extensions/plathanus-menu.png';
import PlathanusFavicon from './extensions/plathanus-favicon.png';

export default {
  config: {
    auth: {
      logo: PlathanusLogin
    },
    head: {
      favicon: PlathanusFavicon,
    },
    menu: {
      logo: PlathanusMenu,
    },
    locales: [
      'pt-BR',
      'en-US'
    ],
  },
  bootstrap(app) {
    console.log(app);
  },
};

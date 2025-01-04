export const menu: Record<string, { title: string; icon: string }> = {
  info: {
    title: 'Contacts',
    icon: '/icons/info.svg',
  },
  about: {
    title: 'About',
    icon: '/icons/about.svg',
  },
  skills: {
    title: 'Tech Stack',
    icon: '/icons/gear.svg',
  },
  exp: {
    title: 'Experience',
    icon: '/icons/exp.svg',
  },
  edu: {
    title: 'Education',
    icon: '/icons/edu.svg',
  },
  examples: {
    title: 'Examples',
    icon: '/icons/slider.svg',
  },
}

export const contacts = [
  {
    icon: '/icons/email.svg',
    href: 'mailto:Hoft@daytec.ru',
    title: 'Hoft@daytec.ru',
  },
  {
    icon: '/icons/telegram.svg',
    href: 'https://t.me/mrHoft',
    title: '@mrHoft',
  },
  {
    icon: '/icons/discord.svg',
    href: 'https://discord.gg/mr.hoft',
    title: 'mr.hoft',
  },
  {
    icon: '/icons/github.svg',
    href: 'https://github.com/mrHoft',
    title: 'mrHoft',
  },
]

type TExp = {
  period: string
  title: string
  desc?: string
  href?: string
  projects: {
    title: string
    desc?: string
    href: string
  }[]
}

export const exp: TExp[] = [
  {
    period: '2024 - 2025',
    title: 'Cavex',
    projects: [
      {
        title: 'Manipeny',
        desc: 'Turborepo, Express, Postgresql, Vite, ⚛️React, PWA',
        href: 'https://app.nobey.ru/',
      },
    ],
  },
  {
    period: '2023 - 2025',
    title: 'European University in St. Petersburg',
    href: 'https://eusp.org/',
    projects: [
      {
        title: '"Прожито" project',
        desc: 'Turborepo, Next, ⚛️React',
        href: 'https://prozhito.org/',
      },
      {
        title: '"Прожито" archive',
        desc: 'Turborepo, Next, ⚛️React',
        href: 'https://archive.prozhito.org/',
      },
    ],
  },
  {
    period: '2023 - 2024',
    title: 'RS School',
    desc: 'Frontend JS 2023Q4',
    href: 'https://rs.school/',
    projects: [
      {
        title: 'Nonograms game',
        href: 'https://github.com/mrHoft/wrenched',
        desc: 'Webpack, templator, canvas, core js',
      },
      {
        title: 'Magic seeds',
        href: 'https://magic-seeds.netlify.app/',
        desc: 'Vite, ⚛️React, Mobx',
      },
      {
        title: 'Puzzle',
        href: 'https://github.com/mrHoft/puzzle',
        desc: 'Vite, TS, MVC',
      },
      {
        title: 'Fun chat',
        href: 'https://rolling-scopes-school.github.io/mrhoft-JSFE2023Q4/fun-chat/',
        desc: 'Vite, TS, MVC, Websocket, custom parser',
      },
      {
        title: 'Async race',
        href: 'https://github.com/mrHoft/RSSchool/tree/main/packages/async-race',
        desc: 'Vite, TS, MVC, Websocket, custom parser',
      },
      {
        title: 'Coffe house',
        href: 'https://rolling-scopes-school.github.io/mrhoft-JSFE2023Q4/coffee-house/',
        desc: 'layout from figma project',
      },
      {
        title: 'World news',
        href: 'https://rolling-scopes-school.github.io/mrhoft-JSFE2023Q4/news-api/',
        desc: 'Webpack, TS, MVC',
      },
      {
        title: 'Hangman game',
        href: 'https://rolling-scopes-school.github.io/mrhoft-JSFE2023Q4/hangman/',
        desc: 'custom templator, core js',
      },
    ],
  },
  {
    period: '2023',
    title: 'RS School',
    desc: 'Frontend PRE-SCHOOL 2023Q2',
    projects: [
      {
        title: 'Audio player',
        href: 'https://mrhoft.github.io/RSSchool/audio-player/',
      },
      {
        title: 'Eco sounds',
        href: 'https://mrhoft.github.io/RSSchool/eco-sounds/',
      },
      {
        title: 'Brooklin public library',
        href: 'https://mrhoft.github.io/RSSchool/library/',
      },
      {
        title: 'Movie search',
        href: 'https://mrhoft.github.io/RSSchool/movie-app/',
      },
      {
        title: 'Image gallery',
        href: 'https://mrhoft.github.io/RSSchool/image-gallery/',
      },
      {
        title: 'CSS meme slider',
        href: 'https://mrhoft.github.io/RSSchool/cssMemeSlider/',
      },
      {
        title: 'Rorschach game',
        href: 'https://rorschach-game.vercel.app/',
      },
    ],
  },
  {
    period: '2022 - 2023',
    title: 'Y.Practicum',
    desc: 'Middle frontend-developer',
    href: 'https://practicum.yandex.ru/',
    projects: [
      {
        title: 'web-messenger',
        desc: 'TS, Templator, MVC, HOC, Websocket, Webpack, Docker',
        href: 'https://github.com/mrHoft/pet-chat',
      },
      {
        title: 'web-game',
        desc: 'TS, ⚛️React, Redux, OAuth, SSR, Node, Express, Postgres, Proxy, Helmet, Lerna, Vite, Nginx, Docker, Compose',
        href: 'https://github.com/fastPaws-game/fastPaws',
      },
    ],
  },
  {
    period: '2011 - 2022',
    title: 'Freelance',
    desc: 'Fulfilling orders for development, write books, working on personal projects',
    projects: [
      {
        title: 'Greet card service',
        desc: '⚛️React, Particles, SC, Vite',
        href: 'https://greet-card.vercel.app',
      },
      {
        title: 'ESOUI: Author page',
        desc: 'The Elder Scrolls Online UI: 10kk+ downloads',
        href: 'https://www.esoui.com/downloads/author-23287.html',
      },
      {
        title: 'MapPins.merge',
        desc: 'Data merge service for MapPins',
        href: 'https://github.com/mrHoft/MapPins.merge',
      },
      {
        title: 'Ridero: Author page',
        href: 'https://ridero.ru/author/khoft_nikolai_xxhhg/',
      },
    ],
  },
]

type TEdu = { title: string; href?: string; course?: string; desc?: string }

export const edu: TEdu[] = [
  {
    title: 'RSSchool',
    href: 'https://app.rs.school/certificate/nehax0ao',
    course: 'Frontend 2023Q4',
  },
  {
    title: 'RSSchool',
    href: 'https://app.rs.school/certificate/cr6ohdtm',
    course: 'Frontend 2023Q2',
  },
  {
    title: 'Y.Practicum',
    href: 'https://drive.google.com/file/d/1LhYPyJ304XXBK46uxsqkpT5WMUCzunlK/view',
    course: 'Middle frontend-developer',
  },
  {
    title: 'PSKhK УТ-1',
    desc: 'The “programmer” certificate was received along with a diploma of a geodesist at the initiative of a computer science teacher for winning Olympiads.',
  },
  {
    title: 'Self-development',
    desc: 'W3Schools, EnglishClass101, freecodecamp.org, codewars.com, learn.javascript, javascript.info and other. My hand book is MDN Web Docs.',
  },
]

export const lang = ['Russian (native)', 'English (B1)']

type TProject = {
  id: number
  title: string
  src: string
  left?: string
  right?: string
  href: string
}

export const projects: TProject[] = [
  {
    id: 1,
    title: 'Wrenched',
    src: './projects/wrenched.jpg',
    href: 'https://mrhoft.github.io/wrenched/',
    left: 'Nonograms game',
  },
  {
    id: 2,
    title: 'Cavex CRM',
    src: './projects/cavex.jpg',
    right:
      'Lightweight and fast crossplatform CRM: Production, Stock, Defects, Repairs, Returns, Catalog, Sales, Orders, Bids, Shipments, Accounting, Management.',
    href: 'https://app.nobey.ru',
  },
  {
    id: 3,
    title: 'Prozhito',
    src: './projects/prozhito.jpg',
    href: 'https://prozhito.org/',
    left: 'A project on documentary heritage and public archiving.',
  },
  {
    id: 4,
    title: 'Greet card',
    src: './projects/greetcard.jpg',
    href: 'https://greet-card.vercel.app/',
    right: 'A greeting card with a message and an intaractive animation.',
  },
]

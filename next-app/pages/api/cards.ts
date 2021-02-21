// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'

export interface IFrontPageCard {
  url: string
  title: string
  body: string
}

const cards: IFrontPageCard[] = [
  {
    title: 'Documentation',
    body: 'Find in-depth information about Next.js features and API.',
    url: 'https://nextjs.org/docs',
  },
  {
    title: 'Learn',
    body: 'Learn about Next.js in an interactive course with quizzes!',
    url: 'https://nextjs.org/learn',
  },
  {
    title: 'Examples',
    body: 'Discover and deploy boilerplate example Next.js projects.',
    url: 'https://github.com/vercel/next.js/tree/master/examples',
  },
  {
    title: 'Deploy',
    body: 'Instantly deploy your Next.js site to a public URL with Vercel.',
    url:
      'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
  },
]

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(cards)
}

export default handler

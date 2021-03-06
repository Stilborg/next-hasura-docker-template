import React from 'react'
import { render, fireEvent } from '../testUtils'
import { Home } from '../../pages/index'
import { IFrontPageCard } from '../../pages/api/cards'

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

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home cards={cards} />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('clicking button triggers alert', () => {
    const { getByText } = render(<Home cards={cards} />, {})
    window.alert = jest.fn()
    fireEvent.click(getByText('Test Button'))
    expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
  })
})

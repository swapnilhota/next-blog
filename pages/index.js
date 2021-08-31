import React, { Fragment } from 'react'
import FeaturedPosts from '../components/home-page/featured-posts'
import Hero from '../components/home-page/hero'

const DUMMY_POSTS = [
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS is a React Framework for production',
        date: '2022-08-31'
    },
    {
        slug: 'getting-started-with-nextjs2',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS is a React Framework for production',
        date: '2022-08-31'
    },
    {
        slug: 'getting-started-with-nextjs3',
        title: 'Getting Started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS is a React Framework for production',
        date: '2022-08-31'
    }
]

const HomePage = () => {
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS} />
        </Fragment>
    )
}

export default HomePage

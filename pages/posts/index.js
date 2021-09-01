import React from 'react'
import AllPosts from '../../components/posts/all-posts'

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

const AllPostsPage = () => {
    return (
        <AllPosts posts={DUMMY_POSTS} />
    )
}

export default AllPostsPage

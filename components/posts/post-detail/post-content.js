import React from 'react'

const DUMMY_POST = {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    date: '2022-08-31',
    content: '# This is a first post'
}

const PostContent = () => {

    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

    return (
        <article>
            <PostHeader title={DUMMY_POST.title} image={imagePath} />
            {DUMMY_POST.content}
        </article>
    )
}

export default PostContent

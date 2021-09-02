import React from 'react'
import PostHeader from './post-header';
import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

const PostContent = (props) => {

    const { post } = props;

    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    const customRenderers = {
        image(image) {
            return <Image src={`/images/posts/${post.slug}/${image.url}`} alt={image.alt} width={600} height={300} />
        }
    }

    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown renderers={customRenderers}>{post.content}</ReactMarkdown>
        </article>
    )
}

export default PostContent

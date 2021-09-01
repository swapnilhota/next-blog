import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getAllPosts = () => {
    const postFiles = fs.readdirSync(postsDirectory);
    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    });

    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

    return sortedPosts;
}

export const getPostData = (fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);  // matter is a function which returns an object

    const postSlug = fileName.replace(/\.md$/, ''); // removes the file extension

    const postData = {
        slug: postSlug,
        ...data,
        content,
    };

    return postData;
}

export const getFeaturedPosts = () => {
    const allPosts = getAllPosts();

    const featuredPosts = allPosts.filter(post => post.isFeatured);

    return featuredPosts;
}
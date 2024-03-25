import fs from 'fs'
import matter from "gray-matter";

export interface PostMetadata {
    title: string,
    date: string,
    description: string,
    slug: string,
    image?: string,
}

const getPostMetadata = (): PostMetadata[] => {
    const folder = './posts';
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".mdx"));
  
    // get data from file 
    const posts = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8');
      const matterResult = matter(fileContents);
  
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        description: matterResult.data.description,
        slug: fileName.replace(".mdx", "")
      }
    });
  
    return posts;
}

export default getPostMetadata
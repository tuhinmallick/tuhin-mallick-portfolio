import axios from 'axios';

/**
 * @description Retrieves a list of Medium posts from the Medium API and converts
 * them into an array of objects containing post ID, date, author name, title, image
 * source, and delay. It handles errors by logging them to the console and throwing
 * a custom error.
 * 
 * @returns {object[]} An array of objects. Each object represents a medium post and
 * has properties such as id, date, author, title, imageSrc, delay.
 */
export async function fetchMediumPosts() {
  const MEDIUM_API_URL = 'https://api.medium.com/v1/users/<YOUR_USER_ID>/posts';
  const ACCESS_TOKEN = '<YOUR_ACCESS_TOKEN>';

  try {
    const response = await axios.get(MEDIUM_API_URL, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });

    return response.data.data.map(post => ({
      id: post.id,
      date: new Date(post.createdAt).toLocaleDateString(),
      author: post.author.name,
      title: post.title,
      imageSrc: post.imageUrl || '/img/blog/default.jpg',
      delay: 0,
    }));
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    throw new Error('Failed to fetch Medium posts');
  }
}
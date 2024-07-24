import axios from 'axios';

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
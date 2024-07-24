// import { NextResponse } from 'next/server';
// import { put } from '@vercel/blob';
// import axios from 'axios';

// async function savePostsToStorage(posts) {
//     let index = 1;
//     for (const post of posts) {
//         const filename = `articles/post-${index}.json`;
//         await put(filename, JSON.stringify(post), { access: 'public', addRandomSuffix: false });
//         index++;
//     }
//     console.log('Posts saved to storage successfully.');
// }

// export default async function handler(req, res) {
//   console.log('Request received:', req.method, req.url);

//   if (req.method !== 'GET') {
//     console.log('Method not allowed:', req.method);
//     return res.status(405).json({ error: 'Method Not Allowed' });
//   }

//   const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
//   const USERNAME = 'tuhin.mallick';

//   console.log('Starting Medium API request');
//   console.log('Environment variables:', {
//     RAPIDAPI_KEY: process.env.RAPIDAPI_KEY ? 'Set' : 'Not set'
//   });

//   try {
//     // Step 1: Get user ID
//     console.log('Fetching user ID');
//     const userIdResponse = await axios.get(`https://medium2.p.rapidapi.com/user/id_for/${USERNAME}`, {
//       headers: {
//         'x-rapidapi-host': 'medium2.p.rapidapi.com',
//         'x-rapidapi-key': RAPIDAPI_KEY,
//         'Accept': 'application/json',
//         'Content-Type': 'null',
//         'x-rapidapi-ua': 'RapidAPI-Playground'
//       }
//     });

//     console.log('User ID response:', userIdResponse.data);
//     const userId = userIdResponse.data?.id;
//     if (!userId) {
//       throw new Error('User ID not found in response');
//     }
//     console.log('User ID:', userId);

//     // Step 2: Get user's articles using the unofficial Medium API
//     console.log('Fetching user articles');
//     const articlesResponse = await axios.get(`https://medium2.p.rapidapi.com/user/${userId}/articles`, {
//       headers: {
//         'x-rapidapi-host': 'medium2.p.rapidapi.com',
//         'x-rapidapi-key': RAPIDAPI_KEY,
//         'Accept': 'application/json',
//         'Content-Type': 'null',
//         'x-rapidapi-ua': 'RapidAPI-Playground'
//       }
//     });

//     console.log('Articles response:', articlesResponse.data);
//     const articleIds = articlesResponse.data?.associated_articles;
//     if (!articleIds || articleIds.length === 0) {
//       throw new Error('No articles found for user');
//     }

//     // Step 3: Get details for each article
//     let allPosts = [];
//     for (const articleId of articleIds) {
//       console.log(`Fetching details for article: ${articleId}`);
//       const articleDetailsResponse = await axios.get(`https://medium2.p.rapidapi.com/article/${articleId}/html`, {
//         params: {
//           fullpage: 'true',
//           style_file: 'https://mediumapi.com/styles/dark.css'
//         },
//         headers: {
//           'x-rapidapi-key': RAPIDAPI_KEY,
//           'x-rapidapi-host': 'medium2.p.rapidapi.com',
//           'Accept': 'application/json'
//         }
//       });
//       console.log(`Article details response for ${articleId}:`, articleDetailsResponse.data);
//       allPosts.push(articleDetailsResponse.data);
//     }

//     // Step 4: Format posts
//     console.log('Formatting posts');
//     const formattedPosts = allPosts.map((post, index) => {
//       const publishedAt = new Date(post.publishedAt || post.html.match(/<meta property="article:published_time" content="([^"]+)"/)?.[1] || Date.now());
//       return {
//         id: post.id,
//         date: publishedAt ? publishedAt.toLocaleDateString("en-US", { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase().replace(' ', '/') : 'UNKNOWN DATE',
//         author: (post.author || post.html.match(/<meta name="author" content="([^"]+)"/)?.[1] || 'UNKNOWN').toUpperCase(),
//         title: post.title || post.html.match(/<title>(.*?)<\/title>/)?.[1] || 'UNKNOWN TITLE',
//         content: post.content || post.html.match(/<meta name="description" content="([^"]+)"/)?.[1] || 'UNKNOWN DESCRIPTION',
//         imageSrc: post.imageUrl || post.html.match(/<meta property="og:image" content="([^"]+)"/)?.[1] || '/img/blog/default.jpg',
//         delay: index * 200
//       };
//     });

//     console.log('Formatted posts:', formattedPosts);
//     await savePostsToStorage(formattedPosts);
//     res.status(200).json({ message: "Posts formatted and saved successfully", posts: formattedPosts });
//   } catch (error) {
//     console.error('Error fetching Medium posts:', error.response?.data || error.message);
//     console.error('Error details:', error);
//     res.status(500).json({ error: 'Failed to fetch Medium posts', details: error.message });
//   }
// }

export default function handler(req, res) {
    console.log('Request received:', req.method, req.url);
    res.status(200).json({ message: "API is working" });
  }
  
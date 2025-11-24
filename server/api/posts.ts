const posts = [
    {
        id: 1,
        title: 'My First Post',
        description: 'This is the description of my first post.',
        path: '/posts/bai2',
        image: 'https://images.viblo.asia/cdf5ee8e-8ee5-431f-9c97-f764ac7c1c35.jpeg'
    },
    {
        id: 2,
        title: 'My Second Post',
        description: 'This is the description of my second post.',
        path: '/posts/bai1',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKtSSHhRvnlPJFdxRi6-b2YMV_2SXgey3ukw&s'
    },
    {
        id: 3,
        title: 'My Third Post',
        description: 'This is the description of my third post.',
        path: '/posts/bai3',
        image: 'https://images.viblo.asia/3e2afbe9-bc49-4c8e-a4f4-16b1f5582091.jpg'
    }]

export default defineEventHandler(async (event) => {
    await new  Promise((resolve) => {
        setTimeout(resolve, 2000);});
    return { posts }
});
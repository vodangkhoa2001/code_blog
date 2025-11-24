<script lang="ts" setup>
useHead({
    title: 'Home Page'
});

// const posts  = await  queryCollection('blog').all()
// console.log(posts);

// const posts = [
//     {
//         id: 1,
//         title: 'My First Post',
//         description: 'This is the description of my first post.',
//         path: '/posts/bai2',
//         image: 'https://images.viblo.asia/cdf5ee8e-8ee5-431f-9c97-f764ac7c1c35.jpeg'
//     },
//     {
//         id: 2,
//         title: 'My Second Post',
//         description: 'This is the description of my second post.',
//         path: '/posts/bai1',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKtSSHhRvnlPJFdxRi6-b2YMV_2SXgey3ukw&s'
//     },
//     {
//         id: 3,
//         title: 'My Third Post',
//         description: 'This is the description of my third post.',
//         path: '/posts/bai3',
//         image: 'https://images.viblo.asia/3e2afbe9-bc49-4c8e-a4f4-16b1f5582091.jpg'
//     }]
    const {data,pending} = useFetch('/api/posts',{} )
    </script>
<template>
<Header title="index page" />
<main class="max-w-4xl sm:w-3/4 mx-10 sm:mx-auto mt-10 ">
    <div v-if="!data || data.posts.length === 0" class="text-center">
        <h1 v-if="pending" class="text-5xl">ĐANG TẢI...</h1>
    </div>
    <div v-else class="grid sm:grid-cols-2 gap-6">
        <div v-for="post in data?.posts" :key="post.id" >
            
            <PostCard :title="post.title" :decription="post.description" :path="post.path" :img="post.image" />
        </div>
    </div>

</main>
</template>

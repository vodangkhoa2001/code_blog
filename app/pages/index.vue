<script lang="ts" setup>
useHead({
    title: 'Home Page'
});

const posts  = await  queryCollection('blog').all()
console.log(posts);

// const posts = [
//     {
//         id: 1,
//         title: 'My First Post',
//         decription: 'This is the description of my first post.',
//         path: '/posts/bai2',
//         img: 'https://images.viblo.asia/cdf5ee8e-8ee5-431f-9c97-f764ac7c1c35.jpeg'
//     },
//     {
//         id: 2,
//         title: 'My Second Post',
//         decription: 'This is the description of my second post.',
//         path: '/posts/bai1',
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKtSSHhRvnlPJFdxRi6-b2YMV_2SXgey3ukw&s'
//     }
//     ]
    </script>
<template>
<Header title="index page" />
<main class="max-w-4xl mx-auto mt-10 ">
    <div v-if="!posts || posts.length === 0" class="text-center">
        <h1 class="text-5xl">Chưa có bài viết nào</h1>
    </div>
    <div v-else class="grid grid-cols-3 gap-6">
        <div v-for="post in posts" :key="post.id" >
            <PostCard :title="post.title" :decription="post.description" :path="post.path" :img="post.image" />
        </div>
    </div>

</main>
</template>

<script lang="ts" setup>
useHead({
    title: 'Home Page'
});
// const { data: posts } = await useAsyncData('blog', () => queryCollection('blog').all())
const home = await queryCollection('content').path('/').first()
console.log(home?.title);
</script>
<template>
<Header title="index page" />
<main class="max-w-4xl mx-auto mt-10 ">
    <!-- <div v-for="post in posts" :key="post.id" class="grid grid-cols-3 gap-6">
        <PostCard title={{ post.title}} decription={{post.decription}} path={{ post.path}}
        />
    </div> -->

</main>
</template>

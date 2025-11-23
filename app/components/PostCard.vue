<script lang="ts" setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    decription: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});
</script>
<template>
    <div class="p-3 bg-gray-500 rounded-lg h-full">
            <div class="w-full  bg-gray-400 px-4 min-h-32 ">
                <NuxtImg :src="img" alt="hinh anh bai viet" class="bg-center min-h-32"/>
            </div>
            <div>
                <NuxtLink class="font-bold block" :to="path">{{title}}</NuxtLink>
                <span>{{ decription }}</span>
            </div>
            <div class="p-3"></div>
            <NuxtLink class=" w-24 text-center p-2 text-sm bg-blue-500 block space-y-3" :to="path">Đọc thêm</NuxtLink>

        </div>
</template>
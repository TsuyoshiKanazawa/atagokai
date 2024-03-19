<template>

    <div class="service">
        <div class="service-top">
            <img src="/img/service-top.png" alt="background" class="service-top-image">
            <div class="service-top-title">
                <h1>施設・サービス一覧</h1>
            </div>
        </div>
        <div class="service-contents">
            <div v-for="article in articles.items" :key="article.title" class="service-item">
                <img :src="article.image.src" alt="サービス画像" class="service-image">
                <div v-for="tag in article.tag" :key="tag" class="tag">
                    <h4>{{ tag }}</h4>
                </div>
                <div v-for="facilityDetail in article.facility" :key="facilityDetail._id" class="facility-detail">
                    <h4>{{ facilityDetail.title }}</h4>
                    <p v-html="formatContent(facilityDetail.content)"></p>
                </div>
            </div>
            
        </div>
        <recruitLink />
        <service />
    </div>

</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { nextTick } from 'vue';

gsap.registerPlugin(ScrollTrigger);
const { data: articles, refresh } = await useAsyncData('articles', fetchArticles);

onMounted(async () => {
    await refresh();
});

async function fetchArticles() {
    const { $newtClient } = useNuxtApp();
    const response = await $newtClient.getContents({
        appUid: 'cpSite',
        modelUid: 'service',
        query: {
            select: ['title', 'image', 'tag', 'facility']
        }
    });
    console.log(response)
    return response;
}

function formatContent(content) {
    return content.replace(/\n/g, '<br>');
}

useHead({
  title: '施設・サービス一覧 | 社会福祉法人 愛宕会',
  meta: [
    { name: 'ogTitle', content: '施設・サービス一覧 | 社会福祉法人 愛宕会' },
  ],
})
</script>

<style lang="scss" scoped>
.service-top {
    position: relative;
    .service-top-image {
        width: 100%;
    }
    .service-top-title {
        position: absolute;
        top: 40%;
        right: 10%;
        color: white;
        font-size: 3vw;
        font-weight: 500;
        h1 {
            font-size: 4.5vw;
        }
    }
}
</style>
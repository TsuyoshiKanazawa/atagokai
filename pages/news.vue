<template>
    <div class="news">
        <div class="news-top">
            <img src="/img/news-top.jpg" alt="background" class="news-top-image">
            <div class="news-top-title">お知らせ</div>
        </div>
        <div class="filter-container">
            <select v-model="selectedYear" class="select-box">
                <option v-for="year in availableYears" :key="year" :value="year">{{ year }}</option>
            </select>
        </div>
        <div class="news-conteiner">
            <div v-for="(article, index) in filteredArticles" :key="index" class="news-content">
                <div class="date">{{ formatDate(article.date) }}</div>
                <div class="category">{{ article.category }}</div>
                <div class="content" v-html="formatContent(article.content)"></div>
            </div>
        </div>
        <recruitLink />
        <service />
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
const { data: articles, refresh } = await useAsyncData('articles', fetchArticles);
const selectedYear = ref(new Date().getFullYear());

const availableYears = computed(() => {
    const years = articles.value?.items.map(item => item.year);
    return Array.from(new Set(years)).sort().reverse();
});

const filteredArticles = computed(() => {
    return articles.value?.items.filter(article => article.year == selectedYear.value) ?? [];
});

onMounted(async () => {
  await refresh();
});

async function fetchArticles() {
    const { $newtClient } = useNuxtApp();
    const response = await $newtClient.getContents({
        appUid: 'cpSite',
        modelUid: 'news',
        query: {
            select: ['title', 'date', 'year', 'content', 'category',]
        }
    });
    console.log(response)
    return response;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
}

function formatContent(content) {
    return content.replace(/\n/g, '<br>');
}

</script>
<style lang="scss" scoped>
.news-top {
    position: relative;
    .news-top-image {
        width: 100%;
    }
    .news-top-title {
        position: absolute;
        top: 40%;
        right: 10%;
        color: white;
        font-size: 4.5vw;
        font-weight: 500;

    }
}
.filter-container {
    width: 80%;
    margin: 2% auto;
    position: relative;
    .select-box {
        width: 8vw;
        height: 3vw;
        border-radius: 20px;
        font-size: 1.5vw;
        padding-left: 2%;
        border: 2px solid;
        -webkit-appearance: none;
        appearance: none;
        display: block;
        margin: 0 0 0 auto;
    }
    &::before {
        content: "";
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 5px 5px 0 5px;
        border-color: black transparent transparent transparent;
        position: absolute;
        top: 50%;
        right: 1%;
        transform: translateY(-50%);
        pointer-events: none;
    }
    // IE用
    .select-box::-ms-expand{
        display: none;
    }
    .select-box-focused:before {
        border-width: 0 5px 5px 5px;
        border-color: transparent transparent black transparent;
    }
}
.news-conteiner {
    margin-bottom: 5%;
    .news-content {
    display: flex;
    margin: auto;
    background-color: #BAE3F9;
    width: 80%;
    min-height: 6vw;
    margin-bottom: 0.3vw;
    padding: 0 3%;
    box-sizing: border-box;
    .date {
        margin: auto 0;
        line-height: 4vw;
        margin-right: 5%;
        font-weight: 600;
        font-size: 1vw;
    }
    .category {
        margin: auto 5% auto 0;
        border: 1px solid black;
        width: 5vw;
        text-align: center;
        font-weight: 600;
        font-size: 0.8vw;
    }
    .content {
        padding: 1% 0;
        margin: auto 0;
        width: 75%;
        font-size: 1vw;
        font-weight: 600;
    }
    &:first-child {
        border-top-right-radius: 30px;
        border-top-left-radius: 30px;
    }
    &:last-child {
        border-bottom-right-radius: 30px;
        border-bottom-left-radius: 30px;
    }
    }
}
</style>
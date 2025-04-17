<template>
    <div class="news">
        <div class="news-top">
            <img src="/img/news-top.png" alt="background" class="news-top-image">
            <div class="news-top-title">お知らせ</div>
        </div>
        <div class="filter-container">
            <select v-model="selectedYear" class="select-box">
                <option v-for="year in availableYears" :key="year" :value="year">{{ year }}</option>
            </select>
        </div>
        <div class="news-conteiner">
            <div v-if="!isMobile" v-for="(article, index) in filteredArticles" :key="index" class="news-content">
                <div class="date">{{ formatDate(article.date) }}</div>
                <div class="category">{{ article.category }}</div>
                <div class="content" v-html="formatContent(article.content)"></div>
            </div>
            <div v-if="isMobile" v-for="(article, index) in filteredArticles" :key="index" class="news-content-sp">
                <div class="news-content-top">
                    <div class="date">{{ formatDate(article.date) }}</div>
                    <div class="category">{{ article.category }}</div>
                </div>
                <div class="content" v-html="formatContent(article.content) "></div>
            </div>
        </div>
        <recruitLink />
        <service />
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const isMobile = ref(window.innerWidth <= 900);
const { data: articles, refresh } = await useAsyncData('articles', fetchArticles, { immediate: true });
//console.log(articles.value.items);
const selectedYear = ref(new Date().getFullYear());

const availableYears = computed(() => {
  const years = articles.value?.items.map(item => item.year);
  return Array.from(new Set(years)).sort().reverse();
});

onMounted(() => {
  if (!availableYears.value.includes(selectedYear.value)) {
    selectedYear.value = availableYears.value[0];
  }
});

const filteredArticles = computed(() => {
  return articles.value?.items.filter(article => article.year == selectedYear.value) ?? [];
});
//console.log(filteredArticles.value)

watchEffect(() => {
    const updateWidth = () => {
        windowWidth.value = window.innerWidth;
        // ウィンドウ幅が900px以下ならisMobileをtrueに、そうでなければfalseに更新
        isMobile.value = window.innerWidth <= 900;
    };
    window.addEventListener('resize', updateWidth);

    onUnmounted(() => {
        window.removeEventListener('resize', updateWidth);
    });
});

onMounted(async () => {
  await refresh();

  document.querySelectorAll('.news-content').forEach((element) => {
      gsap.from(element, {
          scrollTrigger: {
              trigger: element,
              start: "top 85%",
              end: "bottom top",
              toggleActions: "play none none none",
          },
          opacity: 0,
          duration: 0.5,
          y: 30
      });
  });
  document.querySelectorAll('.news-content-sp').forEach((element) => {
      gsap.from(element, {
          scrollTrigger: {
              trigger: element,
              start: "top 85%",
              end: "bottom top",
              toggleActions: "play none none none",
          },
          opacity: 0,
          duration: 0.5,
          y: 30
      });
  });
});

async function fetchArticles() {
  const { $newtClient } = useNuxtApp();
  const response = await $newtClient.getContents({
    appUid: 'cpSite',
    modelUid: 'news',
    query: {
      select: ['title', 'date', 'year', 'content', 'category',],
      order: ['-_sys.customOrder']
    }
  });
  //console.log(response)
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
useHead({
  title: 'お知らせ | 社会福祉法人 愛宕会',
  meta: [
    { name: 'ogTitle', content: 'お知らせ | 社会福祉法人 愛宕会' },
  ],
})
</script>

<style lang="scss" scoped>
.news-top {
    position: relative;
    overflow: hidden;
    height: 49vw;
    @media screen and (max-width: 900px) {
        padding-top: 10vw;
    }
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
        @media screen and (max-width: 900px) {
            top: 55%;
        }
    }
}
.filter-container {
    width: 80%;
    margin: -4% auto 2%;
    position: relative;
    @media screen and (max-width: 900px) {
        margin: 0% auto 2%;
        width: 90%;
    }
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
        @media screen and (max-width: 900px) {
            font-size: 4vw;
            width: 20vw;
            height: 8vw;
            border-radius: 10px;
        }
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
        @media screen and (max-width: 900px) {
            right: 2%;
        }
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
    .news-content-sp {
        margin: auto;
        background-color: #BAE3F9;
        width: 90%;
        min-height: 15vw;
        margin-bottom: 1vw;
        padding: 3% 4%;
        box-sizing: border-box;

        .news-content-top {
            display: flex;
        }

        .date {
            margin: auto 0;
            line-height: 4vw;
            margin-right: 5%;
            font-weight: 600;
            font-size: 3vw;
        }

        .category {
            margin: auto 5% auto 0;
            border: 1px solid black;
            width: 15vw;
            text-align: center;
            font-weight: 600;
            font-size: 3vw;
        }

        .content {
            padding: 1% 0;
            margin: auto 0;
            width: 100%;
            font-size: 2.5vw;
            font-weight: 800;
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
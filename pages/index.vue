<template>
  <div>
    <div class="container">
      <topFv />
      <div class="top-copy">
        <img src="/img/fv-bottom.png" alt="background" class="fv-bottom">
        <div class="copy-text">
          <div class="copy-text-Lerge">ともに、<br>未来へ。</div>
          <div class="copy-text-Small">
            島根半島の北約80kmの日本海に、180もの島々からなる隠岐諸島、<br>
            その中でも一番大きな島、隠岐の島。<br>
            国の特別保護区を含む国立公園などを有する、<br>
            風光明媚でとても美しいところです。<br>
            <br>
            社会福祉法人  愛宕会は、そんな隠岐の島町で、<br>
            島民の皆様のより良い豊かな暮らしのため、<br>
            そして、介護される人はもちろん、<br>
            する側、働く人の笑顔ももっと増やしたい、<br>
            そんな想いを込めて「高齢者介護サービス」を<br>
            ご提供させて頂いております。<br>
            <br>
            これまで大切に受け継いできたものを残し、<br>
            ここで暮らし続けたいという想いを未来へ繋いでいくために。<br>
            <br>
            そんな、くらしの「絆」を、私たちと広げてみませんか。
            <nuxt-link to="/" class="link">
              <div class="copy-link-text">愛宕会について</div>
              <img src="/img/arrow.svg" alt="background" class="arrow">
            </nuxt-link>
          </div>
        </div>
      </div>
      <img src="/img/news-top-pic.png" alt="background" class="news-top">
      <div class="top-news">
        <div class="top-news-title">
          <img src="/img/newsLogo.svg" alt="title-logo" class="title-logo">
          <div class="title-text">お知らせ</div>
        </div>
        <div class="news-conteiner">
          <div v-for="(article, index) in firstTwoArticles" :key="index" class="news-content">
            <div class="date">{{ formatDate(article.date) }}</div>
            <div class="category">{{ article.category }}</div>
            <div class="content" v-html="formatContent(article.content)"></div>
          </div>
        </div>
        <nuxt-link to="/news" class="link">
          <div class="copy-link-text">もっと見る</div>
          <img src="/img/arrow.svg" alt="background" class="arrow">
        </nuxt-link>
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
import recruitLink from '~/components/recruitLink.vue';

gsap.registerPlugin(ScrollTrigger);
const { data: articles, refresh } = await useAsyncData('articles', fetchArticles);
const processedArticles = computed(() => articles.value?.items ?? []);
const firstTwoArticles = computed(() => processedArticles.value.slice(0, 5));

onMounted(async () => {
  await refresh();
  
  gsap.from(".copy-text-Lerge", {
    scrollTrigger: {
      trigger: ".copy-text-Lerge",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    duration: 1,
    y: 50
  });

  gsap.from(".copy-text-Small", {
    scrollTrigger: {
      trigger: ".copy-text-Small",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    duration: 1,
    delay: 0.5,
    y: 50
  });

  document.querySelectorAll('.news-content').forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom top",
        toggleActions: "play none none none",
      },
      opacity: 0,
      duration: 1,
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
      select: ['title', 'date', 'year', 'content', 'category',]
    }
  });
  console.log(response)
  return response;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月は0から始まるため、1を足す
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
}

function formatContent(content) {
  return content.replace(/\n/g, '<br>');
}
</script>


<style lang="scss" scoped>
.container {
  width: 100%;
  margin: auto;
  overflow: hidden;

  .top-copy {
    position: relative;
    .fv-bottom {
      width: 101%;
      position: absolute;
      top: -14vw;
      left: 0;
    }
    .copy-text {
      display: flex;
      justify-content: center;
      gap: 5%;
      padding-top: 1%;
      .copy-text-Lerge {
        font-size: 7vw;
        font-weight: 600;
        margin-top: 3%;
      }
      .copy-text-Small {
        font-size: 1.2vw;
        font-weight: 700;
      }
    }

  }
  .news-top {
    width: 100%;
    margin-top: -15%;
  }
  .top-news {
    .top-news-title {
      display: flex;
      margin: -5% 0 2% 6%;
      .title-logo {
        width: 4vw;
      }
      .title-text {
        font-size: 2.3vw;
        font-weight: 600;
        margin-left: 1%;
        line-height: 4vw;
      }
    }
    .news-conteiner {
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
    .link {
      margin: 2% 0 0 auto;
      z-index: 1;
      position: relative;
    }
  }
}
</style>
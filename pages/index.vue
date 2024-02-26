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
          </div>
        </div>
      </div>
      <div>
        <li v-for="article in processedArticles" :key="article.title">
          {{ article.title }}
        </li>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
const { data: articles, refresh } = await useAsyncData('articles', fetchArticles);
const processedArticles = computed(() => articles.value?.items ?? []);

onMounted(async () => {
  await refresh(); // ページがマウントされた直後にデータを更新
});

async function fetchArticles() {
  const { $newtClient } = useNuxtApp();
  const response = await $newtClient.getContents({
    appUid: 'cpSite',
    modelUid: 'news',
    query: {
      select: ['title']
    }
  });
  console.log(response); // これでレスポンスを確認
  return response;
}
</script>


<style lang="scss" scoped>
.container {
  width: 80vw;
  margin: auto;

  .top-copy {
    position: relative;
    .fv-bottom {
      width: 101%;
      position: absolute;
      top: -9vw;
      left: -0.5vw;
    }
    .copy-text {
      display: flex;
      justify-content: center;
      gap: 5%;
      padding-top: 5%;
      .copy-text-Lerge {
        font-size: 7vw;
        font-weight: 500;
      }
      .copy-text-small {
        font-size: 1vw;
        font-weight: 500;
      }
    }
  }

}
</style>
<template>

    <div class="service">
        <div class="service-top">
            <img src="/img/service-top.png" alt="background" class="service-top-image">
            <div class="service-top-title">
                <h1>施設・サービス一覧</h1>
            </div>
        </div>
        <div class="service-contents">
            <div v-for="article in reversedArticles" :key="article.title" class="service-item">
                <div class="left">
                    <img v-if="article.image" :src="article.image.src" alt="サービス画像" class="service-image">
                    <img v-else src="/img/noImage.jpg" alt="サービス画像" class="service-image">
                    <div class="tag-container">
                        <div v-for="tag in article.tag" :key="tag" class="tag">
                            <div>{{ tag }}</div>
                            <div class="arrow">→</div>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div v-for="facilityDetail in article.facility" :key="facilityDetail._id" class="facility-detail"
                        :class="[{'day-service': facilityDetail.service === 'デイサービス'}]">
                        <div class="service">{{ facilityDetail.service }}</div>
                        <div class="title">{{ facilityDetail.title }}</div>
                        <hr>
                        <p v-html="formatContent(facilityDetail.content)" class="content"></p>
                    </div>
                </div>
            </div>
            
        </div>
        <recruitLink />
    </div>

</template>

<script setup>
import { onMounted } from 'vue';
import { computed } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { nextTick } from 'vue';

gsap.registerPlugin(ScrollTrigger);
const { data: articles, refresh } = await useAsyncData('articles', fetchArticles);

onMounted(async () => {
    await refresh();
    nextTick(() => {
        document.querySelectorAll('.service-item').forEach((element) => {
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

const reversedArticles = computed(() => {
  // articles.itemsが存在する場合、その逆順のコピーを返します。
  return articles.value.items.slice().reverse();
});


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
.service-contents {
    margin-top: -5%;
    margin-bottom: 5%;
    .service-item {
        display: flex;
        justify-content: center;
        gap: 3vw;
        border-bottom: 3px solid black;
        width: fit-content;
        margin: auto;
        margin-top: 3%;
        padding-bottom: 3%;
        .left {
            width: 30vw;
            .service-image {
                border-radius: 50px;
                width: 30vw;
            }
            .tag-container {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                gap: 1%;
                margin-top: 5%;
                .tag {
                    width: 49%;
                    text-align: center;
                    background-color: #999999;
                    color: white;
                    font-size: 0.8vw;
                    font-weight: 400;
                    border-radius: 6px;
                    margin-bottom: 3%;
                    position: relative;
                    height: 1.3vw;
                    line-height: 1.3vw;
                    .arrow {
                        position: absolute;
                        top: 0;
                        right: -2%;
                    }
                }
            }
        }
        .right {
            .facility-detail {
                width: 101%;
                margin-bottom: 5%;
                .service {
                    background-color: #59C4F1;
                    width: 8vw;
                    font-size: 1vw;
                    text-align: center;
                    color: white;
                    border-radius: 8px;
                }
                .title {
                    font-size: 2vw;
                    font-weight: 600;
                }
                hr {
                    border: none;
                    border-top: 0.7vw dotted #59C4F1;
                }
                .content {
                    font-size: 1vw;
                    font-weight: 600;
                    padding: 0 1%;
                    line-height: 1.1;
                }
                &.day-service {
                    .service {
                        background-color: #74A546;
                    }
                    hr {
                        border-top: 0.7vw dotted #74A546;
                    }
                }
            }
        }
    }
}
</style>
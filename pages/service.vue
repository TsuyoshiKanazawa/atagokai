<template>

    <div class="service">
        <div class="service-top">
            <img src="/img/service-top.png" alt="background" class="service-top-image">
            <div class="service-top-title">
                <h1>施設・サービス一覧</h1>
            </div>
        </div>
        <div class="service-contents">
            <div v-for="article in reversedArticles" :key="article.fields.title" class="service-item">
                <div class="left">
                    <img v-if="article.fields.image" :src="article.fields.image.fields.file.url" alt="サービス画像" class="service-image">
                    <img v-else src="/img/noImage.jpg" alt="サービス画像" class="service-image">
                    <div class="tag-container">
                        <a v-for="tags in article.fields.tags" :key="tags" class="tag" :href="tags.fields.img.fields.file.url" target="_blank">
                            <div>{{ tags.fields.tag_name }}</div>
                            <div class="arrow">→</div>
                        </a>
                    </div>
                </div>
                <div class="right">
                    <div v-for="facilityDetail in article.fields.facility" :key="facilityDetail._id" class="facility-detail"
                        :class="[{'day-service': facilityDetail.fields.service === 'デイサービス'}]">
                        <div class="service">{{ facilityDetail.fields.service }}</div>
                        <div class="title">{{ facilityDetail.fields.title }}</div>
                        <hr>
                        <p v-html="formatContent(facilityDetail.fields.content)" class="content"></p>
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
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

gsap.registerPlugin(ScrollTrigger);
const { data: articles, refresh } = await useAsyncData('articles', fetchArticles);
console.log(articles)
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
                duration: 1,
                y: 30
            });
        });

    });
});

async function fetchArticles() {
	const { $contentfulClient  } = useNuxtApp(); 
	const response = await $contentfulClient .getEntries({
    content_type: 'service', // ← Content model の ID
    order: "-fields.order",
    select: [
      'fields.title',
      'fields.image',
      'fields.tags',
      'fields.facility',
    ],
  });
  console.log(response.items)
  return response.items;    
}

function formatContent(content) {
  if (!content) return ''
  // Rich Text (object) ならHTMLへ
  if (typeof content === 'object') {
    try {
      return documentToHtmlString(content)
    } catch (e) {
      console.warn('RichText変換に失敗:', e)
      return ''
    }
  }
  // プレーンテキスト(string)なら改行置換
  if (typeof content === 'string') {
    return content.replace(/\n/g, '<br>')
  }
  return ''
}
const reversedArticles = computed(() => {
  // articles.itemsが存在する場合、その逆順のコピーを返します。
  return articles.value.slice().reverse();
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
    @media screen and (max-width: 900px) {
        padding-top: 13vw;
    }
    .service-top-image {
        width: 100%;
    }
    .service-top-title {
        position: absolute;
        top: 40%;
        right: 10%;
        color: white;
        font-size: 3vw;
        font-weight: 600;
        h1 {
            font-size: 4.5vw;
        }
        @media screen and (max-width: 900px) {
            top: 53%;
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
            @media screen and (max-width: 900px) {
                width: 50vw;
            }
            .service-image {
                border-radius: 50px;
                width: 30vw;
                @media screen and (max-width: 900px) {
                    width: 50vw;
                    border-radius: 30px;
                }
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
                    @media screen and (max-width: 900px) {
                        font-size: 1.4vw;
                        height: 2.5vw;
                        line-height: 2.5vw;
                        border-radius: 3px;
                    }
                    .arrow {
                        position: absolute;
                        top: 0;
                        right: -2%;
                        @media screen and (max-width: 900px) {
                            right: 2%;
                        }
                    }
                }
            }
        }
        .right {
            @media screen and (max-width: 900px) {
                width: 40vw;
            }
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
                    @media screen and (max-width: 900px) {
                        width: 15vw;
                        font-size: 1.7vw;
                        border-radius: 4px;
                    }
                }
                .title {
                    font-size: 2vw;
                    font-weight: 600;
                    @media screen and (max-width: 900px) {
                        font-size: 2.8vw;
                        font-weight: 700;
                    }
                }
                hr {
                    border: none;
                    border-top: 0.7vw dotted #59C4F1;
                    @media screen and (max-width: 900px) {
                        margin-top: 0;
                        margin-bottom: 1vw;
                    }
                }
                .content {
                    font-size: 1vw;
                    font-weight: 600;
                    padding: 0 1%;
                    line-height: 1.1;
                    @media screen and (max-width: 900px) {
                        font-weight: 700;
                        font-size: 1.8vw;
                    }
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
        &:last-child {
            border-bottom: none;
        }
    }
}
</style>
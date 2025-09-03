<template>
    <div class="corporation" >
        <div class="corporation-title">求人情報</div>
        <div class="table-container">
            <div class="column" v-for="recruit in recruit" :key="recruit._id">
                <div class="name"><p>{{ recruit.fields.occupation }}</p></div>
                <div class="text" v-html="formatContent(recruit.fields.content)" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

const recruit = ref([]);

onMounted(async () => {
    recruit.value = await fetchRecruit();
    //console.log(recruit.value)

    nextTick(() => {
        ScrollTrigger.refresh(true);
        setTimeout(() => {
            gsap.from(".corporation", {
                scrollTrigger: {
                    trigger: ".corporation",
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                duration: 0.5,
                delay: 0.3,
                y: 50
            });
        }, 300);
    });
});

async function fetchRecruit() {
	const { $contentfulClient  } = useNuxtApp(); 
  const response = await $contentfulClient .getEntries({
    content_type: 'recruitment', // ← Content model の ID
    order: "fields.order",
    select: [
      'fields.occupation',
      'fields.content',
    ],
  });
  console.log(response.items)
  return response.items;    
}
function formatContent(content) {
  if (!content) return ''

  // Rich Text (object)
  if (typeof content === 'object') {
    return documentToHtmlString(content, {
      // ① テキスト中の改行を <br> に
      renderText: (text) => text.replace(/\n/g, '<br>'),

      // ② 中身が何もない段落は <p><br></p> を出力して空行を維持
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, next) => {
          const inner = next(node.content) || ''
          // <br> を除いた実質テキストが空なら空行として扱う
          const innerStripped = inner.replace(/<br\s*\/?>/gi, '').trim()
          if (innerStripped === '') return '<p><br></p>'
          return `<p>${inner}</p>`
        },
      },
    })
  }

  // プレーンテキスト(string)の場合は従来通り
  if (typeof content === 'string') {
    return content.replace(/\n/g, '<br>')
  }

  return ''
}
</script>

<style lang="scss" scoped>
.corporation {
    margin-top: 3%;
    position: relative;
    @media screen and (max-width: 900px) {
        margin-bottom: 5%;
    }

    .corporation-title {
        font-size: 1.5vw;
        font-weight: 700;
        margin: 0 auto 1% 25%;
        position: relative;
        z-index: 1;
        @media screen and (max-width: 900px) {
            font-size: 3.5vw;
            margin: 0 auto 1% 5%;
        }
    }

    .table-container {
        position: relative;
        z-index: 1;
        background-color: #7ECEF4;
        border: 0.3vw solid #7ECEF4;
        border-left: none;
        width: fit-content;
        height: fit-content;
        border-radius: 30px;
        margin: auto;
        overflow: hidden;
        @media screen and (max-width: 900px) {
            border-radius: 10px;
            border: 0.5vw solid #7ECEF4;
        }
        .column {
            display: flex;

            .name {
                width: 14vw;
                line-height: 4vw;
                border-bottom: 0.3vw solid white;
                border-left: none;
                text-align: center;
                font-weight: 700;
                font-size: 1.1vw;
                position: relative;
                p {
                    width: 100%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                @media screen and (max-width: 900px) {
                    width: 24vw;
                    line-height: 7vw;
                    font-size: 2.5vw;
                    border-bottom: 0.5vw solid white;
                }
            }

            .text {
                width: 35vw;
                background-color: white;
                font-weight: 700;
                font-size: 1.1vw;
                padding: 1% 8%;
                box-sizing: border-box;
                border-bottom: 0.3vw solid#7ECEF4;
                @media screen and (max-width: 900px) {
                    width: 65vw;
                    font-size: 2.5vw;
                    border-bottom: 0.5vw solid #7ECEF4;
                }
                a {
                    color: #7ECEF4;
                }
            }

            &:last-child {
                .name {
                    border-bottom: none;
                }
                .text {
                    border-bottom: none;
                }
            }
        }
    }
}
</style>
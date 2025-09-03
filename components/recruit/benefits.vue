<template>
    <div class="benefits" style="margin-top: 3%;">
        <div class="content" v-html="formatContent(benefits)"></div>
    </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

const benefits = ref([]);
//console.log(benefits.value)

onMounted(async () => {
    benefits.value = await fetchBenefits();
    //console.log(benefits.value)
    nextTick(() => {
        ScrollTrigger.refresh(true);
        setTimeout(() => {
            gsap.from(".benefits", {
                scrollTrigger: {
                    trigger: ".benefits",
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

async function fetchBenefits() {

	const { $contentfulClient  } = useNuxtApp();
  const response = await $contentfulClient .getEntries({
    content_type: 'text', // ← Content model の ID
    select: [
      'fields.title',
      'fields.content',
    ]
  });
  //console.log(response.items[0].fields.content)
  return response.items[0].fields.content;   
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
.benefits {
    width: 49vw;
    margin: auto;
    font-weight: 700;
    @media screen and (max-width: 900px) {
        width: 90vw;
    }
    .title {
        font-size: 1.5vw;
        @media screen and (max-width: 900px) {
            font-size: 3.5vw;
        }
    }
    .content {
        border: 3px solid #7ECEF4;
        border-radius: 20px;
        padding: 3% 5%;
        font-size: 1.15vw;
        line-height: 1.7;
        margin-top: 1%;
        @media screen and (max-width: 900px) {
            font-size: 2.1vw;
            border-radius: 10px;
        }
    }
}
</style>
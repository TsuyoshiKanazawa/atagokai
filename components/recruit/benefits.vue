<template>
    <div class="benefits" style="margin-top: 3%;">
        <div class="content" v-html="benefits"></div>
    </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const benefits = ref([]);

onMounted(async () => {
    benefits.value = await fetchBenefits();
    console.log(benefits.value)
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
    const { $newtClient } = useNuxtApp();
    const response = await $newtClient.getContents({
        appUid: 'cpSite',
        modelUid: 'text',
        query: {
            select: ['title', 'content'],
        }
    });
    //console.log(response.items[0].content);
    return response.items[0].content;
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
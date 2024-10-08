<template>
    <div class="recruit">
        <div class="recruit-top">
            <img src="/img/recruit-top.png" alt="background" class="recruit-top-image">
            <div class="recruit-top-title">採用情報</div>
        </div>
        <div class="recruit-copy">
            <div class="copy">向き合うから<br>本気になれる。</div>
            <div class="content">
                愛宕会では、職員の自主性を重視し、<br>
                やりがいと誇りをもって働ける<br class="sp-only">職場を目指しています。<br>
                職員の 気づきや提案による職場改善を行い、<br>
                自他の個性や事情を尊重し合いながら、<br>
                互いに気持ちよく働ける 職場を目指した<br>
                啓発活動やルール作りに取り組んでいます。
            </div>
            <div @click="scrollToCorporation" class="link">
                <div class="copy-link-text">募集要項</div>
                <img src="/img/arrow.svg" alt="background" class="arrow">
            </div>
        </div>
        <img src="/img/recruit-copy-bottom.png" alt="background" class="recruit-copy-bottom">
        <div class="recruit-features">
            <div class="features-pic-container">
                <img src="/img/features-pic1.jpg" alt="background" class="features-pic1">
                <img src="/img/features-pic2.jpg" alt="background" class="features-pic2">
            </div>
            <div class="features-text">
                <div class="features-title">愛宕会で働く特徴</div>
                <div class="features-content">
                    ①自然と人が近い隠岐の暮らし自然豊かで人との距離が近い、<br>
                    　癒しが溢れる隠岐の暮らし。<br>
                    <br>
                    ②女性の活躍を応援する職場子育てに関する多様な制度で、<br>
                    　女性の活躍を応援。<br>
                    <br>
                    ③職員と利用者を何よりも大切に職員からの意見や要望に耳を傾け、<br>
                    　利用者を大切にする。
                </div>
                <div class="features-content sp">
                    ①自然と人が近い隠岐の暮らし自然豊かで<br>
                    　人との距離が近い、癒しが溢れる<br>
                    　隠岐の暮らし。<br>
                    <br>
                    ②女性の活躍を応援する職場子育てに<br>
                    　関する多様な制度で、女性の活躍を応援。<br>
                    <br>
                    ③職員と利用者を何よりも大切に職員からの<br>
                    　意見や要望に耳を傾け、利用者を大切にする。
                </div>
                <img src="/img/features-pic3.jpg" alt="background" class="features-pic3">
                <img src="/img/features-pic4.jpg" alt="background" class="features-pic4">
            </div>
            <img src="/img/features-bottom.png" alt="background" class="features-bottom">
        </div>
        <!--<RecruitDay />
        <img src="/img/day-bottom.png" alt="background" class="day-bottom">-->
        <RecruitInterview style="margin-top: 10%;" />
        <img src="/img/benefits-top.png" alt="background" class="benefits-top">
        <RecruitCorporation />
        <RecruitBenefits />
        <service />
    </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

onMounted(async () => {

    nextTick(() => {
        ScrollTrigger.refresh(true);
        setTimeout(() => {
            gsap.from(".copy", {
                scrollTrigger: {
                    trigger: ".copy",
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                duration: 1,
                y: 50
            });
            gsap.from(".content", {
                scrollTrigger: {
                    trigger: ".content",
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                duration: 1,
                delay: 0.5,
                y: 50
            });
            gsap.from(".features-pic1", {
                scrollTrigger: {
                    trigger: ".features-pic1",
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                duration: 0.5,
                x: -50
            });
            gsap.from(".features-pic2", {
                scrollTrigger: {
                    trigger: ".features-pic2",
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                duration: 0.5,
                delay: 0.2,
                x: 50
            });
            gsap.from(".features-pic3", {
                scrollTrigger: {
                    trigger: ".features-pic3",
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                duration: 0.5,
                x: -50
            });
            gsap.from(".features-pic4", {
                scrollTrigger: {
                    trigger: ".features-pic4",
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                duration: 0.5,
                delay: 0.2,
                x: 50
            });
            gsap.from(".features-text", {
                scrollTrigger: {
                    trigger: ".features-text",
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                duration: 1,
                delay: 0.3,
                y: 50
            });
        }, 300);
    });
});
const scrollToCorporation = () => {
    const corporationElement = document.querySelector('.corporation');
    if (corporationElement) {
        const y = corporationElement.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
};

useHead({
    title: '採用情報 | 社会福祉法人 愛宕会',
    meta: [
        { name: 'ogTitle', content: '採用情報 | 社会福祉法人 愛宕会' },
    ],
})
</script>

<style lang="scss" scoped>
.recruit-top {
    position: relative;
    @media screen and (max-width: 900px) {
        padding-top: 13vw;
    }
    .recruit-top-image {
        width: 100%;
    }

    .recruit-top-title {
        position: absolute;
        top: 48%;
        right: 10%;
        color: white;
        font-size: 4.5vw;
        font-weight: 500;
        @media screen and (max-width: 900px) {
            top: 58%;
        }
    }
}
.recruit-copy {
    display: flex;
    justify-content: center;
    gap: 5%;
    margin-top: 3%;
    position: relative;
    .copy {
        font-size: 2.5vw;
        font-weight: 700;
        @media screen and (max-width: 900px) {
            font-size: 5vw;
        }
    }
    .content {
        font-size: 1.2vw;
        font-weight: 700;
        @media screen and (max-width: 900px) {
            font-size: 2.5vw;
        }
    }
    .link {
        margin-right: 0;
        margin-left: auto;
        position: absolute;
        bottom: -40%;
        right: 23%;
        z-index: 10;
        cursor: pointer;
        @media screen and (max-width: 900px) {
            bottom: -60%;
            right: 5%;
            font-size: 2.5vw;
            line-height: 4vw;
            width: 15vw;
            img {
                width: 4vw;
            }
        }
    }
}
.recruit-copy-bottom {
    width: 100%;
    margin-top: -7%;
    position: relative;
    z-index: 1;
    @media screen and (max-width: 900px) {
        margin-top: -2%;
    }
}
.recruit-features {
    .features-pic-container {
        margin: auto;
        width: 40vw;
        position: relative;
        z-index: 0;
        @media screen and (max-width: 900px) {
            width: 70vw;
        }
        .features-pic1 {
            width: 13vw;
            margin-top: -15%;
            margin-right: 18%;
            @media screen and (max-width: 900px) {
                width: 26vw;
                margin-top: -20%;
            }
        }
        .features-pic2 {
            width: 11vw;
            margin-bottom: -10%;
            @media screen and (max-width: 900px) {
                width: 18vw;
            }
        }
    }
    .features-text {
        display: flex;
        justify-content: center;
        gap: 2%;
        margin-top: 6%;
        font-weight: 700;
        position: relative;
        @media screen and (max-width: 900px) {
            margin-top: 10%;
            gap: 5%;
        }
        .features-title {
            font-size: 2vw;
            @media screen and (max-width: 900px) {
                font-size: 4vw;
            }
        }
        .features-content {
            font-size: 1vw;
            &.sp {
                display: none;
            }
            @media screen and (max-width: 900px) {
                font-size: 2.3vw;
                width: 51%;
                display: none;
                line-height: 1.6;
                &.sp {
                    display: block;
                }
            }

        }
        .features-pic3 {
            width: 13vw;
            position: absolute;
            bottom: -50%;
            left: 26%;
            z-index: 0;
            @media screen and (max-width: 900px) {
                width: 23vw;
                bottom: -10%;
                left: 7%;
            }
        }
        .features-pic4 {
            width: 11vw;
            position: absolute;
            bottom: -90%;
            right: 29%;
            z-index: 0;
            @media screen and (max-width: 900px) {
                width: 23vw;
            }
        }
    }
    .features-bottom {
        width: 100%;
        margin-top: -9%;
        position: relative;
        z-index: 1;
        @media screen and (max-width: 900px) {
            margin-top: 5%;
        }
    }
}
.day-bottom {
    width: 100%;
    margin-top: -6%;
    @media screen and (max-width: 900px) {

    }
}
.benefits-top {
    width: 100%;
    margin-top: -5%;
    @media screen and (max-width: 900px) {
        margin-top: 0%;
    }
}
</style>
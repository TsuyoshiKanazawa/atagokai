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
                やりがいと誇りをもって働ける職場を目指しています。<br>
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
                <img src="/img/features-pic3.jpg" alt="background" class="features-pic3">
                <img src="/img/features-pic4.jpg" alt="background" class="features-pic4">
            </div>
            <img src="/img/features-bottom.png" alt="background" class="features-bottom">
        </div>
        <day />
        <img src="/img/day-bottom.png" alt="background" class="day-bottom">
        <interview />
        <img src="/img/benefits-top.png" alt="background" class="benefits-top">
        <div class="benefits">
            <div class="title">
                福利厚生
            </div>
            <div class="content">
                ●令和5年2月以降、常勤で採用された看護師・准看護師資格を持った方<br>
                　勤続3か月以上で10万円、半年以上で40万円、1年以上で50万円　計100万円の<br>
                　就職祝い金を支給することとなりました。<br>
                　また、奨学金を返済中の方へ最大240万円を助成いたします。<br>
                <br>
                ●令和3年4月以降、正規・嘱託・臨時職員として新規採用された方<br>
                　職種を問わず、勤続3か月以上で就職祝金(10万円)を支給することとなりました。<br>
                　(退職後3年以上の元職員も含みます)
            </div>
        </div>
        <div class="corporation">
            <div class="corporation-title">募集要項：看護師</div>
            <div class="table-container">
                <div class="column">
                    <div class="name">雇用形態</div>
                    <div class="text">正規職員</div>
                </div>
                <div class="column">
                    <div class="name">資格</div>
                    <div class="text">看護師・准看護師</div>
                </div>
                <div class="column">
                    <div class="name">給与＋手当</div>
                    <div class="text">208,300円</div>
                </div>
                <div class="column">
                    <div class="name">賞与</div>
                    <div class="text">年2回（合計4.0ヵ月分）</div>
                </div>
                <div class="column">
                    <div class="name">退職金制度</div>
                    <div class="text">あり</div>
                </div>
                <div class="column">
                    <div class="name">夜勤</div>
                    <div class="text">なし</div>
                </div>
            </div>

        </div>
        <service />
    </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
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
                duration: 0.5,
                y: 50
            });
            gsap.from(".content", {
                scrollTrigger: {
                    trigger: ".content",
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                duration: 0.5,
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
                duration: 0.5,
                delay: 0.3,
                y: 50
            });
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
const scrollToCorporation = () => {
    const corporationElement = document.querySelector('.corporation');
    if (corporationElement) {
        const y = corporationElement.getBoundingClientRect().top + window.pageYOffset - 100; // 100pxはヘッダーなどのオフセット
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
    }
    .content {
        font-size: 1.2vw;
        font-weight: 700;
    }
    .link {
        margin-right: 0;
        margin-left: auto;
        position: absolute;
        bottom: -40%;
        right: 23%;
        z-index: 10;
        cursor: pointer;
    }
}

.recruit-copy-bottom {
    width: 100%;
    margin-top: -7%;
    position: relative;
    z-index: 1;
}
.recruit-features {
    .features-pic-container {
        margin: auto;
        width: 40vw;
        position: relative;
        z-index: 0;
        .features-pic1 {
            width: 13vw;
            margin-top: -15%;
            margin-right: 18%;
        }
        .features-pic2 {
            width: 11vw;
            margin-bottom: -10%;
        }
    }
    .features-text {
        display: flex;
        justify-content: center;
        gap: 2%;
        margin-top: 6%;
        font-weight: 700;
        position: relative;
        .features-title {
            font-size: 2vw;
        }
        .features-content {
            font-size: 1vw;
        }
        .features-pic3 {
            width: 13vw;
            position: absolute;
            bottom: -50%;
            left: 26%;
            z-index: 0;
        }
        .features-pic4 {
            width: 11vw;
            position: absolute;
            bottom: -90%;
            right: 29%;
            z-index: 0;
        }
    }
    .features-bottom {
        width: 100%;
        margin-top: -9%;
        position: relative;
        z-index: 1;
    }
}
.day-bottom {
    width: 100%;
    margin-top: -6%;
}
.benefits-top {
    width: 100%;
    margin-top: -5%;
}
.benefits {
    width: 49vw;
    margin: auto;
    font-weight: 700;
    .title {
        font-size: 1.5vw;
    }
    .content {
        border: 3px solid #7ECEF4;
        border-radius: 20px;
        padding: 3% 5%;
        font-size: 1.15vw;
        line-height: 1.7;
        margin-top: 1%;
    }
}
.corporation {
    margin-top: 3%;
    position: relative;

    .corporation-title {
        font-size: 1.5vw;
        font-weight: 700;
        margin: 0 auto 1% 25%;
        position: relative;
        z-index: 1;
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

        .column {
            display: flex;

            .name {
                width: 14vw;
                height: 4vw;
                line-height: 4vw;
                border-bottom: 0.3vw solid white;
                border-left: none;
                text-align: center;
                font-weight: 700;
                font-size: 1.1vw;
            }

            .text {
                width: 35vw;
                height: 4vw;
                line-height: 4vw;
                background-color: white;
                font-weight: 700;
                font-size: 1.1vw;
                padding: 0 8%;
                box-sizing: border-box;
            }

            &:last-child {
                .name {
                    border-bottom: none;
                }
            }
        }
    }
}
</style>
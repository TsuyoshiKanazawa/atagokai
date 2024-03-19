<template>

    <div class="about">
        <div class="about-top">
            <img src="/img/about-top.png" alt="background" class="about-top-image">
            <div class="about-top-title">
                <p>about</p>
                <h1>愛宕会について</h1>
            </div>
        </div>
        <div class="about-mv">
            <div class="mission">
                <div class="title">mission<br><span>ミッション</span></div>
                <div class="text">One for all smile<br><span>愛宕会は福祉事業を通じて、地域の笑顔を創造する</span></div>
            </div>
            <div class="vision">
                <div class="title">vision<br><span>ビジョン</span></div>
                <div class="right">
                    <img src="/img/vision-line.svg" alt="line" class="line">
                    <div class="texts">
                        <div class="text">One person</div>
                        <div class="text">One action</div>
                        <div class="text">One future</div>
                    </div>
                    <div class="bottom-text">一つ一つを大切に一人一人が未来のためになる活動をする</div>
                </div>
            </div>
        </div>
        <div class="corporation">
            <img src="/img/corporation-top.png" alt="background" class="corporation-top-image">
            <div class="corporation-title">法人概要</div>
            <div class="table-container">
                <div class="column">
                    <div class="name">名称</div>
                    <div class="text">社会福祉法人 愛宕会</div>
                </div>
                <div class="column">
                    <div class="name">代表者氏名</div>
                    <div class="text">理事長　村上 和弘</div>
                </div>
                <div class="column">
                    <div class="name">役員</div>
                    <div class="text">理事６名（理事長含む） 監事２名</div>
                </div>
                <div class="column">
                    <div class="name">所在地</div>
                    <div class="text">〒685-0311　島根県隠岐郡隠岐の島町郡４２５番５</div>
                </div>
                <div class="column">
                    <div class="name">TEL</div>
                    <div class="text">08512-5-3811</div>
                </div>
                <div class="column">
                    <div class="name">FAX</div>
                    <div class="text">08512-5-3812</div>
                </div>
                <div class="column">
                    <div class="name">MAIL</div>
                    <div class="text">nagomien@shore.ocn.ne.jp</div>
                </div>
            </div>

        </div>
        <div class="certification">
            <div class="certification-title">認証制度</div>
            <div class="certification-logo">
                <img src="/img/kokkoro.svg" alt="background" class="kokkoro-logo">
                <img src="/img/girlSupport.svg" alt="background" class="girlSupport-logo">
            </div>
        </div>
        <div class="history">
            <img src="/img/history-top.png" alt="background" class="history-top-image">
            <div class="history-title">沿革</div>
            <img src="/img/history.png" alt="background" class="history-image">
        </div>
        <div class="link">
            <a href="/" target="_blank">
                <div class="link-text">行動計画</div>
                <img src="/img/about-link-arrow.svg" alt="background" class="link-arrow">
            </a>
            <a  href="/" target="_blank">
                <div class="link-text">定款・決算書等</div>
                <img src="/img/about-link-arrow.svg" alt="background" class="link-arrow">
            </a>
            <a href="/" target="_blank">
                <div class="link-text">処遇改善計画書</div>
                <img src="/img/about-link-arrow.svg" alt="background" class="link-arrow">
            </a>
            <a href="/" target="_blank">
                <div class="link-text">広報</div>
                <img src="/img/about-link-arrow.svg" alt="background" class="link-arrow">
            </a>
        </div>
        <recruitLink />
        <service />
    </div>

</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { nextTick } from 'vue';
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    
    nextTick(() => {
        ScrollTrigger.refresh(true);
        setTimeout(() => {
            gsap.from(".mission", {
                scrollTrigger: {
                    trigger: ".mission",
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                duration: 0.5,
                y: 50
            });
            gsap.from(".vision", {
                scrollTrigger: {
                    trigger: ".vision",
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                duration: 0.5,
                y: 50
            });
            gsap.from(".table-container", {
                scrollTrigger: {
                    trigger: ".corporation",
                    start: "top 60%",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                duration: 0.5,
                y: 50
            });
            gsap.from(".certification-logo", {
                scrollTrigger: {
                    trigger: ".certification",
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                duration: 0.5,
                y: 50
            });
            gsap.from(".history-image", {
                scrollTrigger: {
                    trigger: ".history",
                    start: "top 50%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                duration: 0.5,
                y: 50
            });
        }, 300);

    });

});

useHead({
  title: '愛宕会について | 社会福祉法人 愛宕会',
  meta: [
    { name: 'ogTitle', content: '愛宕会について | 社会福祉法人 愛宕会' },
  ],
})
</script>

<style lang="scss" scoped>
.about-top {
    position: relative;
    .about-top-image {
        width: 100%;
    }
    .about-top-title {
        position: absolute;
        top: 30%;
        right: 10%;
        color: white;
        font-size: 3vw;
        font-weight: 500;
        h1 {
            font-size: 4.5vw;
        }
    }
}
.about-mv {
    margin: auto;
    margin-top: 3%;
    width: 60vw;
    .mission {
        display: flex;
        justify-content: flex-start;
        gap: 10%;
        .title {
            border: 1px solid black;
            text-align: center;
            font-size: 1.5vw;
            font-weight: 700;
            padding: 0.5vw 0.8vw;
            line-height: 0.7;
            height: 2.3vw;
            width: 6vw !important;
            span {
                font-size: 0.8vw;
            }
        }
        .text {
            text-align: center;
            font-size: 4vw;
            font-weight: 400;
            position: relative;
            line-height: 0.8;
            span {
                font-size: 1.5vw;
                position: absolute;
                bottom: -80%;
                left: 50%;
                transform: translateX(-50%);
                width: 50vw;
                font-weight: 700;
            }
        }
    }
    .vision {
        display: flex;
        justify-content: flex-start;
        gap: 5%;
        margin-top: 10%;
        .title {
            border: 1px solid black;
            text-align: center;
            font-size: 1.5vw;
            font-weight: 700;
            padding: 0.5vw 0.8vw;
            line-height: 0.7;
            height: 2.3vw;
            width: 6vw !important;
            margin-top: 3%;
            span {
                font-size: 0.8vw;
            }
        }
        .right {
            text-align: center;
            font-size: 4vw;
            font-weight: 400;
            position: relative;
            line-height: 0.8;
            .line {
                width: 35vw;
            }
            span {
                font-size: 1.5vw;
                position: absolute;
                bottom: -80%;
                left: 50%;
                transform: translateX(-50%);
                width: 50vw;
                font-weight: 700;
            }
            .texts {
                display: flex;
                justify-content: space-between;
                position: absolute;
                bottom: -50%;
                left: -30%;
                width: 58vw;
                font-size: 3.3vw;
                font-weight: 600;
                .text {
                    width: fit-content;
                }
            }
            .bottom-text {
                position: absolute;
                bottom: -100%;
                left: 50%;
                transform: translateX(-50%);
                width: 35vw;
                font-size: 1.3vw;
                font-weight: 600;
            }
        }
    }
}
.corporation {
    margin-top: 9%;
    position: relative;
    .corporation-top-image {
        width: 100%;
        position: relative;
        z-index: 0;
    }
    .corporation-title {
        font-size: 2vw;
        font-weight: 700;
        margin: -15% auto 1% 19%;
        position: relative;
        z-index: 1;
    }
    .table-container {
        position: relative;
        z-index: 1;
        background-color: #DAEEFA;
        border: 0.3vw solid #DAEEFA;
        border-left: none;
        width: fit-content;
        height: fit-content;
        border-radius: 30px;
        margin: auto;
        overflow: hidden;
        .column {
            display: flex;
            .name {
                width: 17vw;
                height: 5vw;
                line-height: 5vw;
                border-bottom: 0.3vw solid white;
                border-left: none;
                text-align: center;
                font-weight: 700;
                font-size: 1.3vw;
            }
            .text {
                width: 45vw;
                height: 5vw;
                line-height: 5vw;
                background-color: white;
                font-weight: 700;
                font-size: 1.3vw;
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
.certification {
    margin-top: 3%;
    .certification-title {
        font-size: 2vw;
        font-weight: 700;
        margin: 0 auto 1% 19%;
    }
    .certification-logo {
        display: flex;
        gap: 5%;
        margin-top: -2%;
        margin-left: 32%;
        img {
            width: 10vw;
        }
    }
}
.history {
    margin-top: -10%;
    .history-top-image {
        width: 100%;
    }
    .history-title {
        font-size: 2vw;
        font-weight: 700;
        margin: 0 auto 1% 19%;
    }
    .history-image {
        width: 65vw;
        display: block;
        margin: -10% auto 0;
    }
}
.link {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3%;
    width: 70%;
    margin: auto;
    z-index: 1;
    position: relative;
    a {
        background-color: #DAEEFA;
        border: 0.2vw solid #DAEEFA;
        width: 45%;
        height: 5vw;
        display: flex;
        line-height: 5vw;
        text-align: center;
        position: relative;
        border-radius: 30px;
        margin-bottom: 3%;
        transition: 0.3s;
        img {
            width: 2vw;
            position: absolute;
            top: 50%;
            right: 5%;
            transform: translateY(-50%);
            border: 2px solid #DAEEFA;
            border-radius: 50%;
        }
        .link-text {
            margin: auto;
            font-size: 1.7vw;
        }
    }
    a:hover {
        background-color: white;
    }
}
</style>
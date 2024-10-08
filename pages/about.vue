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
            <a href="https://atagokai01.assets.newt.so/v1/e16e3d20-bb3c-43ac-a311-6a132ce391a2/%E4%B8%80%E8%88%AC%E4%BA%8B%E6%A5%AD%E4%B8%BB%E8%A1%8C%E5%8B%95%E8%A8%88%E7%94%BB.pdf" target="_blank">
                <div class="link-text">行動計画</div>
                <img src="/img/about-link-arrow.svg" alt="background" class="link-arrow">
            </a>
            <a href="https://www.wam.go.jp/wamnet/zaihyoukaiji/pub/PUB0201000E00.do?_FORMID=PUB0219000&vo_headVO_corporationId=1632112172"
                target="_blank">
                <div class="link-text">定款・決算書等</div>
                <img src="/img/about-link-arrow.svg" alt="background" class="link-arrow">
            </a>
            <a href="https://atagokai01.assets.newt.so/v1/93a1c2c2-5be5-49ac-9a4d-fcedb4c3d411/%E5%87%A6%E9%81%87%E6%94%B9%E5%96%84%E8%A8%88%E7%94%BB%E6%9B%B8R6.pdf"
                target="_blank">
                <div class="link-text">処遇改善計画書</div>
                <img src="/img/about-link-arrow.svg" alt="background" class="link-arrow">
            </a>
            <a href="https://atagokai01.assets.newt.so/v1/782a3a2d-47a0-47d7-b7be-3045331cf635/R6-kouho.pdf"
                target="_blank">
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
                duration: 1,
                y: 50
            });
            gsap.from(".vision", {
                scrollTrigger: {
                    trigger: ".vision",
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                duration: 1,
                y: 50
            });
            gsap.from(".table-container", {
                scrollTrigger: {
                    trigger: ".corporation",
                    start: "top 60%",
                    toggleActions: "play none none none",
                },
                opacity: 0,
                duration: 1,
                y: 50
            });
            gsap.from(".certification-logo", {
                scrollTrigger: {
                    trigger: ".certification",
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                duration: 1,
                y: 50
            });
            gsap.from(".history-image", {
                scrollTrigger: {
                    trigger: ".history",
                    start: "top 50%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                duration: 1,
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
    @media screen and (max-width: 900px) {
        padding-top: 13vw;
    }
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
        @media screen and (max-width: 900px) {
            top: 53%;
        }
    }
}
.about-mv {
    margin: auto;
    margin-top: 3%;
    width: 60vw;
    @media screen and (max-width: 900px) {
        width: 90vw;
    }
    .mission {
        .title {
            border: 1px solid black;
            text-align: center;
            font-size: 1.5vw;
            font-weight: 700;
            padding: 0.5vw 0.8vw;
            line-height: 0.7;
            height: 2.3vw;
            width: 6vw !important;
            margin: auto;
            @media screen and (max-width: 900px) {
                font-size: 3.5vw;
                width: 13vw !important;
                height: 5vw;
                padding: 1vw 2vw;
            }
            span {
                font-size: 0.8vw;
                @media screen and (max-width: 900px) {
                    font-size: 2vw;
                }
            }
        }
        .text {
            text-align: center;
            font-size: 4vw;
            font-weight: 700;
            position: relative;
            line-height: 0.8;
            letter-spacing: 0.08em;
            margin-top: 3%;
            @media screen and (max-width: 900px) {
                font-size: 6vw;
                font-weight: 500;
            }
            span {
                font-size: 1.5vw;
                position: absolute;
                bottom: -80%;
                left: 50%;
                transform: translateX(-50%);
                width: 50vw;
                font-weight: 700;
                letter-spacing: 0.05em;
                @media screen and (max-width: 900px) {
                    margin: 0;
                    bottom: -100%;
                    font-size: 2.7vw;
                    width: 70vw;
                }
            }
        }
    }
    .vision {
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
            margin: auto;
            @media screen and (max-width: 900px) {
                font-size: 3.5vw;
                width: 13vw !important;
                height: 5vw;
                padding: 1vw 2vw;
            }
            span {
                font-size: 0.8vw;
        
                @media screen and (max-width: 900px) {
                    font-size: 2vw;
                }
            }
        }
        .right {
            text-align: center;
            font-size: 4vw;
            font-weight: 400;
            position: relative;
            line-height: 0.8;
            letter-spacing: 0.08em;
            margin: auto;
            @media screen and (max-width: 900px) {
                margin-top: 2%;
            }
            .line {
                width: 43vw;
                @media screen and (max-width: 900px) {
                    width: 60vw;
                }
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
                width: fit-content;
                font-size: 3.3vw;
                font-weight: 600;
                margin: auto;
                .text {
                    width: fit-content;
                    margin-top: 10%;
                }
                @media screen and (max-width: 900px) {
                    font-size: 4.5vw;
                }
            }
            .bottom-text {
                position: absolute;
                bottom: -35%;
                left: 50%;
                transform: translateX(-50%);
                width: 43vw;
                font-size: 1.3vw;
                font-weight: 600;
                @media screen and (max-width: 900px) {
                    width: 80vw;
                    font-size: 2.3vw;
                }
            }
        }
    }
}
.corporation {
    margin-top: 9%;
    position: relative;
    @media screen and (max-width: 900px) {
        margin-top: 15%;
    }
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
        @media screen and (max-width: 900px) {
            font-size: 3.5vw;
            margin: -15% auto 1% 5%;
        }
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
                @media screen and (max-width: 900px) {
                    width: 25vw;
                    height: 8vw;
                    line-height: 8vw;
                    font-size: 2.5vw;
                }
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
                @media screen and (max-width: 900px) {
                    width: 65vw;
                    height: 8vw;
                    line-height: 8vw;
                    font-size: 2.5vw;
                    
                }
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
        @media screen and (max-width: 900px) {
            font-size: 3.5vw;
            margin: 0 auto 1% 5%;
        }
    }
    .certification-logo {
        display: flex;
        gap: 5%;
        margin-top: -2%;
        margin-left: 32%;
        @media screen and (max-width: 900px) {
            margin-left: 25%;
        }
        img {
            width: 10vw;
            @media screen and (max-width: 900px) {
                width: 20vw;
            }
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
        @media screen and (max-width: 900px) {
            font-size: 3.5vw;
            margin: 0 auto 1% 5%;
        }
    }
    .history-image {
        width: 65vw;
        display: block;
        margin: -10% auto 0;
        @media screen and (max-width: 900px) {
            width: 90vw;
        }
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
    @media screen and (max-width: 900px) {
        width: 100%;
        margin-bottom: 5%;
    }
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
        @media screen and (max-width: 900px) {
            height: 8vw;
            border-radius: 3vw;
        }
        img {
            width: 2vw;
            position: absolute;
            top: 50%;
            right: 5%;
            transform: translateY(-50%);
            border: 2px solid #DAEEFA;
            border-radius: 50%;
            @media screen and (max-width: 900px) {
                width: 5vw;
            }
        }
        .link-text {
            margin: auto;
            font-size: 1.7vw;
            @media screen and (max-width: 900px) {
                font-size: 2.5vw;
            }
        }
    }
    a:hover {
        background-color: white;
    }
}
</style>
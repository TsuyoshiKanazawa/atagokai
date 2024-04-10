<template>
  <div class="recruit-link">
    <img src="/img/recruitLink-top.png" alt="background" class="recruitLink-top">
    <div class="recruit-title">
        <img src="/img/recruitLogo.svg" alt="title" class="recruit-logo">
        <div>採用情報</div>
    </div>
    <Splide
    :options="splideOpt"
    :extensions="extensions"
    class="recruitLink-images"
    >
        <SplideSlide>
            <img src="/img/recruitLink1.jpg" alt="recruitLink1" class="recruitLink-image">
        </SplideSlide>
        <SplideSlide>
            <img src="/img/recruitLink2.jpg" alt="recruitLink1" class="recruitLink-image">
        </SplideSlide>
        <SplideSlide>
            <img src="/img/recruitLink3.jpg" alt="recruitLink1" class="recruitLink-image">
        </SplideSlide>
    </Splide>
    <img src="/img/recruitLink-bottom.png" alt="background" class="recruitLink-bottom">
    <nuxt-link to="/recruit" class="link">
        <img src="/img/arrow.svg" alt="background" class="arrow">
        <div class="copy-link-text">詳しくはこちら</div>
    </nuxt-link>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import { Intersection } from '@splidejs/splide-extension-intersection';

export default {
    components: {
        Splide,
        SplideSlide
    },
    data() {
        return {
            splideOpt: {
                type: 'loop', // ループさせる
                arrows: false, // 矢印ボタンを非表示
                pagination: false, // ページネーションを非表示
                drag: false, // ドラッグ無効
                gap: 0, // スライド間の余白
                fixedWidth: true,
                fixedHeight: true,
                autoplay: true, // 自動再生を有効にする
                interval: 5000, // 画像が切り替わるまでの時間（5000 = 5秒）
                speed: 1500,
                intersection: {
                    inView: {
                    autoplay: true,
                    },
                    outView: {
                    autoplay: false,
                    },
                },
            },
            extensions: {
                Intersection,
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.recruit-link {
    position: relative;
    height: 60vw;
    margin-top: -9%;
    overflow: hidden;
    .recruitLink-top {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        z-index: -1;
    }
    .recruit-title {
        display: flex;
        justify-content: center;
        gap: 2%;
        position: absolute;
        top: 57%;
        left: 5%;
        background-color: white;
        width: 17vw;
        height: 5vw;
        font-size: 2.3vw;
        font-weight: 700;
        line-height: 5vw;
        .recruit-logo {
            width: 4vw;
        }
        @media screen and (max-width: 900px) {
            font-size: 3.5vw;
            width: 25vw;
            height: 7vw;
            line-height: 7vw;
        }
    }
    .recruitLink-images {
        position: absolute;
        top: 5%;
        left: 0;
        width: 100vw;
        z-index: -10;
        .recruitLink-image {
            width: 100vw;
            
            @media screen and (max-width: 900px) {
                transform: translateX(2.5%) scale(1.05);
            }
        }
    }
    .recruitLink-bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100vw;
        z-index: -1;
    }
    .link {
        display: block;
        position: absolute;
        bottom: 11%;
        right: 3%;
        width: 11vw;
        text-align: end;
        @media screen and (max-width: 900px) {
            width: 50vw;
            bottom: -20%;
        }
        .arrow {
            display: block;
            margin: 0 0 0 auto;
        }
    }
}
</style>
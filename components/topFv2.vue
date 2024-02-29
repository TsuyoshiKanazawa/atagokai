<template>
    <div class="top-fv">
        <Splide
        :options="splideOpt"
        :extensions="extensions"
        class="fv-container"
        >
            <SplideSlide>
                <img src="/img/fvImage1.jpg" alt="fv1" class="fvImage">
            </SplideSlide>
            <SplideSlide>
                <img src="/img/fvImage2.jpg" alt="fv2" class="fvImage">
            </SplideSlide>
            <SplideSlide>
                <img src="/img/fvImage3.jpg" alt="fv3" class="fvImage">
            </SplideSlide>
        </Splide>
    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'


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
                gap: 3, // スライド間の余白
                autoWidth: true,
                autoScroll: {
                    speed: 0.2, // スクロール速度
                    pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
                }
            },
            extensions: {
                AutoScroll
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.top-fv {
    width: 100%;
    height: 50vw;
    overflow: hidden;

    .fv-container {

        .fvImage {
            width: 30vw;
        }
    }

}
</style>

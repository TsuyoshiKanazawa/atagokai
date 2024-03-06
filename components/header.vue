<template>
    <header :class="{'hide-header': hideHeader}">
        <nuxt-link to="/" class="header-left">
            <img src="/img/logo.svg" alt="logo" class="logo">
            <div class="name">社会福祉法人 愛宕会</div>
        </nuxt-link>
        <div class="header-menu">
            <div class="header-menu-content"><img src="/img/newsLogo.svg" alt="menu-logo" class="menu-logo"><nuxt-link to="/news">お知らせ</nuxt-link></div>
            <div class="header-menu-content"><img src="/img/aboutLogo.svg" alt="menu-logo" class="menu-logo"><nuxt-link to="/">愛宕会について</nuxt-link></div>
            <div class="header-menu-content"><img src="/img/serviceLogo.svg" alt="menu-logo" class="menu-logo"><nuxt-link to="/">施設・サービス一覧</nuxt-link></div>
            <div class="header-menu-content"><img src="/img/recruitLogo.svg" alt="menu-logo" class="menu-logo"><nuxt-link to="/">採用情報</nuxt-link></div>
            <div class="header-menu-content"><img src="/img/contactLogo.svg" alt="menu-logo" class="menu-logo"><nuxt-link to="/">お問い合わせ</nuxt-link></div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            scrollCount: 0,
            lastScrollTop: 0,
            hideHeader: false,
        };
    },
    methods: {
        handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > this.lastScrollTop) {
                // 下にスクロール
                this.scrollCount++;
                if (this.scrollCount >= 2) {
                    this.hideHeader = true;
                }
            } else {
                // 上にスクロール
                this.scrollCount = 0; // カウントをリセット
                this.hideHeader = false;
            }
            this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // ネガティブな値を避ける
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
}
</script>

<style lang="scss" scoped>
    header {
        padding: 1.5vw;
        padding-right: 5vw;
        background-color: white;
        display: flex;
        justify-content: space-between;
        height: 6vw;
        width: 100vw;
        box-sizing: border-box;
        position: fixed;
        z-index: 100;
        transition: transform 0.3s ease;
        .header-left {
            display: flex;
            .logo {
                height: 3vw;
            }
            .name {
                font-size: 1vw;
                font-weight: 800;
                line-height: 3vw;
            }
        }
        .header-menu {
            display: flex;
            gap: 20px;
            height: 1vw;
            margin: auto 0;
            font-size: 1vw;
            line-height: 1vw;
            .header-menu-content {
                display: flex;
                height: 1vw;
                color: black;
                font-weight: 700;
                .menu-logo {
                    width: 2vw;
                }
                a {
                    position: relative;
                }
                a::after {
                    position: absolute;
                    left: 0;
                    content: '';
                    width: 100%;
                    height: 2px;
                    background: #000000;
                    bottom: -5px;
                    transform: scale(0, 1);
                    transform-origin: center top;
                    transition: transform 0.3s;
                }
                &:hover {
                    a::after {
                        transform: scale(1, 1);
                    }
                }
                &.grey {
                    opacity: 0.3;
                }
            }
        }
    }
    .hide-header {
        transform: translateY(-100%);
        transition: transform 0.3s ease;
    }
</style>
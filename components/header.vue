<template>
    <header :class="{'hide-header': hideHeader}">
        <nuxt-link to="/" class="header-left">
            <img src="/img/logo.svg" alt="logo" class="logo">
            <div class="name">社会福祉法人 愛宕会</div>
        </nuxt-link>
        <div class="header-menu">
            <div class="header-menu-content"><img src="/img/newsLogo.svg" alt="menu-logo" class="menu-logo">
                <div @click="routeEnter('news')" class="menu-link">お知らせ</div>
            </div>
            <div class="header-menu-content"><img src="/img/aboutLogo.svg" alt="menu-logo" class="menu-logo">
                <div @click="routeEnter('about')" class="menu-link">愛宕会について</div>
            </div>
            <div class="header-menu-content"><img src="/img/serviceLogo.svg" alt="menu-logo" class="menu-logo">
                <div @click="routeEnter('service')" class="menu-link">施設・サービス一覧</div>
            </div>
            <div class="header-menu-content"><img src="/img/recruitLogo.svg" alt="menu-logo" class="menu-logo">
                <div @click="routeEnter('recruit')" class="menu-link">採用情報</div>
            </div>
            <div class="header-menu-content"><img src="/img/contactLogo.svg" alt="menu-logo" class="menu-logo">
                <div @click="scrollToBottom" class="menu-link">お問い合わせ</div>
            </div>
        </div>
        <div class="hamberger" @click="toggleMenu" :class="{ 'menu-visible': menuOpen }">
            <div class="line top"></div>
            <div class="line middle"></div>
            <div class="line bottom"></div>
        </div>
        <div class="header-menu-sp" v-show="menuOpen" :class="{ 'menu-visible': menuOpen }">
            <div class="header-menu-content">
                <img src="/img/newsLogo.svg" alt="menu-logo" class="menu-logo">
                <div @click="routeEnterSp('news')" class="menu-link">お知らせ</div>
            </div>
            <div class="header-menu-content">
                <img src="/img/aboutLogo.svg" alt="menu-logo" class="menu-logo">
                <div @click="routeEnterSp('about')" class="menu-link">愛宕会について</div>
            </div>
            <div class="header-menu-content">
                <img src="/img/serviceLogo.svg" alt="menu-logo" class="menu-logo" style="width: 5vw;">
                <div @click="routeEnterSp('service')" class="menu-link" style="line-height: 9vw;">施設・サービス一覧</div>
            </div>
            <div class="header-menu-content">
                <img src="/img/recruitLogo.svg" alt="menu-logo" class="menu-logo">
                <div @click="routeEnterSp('recruit')" class="menu-link">採用情報</div>
            </div>
            <div class="header-menu-content">
                <img src="/img/contactLogo.svg" alt="menu-logo" class="menu-logo">
                <div @click="scrollToBottom" class="menu-link">お問い合わせ</div>
            </div>
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
            menuOpen: false, // メニューの開閉状態
        };
    },
    methods: {
        handleScroll() {
            if (!this.menuOpen) {
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
            }
        },
        routeEnter(link) {
            this.$router.push(`/${link}`)
        },
        routeEnterSp(link) {
            this.$router.push(`/${link}`)
            this.menuOpen = !this.menuOpen;
        },
        scrollToBottom() {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        },
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
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
        @media screen and (max-width: 900px) {
            height: 20vw;
        }
        .header-left {
            display: flex;
            .logo {
                height: 3vw;
                @media screen and (max-width: 900px) {
                    height: 10vw;
                    padding: 3vw;
                }
            }
            .name {
                font-size: 1vw;
                font-weight: 800;
                line-height: 3vw;
                @media screen and (max-width: 900px) {
                    font-size: 3.5vw;
                    line-height: 16vw;
                }
            }
        }
        .header-menu {
            display: flex;
            gap: 20px;
            height: 1vw;
            margin: auto 0;
            font-size: 1vw;
            line-height: 1vw;
            @media screen and (max-width: 900px) {
                display: none;
            }
            .header-menu-content {
                display: flex;
                height: 1vw;
                color: black;
                font-weight: 700;
                .menu-logo {
                    width: 2vw;
                }
                .menu-link {
                    position: relative;
                    cursor: pointer;
                }
                .menu-link::after {
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
                    .menu-link::after {
                        transform: scale(1, 1);
                    }
                }
                &.grey {
                    opacity: 0.3;
                }
            }
        }
        .hamberger {
            display: none;
            @media screen and (max-width: 900px) {
                display: block;
                background-color: $green;
                width: 10vw;
                height: 10vw;
                margin: auto 0;
                border-radius: 50%;
                border: 1px solid $green;
                position: relative;
                z-index: 10;
                .line {
                    width:5vw;
                    height: 2px;
                    background-color: white;
                    position: absolute;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    border-radius: 2px;
                    transition: 0.4s;
                    &.top {
                        top: 35%;
                    }
                    &.middle {
                        top: 50%;
                    }
                    &.bottom {
                        top: 65%;
                    }
                }
                &.menu-visible {
                    border: 1px solid white;
                    .line {
                        &.top {
                            top: 50%;
                            transform: translate(-50%, -50%) rotate(45deg);
                        }
                    
                        &.middle {
                            opacity: 0;
                        }
                    
                        &.bottom {
                            top: 50%;
                            transform: translate(-50%, -50%) rotate(-45deg);
                        }
                    }
                }
            }
        }
        .header-menu-sp {
            transition: opacity 0.3s ease;
            opacity: 0;
            pointer-events: none;
            position: absolute;
            top: 0;
            right: 0;
            background-color: $green;
            color: white;
            height: 100vw;
            width: 70vw;
            border-bottom-left-radius: 8vw;
            padding: 15% 5%;
            box-sizing: border-box;
            @media screen and (max-width: 900px) {
                display: block !important; // v-show による display 制御を上書き
            }
            &.menu-visible {
                opacity: 1;
                pointer-events: auto;
            }
            .header-menu-content {
                display: flex;
                gap: 3%;
                margin: 0 5% 15%;
                .menu-logo {
                    width: 7vw;
                    -webkit-filter: brightness(0) invert(1);
                    filter: brightness(0) invert(1);
                }
                .menu-link {
                    font-size: 4vw;
                    line-height: 7vw;
                }
            }
        }
    }
    .hide-header {
        transform: translateY(-100%);
        transition: transform 0.3s ease;
    }
</style>
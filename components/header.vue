<template>
    <header>
        <div class="header-left">
            <img src="/img/logo.svg" alt="logo" class="logo">
            <div class="name">社会福祉法人 愛宕会</div>
        </div>
        <div class="header-menu">
            <div class="header-menu-content"><img src="/img/newsLogo.svg" alt="menu-logo" class="menu-logo"><nuxt-link to="news">お知らせ</nuxt-link></div>
            <div class="header-menu-content"><img src="/img/newsLogo.svg" alt="menu-logo" class="menu-logo"><div>愛宕会について</div></div>
            <div class="header-menu-content"><img src="/img/newsLogo.svg" alt="menu-logo" class="menu-logo"><div>施設・サービス一覧</div></div>
            <div class="header-menu-content"><img src="/img/newsLogo.svg" alt="menu-logo" class="menu-logo"><div>採用情報</div></div>
            <div class="header-menu-content"><img src="/img/newsLogo.svg" alt="menu-logo" class="menu-logo"><div>お問い合わせ</div></div>
        </div>
    </header>
</template>

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
        .header-left {
            display: flex;
            .logo {
                height: 3vw;
            }
            .name {
                font-size: 1vw;
                font-weight: 500;
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
                .menu-logo {
                    width: 2vw;
                }
            }
        }
    }
</style>
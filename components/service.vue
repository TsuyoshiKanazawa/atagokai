<template>
    <div class="top-service-link">
        <div class="service-title">
          <img src="/img/serviceLogo.svg" alt="title-logo" class="title-logo">
          <div class="title-text">施設・サービス一覧</div>
        </div>
        <div class="service-link">
            <img src="/img/serviceLink.png" alt="background" class="service-link-image">
            <nuxt-link to="/news" class="link">
                <div class="copy-link-text">ご利用を検討中の方はこちら</div>
                <img src="/img/arrow.svg" alt="background" class="arrow">
            </nuxt-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.top-service-link {
    margin-bottom: -5%;
    position: relative;
    z-index: 3;
    .service-title {
        display: flex;
        margin: 0 0 2% 6%;
        .title-logo {
            width: 4vw;
        }
        .title-text {
            font-size: 2.3vw;
            font-weight: 600;
            margin-left: 1%;
            line-height: 10vw;
        }
    }
    .service-link {
        display: flex;
        justify-content: flex-end;
        gap: 7%;
        .service-link-image {
            width: 40vw;
            position: relative;
            z-index: 10;
        }
        .link {
            width: 30vw;
            height: 3vw;
            line-height: 3vw;
            margin-right: 3%;
            margin-top: 12%;
            font-size: 2vw;
        }
    }
}

</style>
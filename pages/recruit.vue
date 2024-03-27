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
                <nuxt-link to="/" class="link">
                    <div class="copy-link-text">募集要項</div>
                    <img src="/img/arrow.svg" alt="background" class="arrow">
                </nuxt-link>
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
    </div>
</template>

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
        position: relative;
        z-index: 10;
    }
}
.recruit-copy-bottom {
    width: 100%;
    margin-top: -10%;
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
</style>
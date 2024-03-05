<template>
    <footer>
        <div class="footer-contact">
            <img src="/img/contact-text.svg" alt="background" class="contact-text">
            <div class="contact-tel">TEL:08512-5-3811
                <span class="contact-fax">（FAX:08512-5-3812）</span><br>
                <span class="contact-address">社会福祉法人愛宕会　〒685-0311 島根県隠岐郡隠岐の島町郡４２５番５</span>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="left">
                <img src="/img/logo.svg" alt="logo" class="logo">
                <div class="address">社会福祉法人愛宕会<br>
                    〒685-0311 島根県隠岐郡隠岐の島町郡４２５番５<br>
                    TEL 08512-5-3811  FAX 08512-5-3812</div>
                <img src="/img/footer-banner1.jpg" alt="banner" class="banner">
            </div>
            <div class="right">
                <ul>
                    <li class="footer-menu"><nuxt-link to="/">TOP</nuxt-link></li>
                    <li class="footer-menu"><nuxt-link to="/news">お知らせ</nuxt-link></li>
                    <li class="footer-menu grey"><nuxt-link to="/">法人概要</nuxt-link></li>
                    <li class="footer-menu grey"><nuxt-link to="/">施設・サービス一覧</nuxt-link></li>
                    <li class="footer-menu grey"><nuxt-link to="/">採用情報</nuxt-link></li>
                    <li class="footer-menu grey"><nuxt-link to="/">個人情報保護方針</nuxt-link></li>
                </ul>
            </div>
        </div>
        <div class="copyright">© 2024 Social welfare corporation ATAGOKAI all rights reserved.</div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    width: 100%;
    overflow: hidden;
    .footer-contact {
        background-image: url("/img/footer-back.png");
        background-size: cover;
        width: 100%;
        box-sizing: border-box;
        padding-top: 14%;
        padding-bottom: 10%;
        .contact-text {
            display: block;
            margin-top: 10%;
            margin: auto;
            width: 53vw;
        }
        .contact-tel {
            font-size: 2.5vw;
            display: block;
            margin-left: 23%;
            font-weight: 500;
            .contact-fax {
                font-size: 1.8vw;
            }
            .contact-address {
                font-size: 1.8vw;
            }
        }
    }
    .footer-bottom {
        display: flex;
        justify-content: space-between;
        padding: 0 10%;
        margin-top: -5%;
        .left {
            .logo {
                width: 10vw;
            }
            .address {
                margin-top: 3%;
                font-size: 1.5vw;
                line-height: 200%;
                font-weight: 600;
            }
            .banner {
                width: 35vw;
                margin-top: 3%;
            }
        }
        .right {
            margin-top: 10%;
            ul {
                list-style: none;
                font-size: 1.5vw;
                font-weight: 600;
                .footer-menu {
                    margin-top: 10%;
                    &.grey {
                        opacity: 0.3;
                        pointer-events: none;
                    }
                }
            }
        }
    }
    .copyright {
        text-align: center;
        margin: 2%;
        font-size: 1.3vw;
        font-weight: 500;
    }
}
</style>
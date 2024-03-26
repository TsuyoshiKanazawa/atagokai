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
                <a href="https://www.town.okinoshima.shimane.jp/www/index.html" target="_blank">
                    <img src="/img/footer-banner1.jpg" alt="banner" class="banner">
                </a>
            </div>
            <div class="right">
                <ul>
                    <li class="footer-menu"><div @click="routeEnter('')" class="menu-link">TOP</div></li>
                    <li class="footer-menu"><div @click="routeEnter('news')" class="menu-link">お知らせ</div></li>
                    <li class="footer-menu"><div @click="routeEnter('about')" class="menu-link">法人概要</div></li>
                    <li class="footer-menu"><div @click="routeEnter('service')" class="menu-link">施設・サービス一覧</div></li>
                    <li class="footer-menu"><div @click="routeEnter('')" class="menu-link">採用情報</div></li>
                    <li class="footer-menu"><div @click="routeEnter('privacy')" class="menu-link">個人情報保護方針</div></li>
                </ul>
            </div>
        </div>
        <div class="copyright">© 2024 Social welfare corporation ATAGOKAI all rights reserved.</div>
    </footer>
</template>

<script>
export default {
    methods: {
        routeEnter(link) {
            this.$router.push(`/${link}`)
        }
    },
}
</script>

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
                .menu-link {
                    position: relative;
                    cursor: pointer;
                    width: fit-content;
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
                    transform-origin: left top;
                    transition: transform 0.3s;
                }
                &:hover {
                    .menu-link::after {
                        transform: scale(1, 1);
                    }
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
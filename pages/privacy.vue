<template>
    <div class="privacy">
        <div class="privacy-top">
            <img src="/img/privacy-top.png" alt="background" class="privacy-top-image">
            <div class="privacy-top-title">個人情報保護方針</div>
        </div>
        <div class="privacy-content">
            <div class="title">基本方針</div>
            <hr>
            <div class="section">
                愛宕会は、個人情報が個人の人権尊重の理念のもとに慎重に取り扱われるべきものであることから<br>
                その適切な取り扱いに努めるます。<br>
                信頼ある法人であるために、自主的なルール及び体制を確立し、個人情報に関連する法令<br>
                その他関係法令 及び厚生労働省のガイドラインを遵守し、個人情報の保護を図ります。
            </div>
            <div class="section">
                <h1>1.個人情報の適切な取得、管理、利用、開示、委託</h1>
                <div>
                    ①個人情報の取得にあたり、利用目的を明示した上で、必要な範囲の情報を取得し、<br>
                    利用目的を通知または公表し、その範囲内で利用します。<br>
                    ②個人情報の取得・利用・第三者提供にあたり、本人の同意を得ることとします。<br>
                    ③法人が委託をする医療・介護関係事業者は、業務の委託にあたり、個人情報保護法と<br>
                    厚生労働省ガイドラインの趣旨を理解し、それに沿った対応を行う事業者を選定し、<br>
                    かつ個人情報に係る契約を締結した上で情報提供し、委託先への適切な監督をします。
                </div>
            </div>
            <div class="section">
                <h1>2.個人情報の安全性確保の措置</h1>
                <div>
                    ①法人は、個人情報保護の取り組みを全役職員等に周知徹底させるために、<br>
                    個人情報に関する規則類を整備し、必要な教育を継続的に行います。<br>
                    ②個人情報への不正アクセス、個人情報の漏えい、滅失、またはき損の予防及び是正のため、<br>
                    法人内において規則類を整備し、安全対策に努めます。
                </div>
            </div>
            <div class="section">
                <h1>3.個人情報の開示・訂正・更新・利用停止・削除、<br class="sp-only">第三者提供の停止等への対応</h1>
                <div>
                    法人は、本人が自己の個人情報について、開示・訂正・更新・利用停止・削除、第三者提供の<br>
                    停止等の申し出がある場合には、速やかに対応します。
                </div>
            </div>
            <div class="personal-leader">
                個人情報統括責任者<br>
                事務局長<br>
                長田　榮<br>
                電話 0851-5-3811
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.privacy-top {
    position: relative;
    @media screen and (max-width: 900px) {
        padding-top: 13vw;
    }
    .privacy-top-image {
        width: 100%;
    }
    .privacy-top-title {
        position: absolute;
        top: 40%;
        left: 10%;
        color: white;
        font-size: 4.5vw;
        font-weight: 500;
        @media screen and (max-width: 900px) {
            top: 55%;
        }
    }
}
.privacy-content {
    width: 54vw;
    margin: auto;
    margin-top: -3%;
    @media screen and (max-width: 900px) {
        width: 90vw;
    }
    .title {
        font-size: 1.5vw;
        font-weight: 600;
        @media screen and (max-width: 900px) {
            font-size: 4vw;
            font-weight: 700;
        }
    }
    .section {
        margin-bottom: 5%;
        font-weight: 600;
        font-size: 1vw;
        line-height: 1.7;
        @media screen and (max-width: 900px) {
            font-size: 2vw;
            font-weight: 700;
        }
        h1 {
            font-size: 1.5vw;
            @media screen and (max-width: 900px) {
                font-size: 2.8vw;
            }
        }
    }
    .personal-leader {
        font-size: 1.3vw;
        font-weight: 600;
        line-height: 1.7;
        @media screen and (max-width: 900px) {
            font-size: 2.8vw;
            font-weight: 700;
        }
    }
}
</style>
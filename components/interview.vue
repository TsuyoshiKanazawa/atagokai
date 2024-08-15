<template>
    <div class="interview">
        <div class="select">
            <div class="title">
                職員インタビュー
            </div>
            <div class="select-button-container">
                <div class="select-button" :class="{ 'active': int1 }" @click="daySelect('int1')">
                    <img src="/img/int1-pic.png" alt="background" class="int-pic">
                    <div class="comment">「介護福祉士の資格取得を目指しています！」</div>
                    <div class="name">#01 平田沙来<span>（介護員）</span></div>
                </div>
                <div class="select-button" :class="{ 'active': int2 }" @click="daySelect('int2')">
                    <img src="/img/int2-pic.png" alt="background" class="int-pic">
                    <div class="comment">「介護福祉士の資格取得を目指しています！」</div>
                    <div class="name">#02 是津美弥子<span>（介護員）</span></div>
                </div>
                <div class="select-button" :class="{ 'active': int3 }" @click="daySelect('int3')">
                    <img src="/img/int3-pic.png" alt="background" class="int-pic">
                    <div class="comment">「介護福祉士の資格取得を目指しています！」</div>
                    <div class="name">#03 笠木孝明<span>（介護員）</span></div>
                </div>
            </div>
        </div>
        <div v-if="int1" class="int-container">
            <div class="section">
                <div class="title">
                    これまでのキャリア
                </div>
                <div class="content">
                    <div class="text left">
                        同級生の８割が島外に出る中、隠岐から出るとこに興味がなく、隠岐水産高校で実習などを経験し、水産業の楽しさを知るも、お母さんが介護職だったことから高校生の時に介護職に興味を持ち、愛宕会の職場見学の際に、介護職の雰囲気、利用者への対応の良さに魅力感じ入社。
                    </div>
                    <img src="/img/int1-cont1.jpg" alt="background" class="int-cont1">
                </div>
            </div>
            <div class="section">
                <div class="title">
                    隠岐の生活・魅力
                </div>
                <div class="content">
                    <div class="text">
                        隠岐の魅力は隠岐の景色を楽しみながら、好きな音楽が楽しめることですね。<br>
                        その中で特に好きな場所は、通った小学校です。<br>
                        今でも小学校の同級生とはよく遊ぶので、思い出もたくさんあります。
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="title">
                    今後の目標
                </div>
                <div class="content">
                    <img src="/img/int1-cont2.jpg" alt="background" class="int-cont2">
                    <div class="text">
                        食事や入浴排泄の介助を行う中、利用者によって対応が違いを覚えることが大変ですが、3年目になると資格が取れるので、介護福祉士の資格の取得を目指して日々勉強中です。
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="title">
                    愛宕会の仕事を検討している人に向けて
                </div>
                <div class="content">
                    <div class="text">
                        介護職は3K（きつい・きたない・きけん）と言われているから、興味をもつ人が少ないけど、なってみて介護職でした体験できない喜びや楽しみがあるので、見学からでも良いので、介護職に興味をもってもらえたら嬉しい。
                    </div>
                    <img src="/img/int1-cont3.jpg" alt="background" class="int-cont3">
                </div>
            </div>
        </div>
        <div v-if="int2" class="int-container">
            <div class="section">
                <div class="title">
                    これまでのキャリア
                </div>
                <div class="content">
                    <div class="text left">
                        高校卒業後新卒で入社しました。介護職を目指した理由は、おじいちゃんおばあちゃんと同居しており、お年寄りの方と一緒にいる時間が好きだったので、高校生の時に介護職を目指しホームヘルパーの資格を受講しました。<br>
                        入社してからの業務内容は、主に食事や入浴排泄の介助をしています。
                    </div>
                    <img src="/img/int2-cont1.jpg" alt="background" class="int-cont1">
                </div>
            </div>
            <div class="section">
                <div class="title">
                    愛宕会の魅力
                </div>
                <div class="content">
                    <div class="text">
                        本人の希望にそって、思い出の場所に連れて行ってあげたり、自宅に連れて行ってあげたり、また家族さんに来ていただいたり、家族さんや地域との連絡、連携を密にとって、利用者さん本人がやりたいことを率先してやれることができるのが、愛宕会の魅力だと思います。<br>
                        そんな法人だからこそ、担当の職員がいろいろなことを計画して行事の中に組み込んだり、家に帰って一緒に楽しみをみつけてあげたりできることも魅力です。
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="title">
                    仕事で心がけていること
                </div>
                <div class="content">
                    <img src="/img/int2-cont2.jpg" alt="background" class="int-cont2">
                    <div class="text">
                        利用者さんが思うことに対して一緒に考えて実現できるように向かうことを１番大切に心がけています。自分の意見ではなく、利用者さんの意見を尊重することで、意見や思いを成し遂げれるように可能な限りサポートしていきたいと思っています。<br>
                        一緒に笑って話をする時間があったり、あとで自分がしたことが「利用者さんが喜んでいた」と他の人から聞いたりすることが、感謝されている実感が沸いたり自分自身の自信にもなるそんなことが仕事をやっていてよかったと思う。
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="title">
                    隠岐の生活・魅力
                </div>
                <div class="content">
                    <div class="text">
                        見ての通り隠岐は島なので、山・海と自然がたくさんあります。また美味しい食べ物もたくさんあります。季節によって、海遊びなどのレジャーも満喫できます！まあ冬はあまりないですが（笑）<br>
                        住んで言えることは一年通して、気候も穏やかで過ごしやすく、島ですけど不便を感じることは少なく衣・食・住に困ることはないですね（笑）<br>
                        たまに船で本土へ遊びに行くことも楽しみの一つです！
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="title">
                    今後の目標
                </div>
                <div class="content">
                    <div class="text">
                        まだまだ未熟なので、今は知識や法律なども詳しくなく、資格などは難しいと思いますが、今後はより詳しくなったら、ケアマネージャーだったりや現場のためになるような働き方ができるようにチャレンジしていきたいと思います。小さい法人ではありますが自分の意見が言いやすい、仕事をしやすいようなアットホームで優しい職場だと思います。優しい上司や同僚がいるので、若い人でも初心者でも、介護に自信がなくても協力してくれる人がたくさんいるのでチャレンジして働くことができます。
                    </div>
                    <img src="/img/int2-cont3.jpg" alt="background" class="int-cont3">
                </div>
            </div>
        </div>
        <div v-if="int3" class="int-container">
            <div class="section">
                <div class="title">
                    これまでのキャリア
                </div>
                <div class="content">
                    <div class="text left">
                        おばあさんが介護を受けるようになった際に、介護の仕事を知り、高校卒業後に専門学校へ入学し、松江市の施設で働き始めたのがキャリアのスタートです。
                        職場での出会いがあり、結婚をきっかけに隠岐に戻り愛宕会で勤め始めました。
                        業務内容は主に、介護主任という役割で、昼夜問わず業務の対応や、職員への指導などをおこなっています。<br>
                        仕事の魅力大変なところ人によって思うようにならないことの違いはあれど、その際つい、こちらが「こうしてくれたら」と思いをもつことはあるが、それは利用者さんにとっては関係ないことなので、意思疎通ができ、利用者さんの状況にとって最適な行動をすることですかね。
                    </div>
                    <img src="/img/int3-cont1.jpg" alt="background" class="int-cont1">
                </div>
            </div>
            <div class="section">
                <div class="title">
                    介護の仕事の魅力・職場の魅力
                </div>
                <div class="content">
                    <div class="text">
                        介護離れの要因３Kが払拭できず介護離れが話題になってありますが、実際に働いてみると利用者さんと同じ目線で接しているところや、あたりまえのことではあるけども、ありがとうとかの何気ない一言をもらえることが介護の魅力だと思います。<br>
                        また顔見知りは多く、それは、他の施設では感じることできないこの施設の魅力の一つですね。<br>
                        仕事をしている上で一定の線引きをしなければいけないが、必要なものなど情報収集する上で馴染みがあることでより丁寧なサービスができるようになった。<br>
                        ただし、あまり馴れ馴れしくならないように気をつけている。
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="title">
                    仕事で心がけていること
                </div>
                <div class="content">
                    <img src="/img/int3-cont2.jpg" alt="background" class="int-cont2">
                    <div class="text">
                        利用者さんが思うことに対して一緒に考えて実現できるように向かうことを１番大切に心がけています自分の意見ではなく、利用者さんの意見を尊重することで、意見や思いを成し遂げれるように可能な限りサポートしていきたいと思っています。<br>
                        仕事をしていなかで、一緒に笑って話をする時間があったり、あとで自分がしたことが「利用者さんが喜んでいた」と他の人から聞いたりすることが、感謝されている実感が沸いたり自分自身の自信にもなります。
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="title">
                    愛宕会へ働く方へ
                </div>
                <div class="content">
                    <div class="text">
                        職場環境はとてもよい環境だと思っています。時には職員同士で言い合うこともありますが、それは施設をよくするために意見を言い合っているためですので、もっともっと意見を言い合い意見交換をしながら、もっともっといい施設にしていきたいと思います。<br>
                        私は介護をやってみようと思うきっかけはありましたが、みなさんがそのような体験やきっかけがあるわけではないと思います。そんななか私たちは中学生や高校生へ介護体験などを行ってます。そこで経験してもらった感想をみると、体験によってたくさんの気づきを感じていただけると思います。<br>
                        まずは、一回経験や話をするだけでもなごみ苑にきていただけたらと思います。<br>
                        きっと、介護の仕事に魅力を感じてもらえると思います。
                    </div>
                    <img src="/img/int3-cont3.jpg" alt="background" class="int-cont3">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { nextTick } from 'vue';
gsap.registerPlugin(ScrollTrigger);

export default {
    data() {
        return {
            int1: true,
            int2: false,
            int3: false,
        }
    },
    methods: {
        daySelect(time) {
            if (time === "int1") {
                this.int1 = true
                this.int2 = false
                this.int3 = false
            }
            if (time === "int2") {
                this.int1 = false
                this.int2 = true
                this.int3 = false
            }
            if (time === "int3") {
                this.int1 = false
                this.int2 = false
                this.int3 = true
            }
        }
    },
    mounted() {
        nextTick(() => {
            ScrollTrigger.refresh(true);
            setTimeout(() => {
                gsap.from(".interview", {
                    scrollTrigger: {
                        trigger: ".interview",
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                    opacity: 0,
                    duration: 0.5,
                    y: 50
                });
            }, 300);

        });
    },
}
</script>

<style lang="scss" scoped>
.select {
    font-weight: 700;
    .title {
        text-align: center;
        font-size: 2vw;
        margin-bottom: 2%;
        @media screen and (max-width: 900px) {
            font-size: 3.5vw;
        }
    }
    .select-button-container {
        display: flex;
        justify-content: center;
        gap: 2%;
        .select-button {
            width: 15vw;
            padding: 1%;
            border-radius: 5%;
            box-sizing: border-box;
            box-shadow: -2px -2px 5px 2px rgba(0, 0, 0, 0.1), 2px 2px 5px 2px rgba(0, 0, 0, 0.1);
            opacity: 0.3;
            transition: 0.2s;
            cursor: pointer;
            @media screen and (max-width: 900px) {
                width: 28vw;
                padding: 3%;
            }
            .int-pic {
                width: 12vw;
                display: block;
                margin: auto;
                pointer-events: none;
                @media screen and (max-width: 900px) {
                    width: 20vw;
                }
            }
            .comment {
                font-size: 1vw;
                width: 95%;
                margin: auto;
                margin-top: 4%;
                padding-bottom: 2%;
                border-bottom: 5px dotted $green;
                @media screen and (max-width: 900px) {
                    font-size: 1.8vw;
                    border-bottom: 2px dotted $green;
                }
            }
            .name {
                font-size: 1vw;
                text-align: center;
                margin: 5% 0 6%;
                @media screen and (max-width: 900px) {
                    font-size: 2vw;
                    margin: 5% 0 0;
                    span {
                        font-size: 1.5vw;
                    }
                }
            }
            &.active {
                opacity: 1;
            }
            &:hover {
                opacity: 1;
            }
        }
    }
}
.int-container {
    width: 49vw;
    margin: auto;
    margin-top: 4%;
    @media screen and (max-width: 900px) {
        width: 87vw;
    }
    .section {
        font-weight: 700;
        .title {
            font-size: 1.5vw;
            padding-bottom: 1%;
            border-bottom: 8px dotted $green;
            margin-bottom: 2%;
            @media screen and (max-width: 900px) {
                font-size: 3vw;
                border-bottom: 3px dotted $green;
            }
        }
        .content {
            font-size: 1.1vw;
            padding: 1% 0;
            display: flex;
            gap: 2%;
            line-height: 1.8;
            @media screen and (max-width: 900px) {
                font-size: 1.9vw;
            }
            .int-cont1 {
                width: 40%;
                height: 100%;
            }
            .int-cont2 {
                width: 40%;
                height: 100%;
            }
            .int-cont3 {
                width: 40%;
                height: 100%;
            }
        }
    }
}
</style>
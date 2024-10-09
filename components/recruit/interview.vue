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
                    <div class="comment">「笑顔あふれるアットホームな職場です」</div>
                    <div class="name">#02 是津美弥子<span>（介護員）</span></div>
                </div>
                <div class="select-button" :class="{ 'active': int3 }" @click="daySelect('int3')">
                    <img src="/img/int3-pic.png" alt="background" class="int-pic">
                    <div class="comment">「相手を思い最善の行動を心がけています」</div>
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
                        同級生のほとんどが島外に出ることを考えていましたが、わたしは隠岐の生活に魅力を感じていたので隠岐で仕事をすると決めていました。<br>
                        お母さんが介護職だったので高校生の時に介護職に興味を持ったのをきっかけに、愛宕会の職場見学に行ってみました。その時の職場の雰囲気、利用者の方への対応の良さに魅力を感じ入社しました。
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
                        わたしの趣味は、隠岐ならではの景色を楽しみながら好きな音楽を聴くことです。<br>
                        その中で特に好きな場所は、自分が通った小学校です。<br>
                        今でも小学校の同級生とよく遊ぶので、思い出もたくさんあります。
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
                        食事や入浴排泄の介助を行う中、利用者によって対応が異なるので覚えることが多く大変ですが、勤務して3年目になると資格が取れるので、介護福祉士の資格取得を目指して日々勉強中です。
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="title">
                    愛宕会の仕事を検討している人に向けて
                </div>
                <div class="content">
                    <div class="text">
                        介護職は3K（きつい・きたない・きけん）と言われているから、興味をもつ人が少ないけど、仕事をしてみて介護職でしかできない体験や喜びや楽しみがあるので、まずは私のように見学からでも良いので、介護職に興味をもってもらえたら嬉しいです。
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
                        高校卒業後新卒で入社しました。<br>
                        介護の仕事を目指した理由は、おじいちゃんおばあちゃんと同居していて一緒にいる時間が好きだったからですね。<br>
                        高校生の時に介護職を目指しホームヘルパーの資格を受講して、愛宕会に入社しました。入社してからの業務内容は、主に食事や入浴排泄の介助をしています。
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
                        利用者の方の希望に沿って、思い出の場所に連れて行ってあげたり、自宅に連れて行ってあげたり、やりたいことを率先してやれることができるのが、愛宕会の魅力だと思います。<br>
                        また、ご家族の方にも来ていただく機会をつくったり、地域との連携を密にとっています。<br>
                        そんな法人だからこそ担当の職員が、いろいろなことを計画して行事の中に組み込んだり、家に帰って一緒に楽しみを見つけてあげたりできることが魅力です。
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
                        利用者の方が思うことを、一緒に考えて実現できるお手伝いを心がけています。<br>
                        自分の意見ではなく、利用者の方の意見を尊重することで、意見や思いを成し遂げれるように可能な限りサポートしていきたいと思っています。<br>
                        介護を行う中で一緒に笑って話をする時間や、「〇〇さんが喜んでいたよ！」と、他の職員さんから聞いたりすることで、感謝されている実感が湧いたり、自分の自信にも繋がりますね。<br>
                        そんな時に、介護の仕事をやっていてよかったなと感じます。
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="title">
                    隠岐の生活・魅力
                </div>
                <div class="content">
                    <div class="text">
                        見ての通り隠岐は島なので、自然がたくさんあり、美味しい食べ物もたくさんあります。<br>
                        住んで言えることは一年通して、気候も穏やかでとても過ごしやすいです。<br>
                        島ですけど不便を感じることはなく、困ることはないですね。<br>
                        たまに船で本土へ遊びに行くことが楽しみの一つです。
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="title">
                    今後の目標
                </div>
                <div class="content">
                    <div class="text">
                        愛宕会は小さい法人ではありますが自分の意見が言いやすい、アットホームな優しい職場だと思います。<br>
                        介護に自信がなくても協力してくれる優しい上司や同僚がたくさんいるので、自分のペースでチャレンジして働くことができます。<br>
                        これからはケアマネージャーや職場のためになるような働き方ができるように、資格取得にもチャレンジしていきたいと思います。
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
                        学生の時におばあさんが介護を受けるようになり介護の仕事を知りました。<br>
                        高校卒業後に専門学校へ入学し、結婚をきっかけに隠岐に戻り愛宕会で勤め始めました。<br>
                        業務内容は主に、介護主任という役割で、昼夜問わず業務の対応や、職員への指導などをおこなっています。
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
                        介護離れの要因「３K（きつい・きたない・きけん）」が話題になっていますが、働いてみると利用者の方と同じ目線で接しているところや、あたりまえのことではあるけども「ありがとう」とかの何気ない感謝の言葉が介護の魅力だと思います。<br>
                        また愛宕会では顔見知りが多くアットホームな雰囲気は、他の施設では感じることできないこの施設の魅力の一つですね。<br>
                        仕事をする上で一定の線引きをしなければいけないが、馴染みがあることでより丁寧なサービスができるようになりました。ただし、あまり馴れ馴れしくならないように気をつけています。
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
                        仕事をする上では思うようにならないこともあり、その際つい「こうしてくれたら」と思いをもつことはもありますが、それは相手にとっては関係ないことなので、意思疎通ができ、職員さんや利用者の方の状況にとって最適な行動をすることを心がけています。
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="title">
                    愛宕会で働く方へ
                </div>
                <div class="content">
                    <div class="text">
                        職場環境はとてもよい環境だと思っています。時には職員同士で言い合うこともありますが、それは施設をよくするために意見を言い合っているためなので、もっともっと意見を言い合い意見交換をしながら、これからもっといい施設にしていきたいと思います。<br>
                        わたしは、介護をやってみようと思うきっかけはありましたが、全ての方がそのような体験やきっかけがあるわけではないと思います。中学生や高校生へ介護体験を行う中で、経験してもらった感想をみると、体験によってたくさんの気づきを感じていただけると思います。<br>
                        まずは、一回経験や話をするだけでもなごみ苑にきていただけたらと思います。
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
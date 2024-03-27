<template>
    <div>
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
                        ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダ
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
                        ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミ
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
                        ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミ
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="title">
                    今後の目標
                </div>
                <div class="content">
                    <div class="text">
                        ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダ
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
                        ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダ
                    </div>
                    <img src="/img/int2-cont1.jpg" alt="background" class="int-cont1">
                </div>
            </div>
            <div class="section">
                <div class="title">
                    隠岐の生活・魅力
                </div>
                <div class="content">
                    <div class="text">
                        ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミ
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="title">
                    今後の目標
                </div>
                <div class="content">
                    <img src="/img/int2-cont2.jpg" alt="background" class="int-cont2">
                    <div class="text">
                        ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミ
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="title">
                    今後の目標
                </div>
                <div class="content">
                    <div class="text">
                        ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダ
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
                        ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダ
                    </div>
                    <img src="/img/int3-cont1.jpg" alt="background" class="int-cont1">
                </div>
            </div>
            <div class="section">
                <div class="title">
                    隠岐の生活・魅力
                </div>
                <div class="content">
                    <div class="text">
                        ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミ
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="title">
                    今後の目標
                </div>
                <div class="content">
                    <img src="/img/int3-cont2.jpg" alt="background" class="int-cont2">
                    <div class="text">
                        ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミ
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="title">
                    今後の目標
                </div>
                <div class="content">
                    <div class="text">
                        ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダ
                    </div>
                    <img src="/img/int3-cont3.jpg" alt="background" class="int-cont3">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
    }
}
</script>

<style lang="scss" scoped>
.select {
    font-weight: 700;
    .title {
        text-align: center;
        font-size: 2vw;
        margin-bottom: 2%;
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
            .int-pic {
                width: 12vw;
                display: block;
                margin: auto;
                pointer-events: none;
            }
            .comment {
                font-size: 1vw;
                width: 95%;
                margin: auto;
                margin-top: 4%;
                padding-bottom: 2%;
                border-bottom: 5px dotted $green;
            }
            .name {
                font-size: 1vw;
                text-align: center;
                margin: 5% 0 6%;
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
    .section {
        font-weight: 700;
        .title {
            font-size: 1.5vw;
            padding-bottom: 1%;
            border-bottom: 8px dotted $green;
            margin-bottom: 2%;
        }
        .content {
            font-size: 1.1vw;
            padding: 1% 0;
            display: flex;
            gap: 2%;
            line-height: 1.8;
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
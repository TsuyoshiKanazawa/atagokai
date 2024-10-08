<template>
    <div class="day">
        <div class="select">
            <div class="title">
                職員の１日
            </div>
            <div class="selece-button-container">
                <div class="selece-button" :class="{ 'active': early }" @click="daySelect('early')">なごみ苑</div>
                <div class="selece-button" :class="{ 'active': noon }" @click="daySelect('noon')">清松園</div>
            </div>
        </div>
        <div v-if="early" class="day-container">
            <div class="time">AM 8:40</div>
            <div class="action">
                透析送迎
            </div>
            <div class="time">AM 9:30</div>
            <div class="action">
                朝の申し送り<br>
                受診者送迎<br>
                排泄介助<br>
                コール対応
            </div>
            <div class="time">AM 10:00</div>
            <div class="action">
                バイタルチェック
            </div>
            <div class="time">AM 11:00</div>
            <div class="action">
                利用者連れ出し
            </div>
            <div class="time">AM 11:30</div>
            <div class="action">
                昼食
            </div>
            <div class="time">PM 12:00</div>
            <div class="action">
                胃ろう対応
            </div>
            <div class="time">PM 13:30</div>
            <div class="action">
                職員休憩
            </div>
            <div class="time">PM 14:30</div>
            <div class="action">
                利用者連れ出し<br>
                昼間食
            </div>
            <div class="time">PM 13:30</div>
            <div class="action">
                レク・体操
            </div>
        </div>
        <div v-if="noon" class="day-container">
            <div class="time">AM 10:00</div>
            <div class="action">
                朝の体操
            </div>
            <div class="time">AM 10:30</div>
            <div class="action">
                利用者連れ出し
            </div>
            <div class="time">AM 11:30</div>
            <div class="action">
                昼食
            </div>
            <div class="time">PM 13:30</div>
            <div class="action">
                職員休憩
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
    data () {
        return {
            early: true,
            noon: false,
            slow: false,
            night: false
        }
    },
    methods: {
        daySelect(time) {
            if (time === "early") {
                this.early = true
                this.noon = false
                this.slow = false
                this.night = false
            }
            if (time === "noon") {
                this.early = false
                this.noon = true
                this.slow = false
                this.night = false
            }
            if (time === "slow") {
                this.early = false
                this.noon = false
                this.slow = true
                this.night = false
            }
            if (time === "night") {
                this.early = false
                this.noon = false
                this.slow = false
                this.night = true
            }
        }
    },
    mounted () {
        nextTick(() => {
            ScrollTrigger.refresh(true);
            setTimeout(() => {
                gsap.from(".day", {
                    scrollTrigger: {
                        trigger: ".day",
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
    display: flex;
    justify-content: center;
    gap: 2%;
    font-size: 2vw;
    margin-top: 8%;
    font-weight: 700;
    @media screen and (max-width: 900px) {
        font-size: 4vw;
        margin-top: 13%;
    }
    .selece-button-container {
        display: flex;
        gap: 5%;
        width: 40vw;
        @media screen and (max-width: 900px) {
            width: 60vw;
        }
        .selece-button {
            width: 10vw;
            text-align: center;
            border: 2px solid $green;
            border-radius: 15px;
            cursor: pointer;
            transition: 0.2s;
            @media screen and (max-width: 900px) {
                width: 20vw;
                border-radius: 10px;
            }
            &.active {
                background-color: $green;
                color: white;
            }
            &:hover {
                background-color: $green;
                color: white;
            }
        }
    }
}
.day-container {
    width: 20vw;
    margin: auto;
    margin-top: 1%;
    border-left: 4px solid $green;
    padding: 2% 0 2% 2%;
    font-weight: 700;
    @media screen and (max-width: 900px) {
        width: 40vw;
        padding: 2% 0 2% 3%;
        margin-left: 37%;
    }
    .time {
        font-size: 1.5vw;
        width: 60%;
        border-bottom: 4px dotted $green;
        position: relative;
        @media screen and (max-width: 900px) {
            font-size: 3.5vw;
            width: 70%;
            border-bottom: 2px dotted $green;
        }
        &::after {
            content: "";
            background-color: $green;
            width: 2vw;
            height: 2vw;
            border-radius: 50%;
            position: absolute;
            top: 0;
            left: -26%;
            @media screen and (max-width: 900px) {
                width: 3.5vw;
                height: 3.5vw;
                top: 15%;
                left: -19%;
            }
        }
    }
    .action {
        padding: 5%;
        line-height: 2;
        font-size: 1.3vw;
        width: 60%;
        @media screen and (max-width: 900px) {
            font-size: 2.3vw;
        }
    }
}
</style>
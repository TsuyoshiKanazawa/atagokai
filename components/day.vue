<template>
    <div class="day">
        <div class="select">
            <div class="title">
                職員の１日
            </div>
            <div class="selece-button-container">
                <div class="selece-button" :class="{ 'active': early }" @click="daySelect('early')">早番</div>
                <div class="selece-button" :class="{ 'active': noon }" @click="daySelect('noon')">日勤</div>
                <div class="selece-button" :class="{ 'active': slow }" @click="daySelect('slow')">遅番</div>
                <div class="selece-button" :class="{ 'active': night }" @click="daySelect('night')">夜勤</div>
            </div>
        </div>
        <div v-if="early" class="day-container">
            <div class="time">AM 7:00　始業</div>
            <div class="action">
                朝食介助<br>
                排泄介助<br>
                朝のミーティング<br>
                入浴介助
            </div>
            <div class="time">AM 11:00　休憩</div>
            <div class="action">
                昼食介助<br>
                排泄介助<br>
                コール対応<br>
                入退所業務<br>
                記録・退勤
            </div>
            <div class="time">PM 16:00　終業</div>
        </div>
        <div v-if="noon" class="day-container">
            <div class="time">AM 9:00　始業</div>
            <div class="action">
                朝食介助<br>
                排泄介助<br>
                朝のミーティング<br>
                入浴介助
            </div>
            <div class="time">PM 12:00　休憩</div>
            <div class="action">
                昼食介助<br>
                排泄介助<br>
                コール対応<br>
                入退所業務<br>
                記録・退勤
            </div>
            <div class="time">PM 18:00　終業</div>
        </div>
        <div v-if="slow" class="day-container">
            <div class="time">PM 12:00　始業</div>
            <div class="action">
                朝食介助<br>
                排泄介助<br>
                朝のミーティング<br>
                入浴介助
            </div>
            <div class="time">PM 15:00　休憩</div>
            <div class="action">
                昼食介助<br>
                排泄介助<br>
                コール対応<br>
                入退所業務<br>
                記録・退勤
            </div>
            <div class="time">PM 20:00　終業</div>
        </div>
        <div v-if="night" class="day-container">
            <div class="time">PM 17:00　始業</div>
            <div class="action">
                朝食介助<br>
                排泄介助<br>
                朝のミーティング<br>
                入浴介助
            </div>
            <div class="time">PM 22:00　休憩</div>
            <div class="action">
                昼食介助<br>
                排泄介助<br>
                コール対応<br>
                入退所業務<br>
                記録・退勤
            </div>
            <div class="time">AM 9:00　終業</div>
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
            width: 6vw;
            text-align: center;
            border: 2px solid $green;
            border-radius: 15px;
            cursor: pointer;
            transition: 0.2s;
            @media screen and (max-width: 900px) {
                width: 12vw;
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
        width: auto;
        @media screen and (max-width: 900px) {
            font-size: 2.3vw;
        }
    }
}
</style>
<template>
    <div class="top-fv">
        <div class="image-container" ref="imageContainer">
            <img src="/img/fvImage1.jpg" alt="fvimage" class="fvImage">
            <img src="/img/fvImage2.jpg" alt="fvimage" class="fvImage">
            <img src="/img/fvImage3.jpg" alt="fvimage" class="fvImage">
            <img src="/img/fvImage1.jpg" alt="fvimage" class="fvImage">
            <img src="/img/fvImage2.jpg" alt="fvimage" class="fvImage">
            <img src="/img/fvImage3.jpg" alt="fvimage" class="fvImage">
        </div>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.top-fv {
    width: 100%;
    height: 40vw;
    overflow: hidden;

    .image-container {
        display: flex;
    }

    .fvImage {
        width: 30%;
    }
}
</style>

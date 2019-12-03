<template>
    <div class="toast" v-show="toastShow">
        {{toastText}}
    </div>
</template>

<script>

    export default {
        data() {
            return {
                toastShow: false,
                toastText: ''
            }
        },
        methods: {
            showToast (str) {
                let v = this
                v.toastText = str
                v.toastShow = true
                // setTimeout(function(){
                // v.toastShow = false
                // }, 100)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .toast {
        position: fixed;
        z-index: 2000;
        left: 50%;
        top:45%;
        transition:all .5s;
        -webkit-transform: translateX(-50%) translateY(-50%);
            -moz-transform: translateX(-50%) translateY(-50%);
            -ms-transform: translateX(-50%) translateY(-50%);
                -o-transform: translateX(-50%) translateY(-50%);
                transform: translateX(-50%) translateY(-50%);
        text-align: center;
        border-radius: .1rem;
        color:#FFF;
        background: rgba(17, 17, 17, 0.7);
        padding: .15rem ;
        max-width: 1.4rem;
        font-size: .16rem
    }
</style>
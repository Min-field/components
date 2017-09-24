<template>
    <div class = "container">
        <ul class = "carousel" :style="carouselStyle">
            <li v-for="img in imgs">
                <img :src="img" alt="">
            </li>
        </ul>

        <div class = "to-left"></div>
        <div class = "to-right"></div>

        <ul class = "index-controler">
            <li v-for="(idx, value) in imgs" :class="{'current-index': index === idx}"
                @click="selectIndex(idx)">
                {{idx}}
            </li>
        </ul>

    </div>
</template>

<script>
    export default{
        data(){
            return{
                index: 0,
                imgs: [
                    '../../../assert/gakki/2.jpg',
                    '../../../assert/gakki/3.jpg',
                    '../../../assert/gakki/5.jpg',
                    '../../../assert/gakki/7.jpg',
                    '../../../assert/gakki/2.jpg'
                ],
                flag: 0,
                timer: null
            }
        },
        computed: {
            carouselStyle(){
                let transition = "0.6s ease";
                if(this.index === 0)
                    transition = '';
                return {
                    transition: transition,
                    transform: `translateX(${ (this.index) * -800 }px)`
                   // transform: 'translateX(100px)'
                }
            }
        },
        methods: {
            start(){
                this.timer = setInterval(() => { 
                    if(this.index ===  this.imgs.length - 1){
                        this.index = 0; 
                    } else {
                        this.index ++; 
                    }
                    console.log(this.index);
                }, 1000);
            },
            stop(){
                clearInterval(this.timer);
            },
            selectIndex(index){
                this.stop();
                this.index = index; 
                setTimeout(_ => {
                    this.start(); 
                }, 1000);
            }
        },
        mounted(){
            this.start()
        }
    }
</script>

<style lang = "scss">
    .container{
        width: 800px;  
        height: 500px;
        overflow: hidden;
        position: absolute;
        left: 0; 
        right: 0;  
        top: 0; 
        bottom: 0; 
        margin: auto;
        .carousel{
            height: 500px;
            width: 4000px;
            padding: 0; 
            list-style-type: none;
            /* transition: 0.6s;  */
            li{
                width: 800px;
                height: 500px; 
                display: inline-block; 
                img{
                    width: 100%; 
                    height: 100%;
                    max-width: 100%; 
                }
            }
        } 
    }
</style>    

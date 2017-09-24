<template>
    <div class = "container">
        <div class = "center center1"></div>
    </div>
</template>

<<script>
    export default {
        name: 'center'
    }
</script>

<style lang = "scss">
    .container{
        width: 800px; 
        /* height: 600px; */
        border: 1px solid #cee;
        position: relative;
        margin: 30px auto; 
        .center{
            background: #ccf;
            width: 50px; 
            height: 50px;
            resize: both; 
        }
        .center1{
            position: absolute;
            margin: auto; 
            left: 0; 
            right: 0; 
            top: 0; 
            bottom: 0; 
        }
    }
</style>

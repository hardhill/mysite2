<template>
    <div class="container" id="canv">

    </div>
</template>

<script>

    export default {
        name: "P5_01",
        mounted(){
            const script = function (p5){
                p5.setup = function(){
                    var ctx = p5.createCanvas(600,400)
                    ctx.parent('canv')

                }
                p5.draw = function(){
                    p5.background(170)
                    p5.ellipse(p5.width / 2, p5.height / 2, 50, 50);
                }

            }
            const P5 = require('p5')
            new P5(script)
        }
    }
</script>

<style scoped>
.container{
    display: flex;
    width: 100%;
    height: 100vh;
}
</style>
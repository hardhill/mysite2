<template>
    <div class="container"><div class="fragment" id="frag"></div></div>
</template>

<script>
    import * as Matter from 'matter-js'
    export default {
        name: "Matterjs01",
        methods:{
            MainPart:function(){
                var Engine = Matter.Engine,
                    Render = Matter.Render,
                    World = Matter.World,
                    Bodies = Matter.Bodies;
                var engine = Engine.create();
                var render = Render.create({
                    element: document.getElementById("frag"),
                    engine: engine,
                    options: {
                        background:'#e7e2e2',
                        width: 800,
                        wireframes: false
                    }
                });
                var optA = {
                    mass:6,
                    rotate: 25,
                    render: {
                        fillStyle: '#f1de2b',
                        strokeStyle: '#a52222',
                        lineWidth: 4
                    }
                }
                var optB = {
                    mass: 8,
                    rotate:20,
                    render:{
                        fillStyle: 'rgb(2,142,84)'
                    }
                }
                var boxA = Bodies.rectangle(400, 200, 40, 80,optA);
                var ballA = Bodies.circle(380, 100, 40, optB);
                var ballB = Bodies.circle(420, 0, 30, optB);
                var ground = Bodies.rectangle(400, 380, 400, 20, { isStatic: true });

                World.add(engine.world, [boxA, ballA, ballB, ground]);
                Engine.run(engine);
                Render.run(render);
                console.log(boxA)
            }
        },
        mounted(){
            this.MainPart()
        }
    }
</script>

<style scoped>
    .container{
        display: flex;
        justify-content: center;
    }
    .fragment{
        display: flex;
        justify-content: center;
        margin: 20px;
        padding: 20px;

        background-color: aliceblue;
    }
</style>
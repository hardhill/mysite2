<template>
   <div class="container"><div id="frag"></div></div>
</template>

<script>
    import * as Matter from 'matter-js'
    export default {
        name: "Matterjs02",
        methods:{
            MainPart:function(){
                var Engine = Matter.Engine
                var Bodies = Matter.Bodies
                var World = Matter.World
                var Render = Matter.Render
                var engine = Engine.create()

                var ball = Bodies.circle(460, 10, 40, 10);
                var ground = Bodies.rectangle(400, 600, 800, 30, { isStatic: true });

                var render = Render.create({
                    element: document.getElementById("frag"),
                    engine: engine,
                    options: {
                        background:'#c5fcd8',
                        width: 800,
                        wireframes: false
                    }
                });
                World.add(engine.world, [ball, ground]);
                Engine.run(engine)
                Render.run(render)
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
</style>
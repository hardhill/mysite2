<template>
  <div class="container">
    <div class="main-block">
      <div class="header">ПРОЕКТЫ</div>
      <div class="element0" @click="GoProject(0)">Пример использования CANVAS. Игра на `чистом` JS.
        Сделана по материалам сайта <a href="https://developer.mozilla.org/ru/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript">MDN webdocs</a>
      </div>
      <div class="element0" @click="GoProject(1)">Эксперементы с фреймворком <span class="flash">Matter JS</span>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {

  },
  methods:{
    GoProject:function(n){
      switch (n) {
        case 0:{
          this.$router.push({name:'Project01'})
          break
        }
        case 1:{
          break
        }
      }
    }
  }
}
</script>
<style scoped>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url(/images/Tower.jpg) ;
    background-size: cover;

  }
  .main-block{
    position: absolute;
    top: 3rem;
    left: 2rem;
    width: 30rem;
    background-color: rgba(53, 76, 85, 0.4);
    color:#F5F5F5;
  }
  .header{
    text-align: center;
    padding: 1rem 1rem;
    width: 100%;
    color: aliceblue;
  }
  .flash{
    color: #ff5263;
  }
  .element0{
    padding: 0.5rem 2rem;
    font-size: 1.2rem;
    cursor: pointer;

  }
  .element0:hover{
    background-color: rgba(60, 86, 95, 0.4);
  }
</style>

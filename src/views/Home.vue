<template>
  <div class="container">
    <div class="main-block">
      <div class="header">ПРОЕКТЫ</div>
      <div class="element0" @click="GoProject(0)">Пример использования CANVAS. Игра на `чистом` JS.
        Сделана по материалам сайта <a href="https://developer.mozilla.org/ru/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript">MDN webdocs</a>
      </div>
      <div class="element0" @click="OpenSubMenu(0)">Эксперементы с фреймворком <span class="flash">Matter JS</span>
      </div>
      <div v-if="menu.show">
      <div class="element1" v-for="item in menu.list" :key="item.text" @click="GoPage(item.link)" >{{item.text}}</div>
      </div>
      <div class="element0" @click="OpenSubMenu(1)">Эксперементы с фреймворком <span class="flash">P5</span>
      </div>
      <div v-if="menu2.show">
        <div class="element1" v-for="item in menu2.list" :key="item.text" @click="GoPage(item.link)" >{{item.text}}</div>
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
  data(){
    return {
      menu:{
        show:false,
        list:[{
          text:"Пример использования библиотеки MatterJS, взят с официального сайта",
          link:"Matterjs01"
        },
        {
          text:"Другой пример",
          link:"Matterjs02"
        }

        ],
        
      },
      menu2:{
        show:false,
        list:[
          {
            text:"Пример 1",
            link:"P5_01"
          }
        ]
      }
    }
  },
  methods:{
    GoProject:function(n){
      switch (n) {
        case 0:{
          this.$router.push({name:'Project01'})
          break
        }
        case 1:{
          this.$router.push({name:'Matterjs01'})
          break
        }
      }
    },
    OpenSubMenu:function(n){
      if(n==0)
        this.menu.show = !this.menu.show
      if(n==1)
        this.menu2.show = !this.menu2.show
    },
    GoPage:function(link){
      this.$router.push({name:link})
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
  .element1{
    padding: 0.5rem 2rem;
    font-size: 1.2rem;
    cursor: pointer;
    
    background-color: rgba(60, 86, 95, 0.4);
  }
  .element1:hover{
    background-color: rgba(98, 118, 126, 0.438);
  }
</style>

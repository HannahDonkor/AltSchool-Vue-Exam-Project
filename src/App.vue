<script setup>
import Home from './components/Home.vue'
import Repos from './components/Repos.vue'
import Single_repo from './components/Single_repo.vue'
import Not_Found from './components/Not_Found.vue'


  components: 
    Repos

</script>


<template>
  <div id="app">
    <router-view></router-view>
  </div>

</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

#app {
  height: 100%;
  width: 100%;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

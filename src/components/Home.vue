<template>
  <div class="home">
    <h1>Synchronous Counter</h1>
<h1>{{ count}}</h1>
<button @click="syncincrement"> increase</button>
<button @click="syncdecrement"> decrease</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
export default {
  computed:{
...mapGetters([
  'count'
])

    },
methods:{
 ...mapActions([
      'syncincrement',
      'syncdecrement'
 ]
  
 )

}
   
  }
  

</script>

<style scoped>
button{
  margin: 20px;
}
h1{
margin: 20px;
}
</style>
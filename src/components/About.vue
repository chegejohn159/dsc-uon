<template>
  <div class="about">
    <h1> Assychronous Counter</h1>
    <h1>{{count}}</h1>
<button @click="asyncincrement"> Async increase</button>
<button @click="asyncdecrement"> Async decrease</button>
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
      'asyncincrement',
      'asyncdecrement',

      ])
     

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

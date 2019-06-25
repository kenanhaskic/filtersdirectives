<template>
  <div id="app">
<p>{{getdata()}}</p>
<div v-for="podatak in podaci" :key="podatak.id">
<p v-color>{{podatak | somefilter}}</p>

</div>

 
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
     podaci:{
    
     }
    }
  },
  methods:{
    getdata(){
      this.axios.get('https://output.jsbin.com/cavokuduqi.json')
      .then((response)=>{
      
        this.podaci=response.data.slice(1).split('\n')
        
       
      })
    },
  created:function(){
 // this.getdata()
  }
 }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>

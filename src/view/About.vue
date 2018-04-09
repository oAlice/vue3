<template>
  <div class="about">
    <div v-for="(i,index) in state" :key='index'>
      <router-link :to="/detail/+i.id">
      <p>{{i.id}}</p>
      <img :src="i.img">
      <p>{{i.price}}</p>
     </router-link>
    </div>
  </div>
</template>
<script>

  export default {
    data(){
      return {
        state:[]
      }
    },
    watch:{
     '$route'(){
       this.$http.post('http://localhost:3000/sel',{fenlei:this.$route.params.fenlei},{emulateJSON:true}).then(e=>this.state=e.body)
     }
   },
    created(){
      this.$http.post('http://localhost:3000/sel',{fenlei:this.$route.params.fenlei},{emulateJSON: true}).then(e=>this.state=e.body)
   }
  }
</script>

<template>
  <div>
   <div v-for='(i,index) in arr' :key='index'>
       <p>{{i.price}}</p>  
       <img :src='i.img'/> 
   </div>
  </div>
</template>
<script>

  export default {
     
    data(){
      return {
        arr:[]
      }
    },
    created(){
      this.$http.post('http://localhost:3000/detail',{id:this.$route.params.id},{emulateJSON: true}).then(e=>this.arr=e.body)

    }
  }
</script>

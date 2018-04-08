<template>
  <div class="about">
    <div v-for="i in state">
    {{i.id}}
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
    created(){
      this.$http.post('http://localhost:3000',{},{emulateJSON: true}).then(e=>this.state=e.body)
    }
  }
</script>

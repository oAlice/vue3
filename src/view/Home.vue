<template>
  <div class="home">

    <img src="../assets/logo.png">
    {{msg}}
    
    
  </div>
</template>

<script>


export default {
  name: 'home',
  data(){
    return {
      msg:'welcome Home'
    }
  }
}
</script>

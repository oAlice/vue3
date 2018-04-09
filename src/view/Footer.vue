<template>
    <div>
    <div>@copywith和规范和加工费，HK</div>
    <!-- <p v-for="i in state">楼盘名称：{{i.name}}</p> -->
    </div>
    
</template>
<script>
    export default {
        name:"Footer",
        data(){
            return {
                state:[]
            }
        },
        created(){
            // this.$http.post('http://localhost:3000',{},{emulateJSON: true}).then(e=>this.state=e.body)
        }
    }

</script>
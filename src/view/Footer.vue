<template>
    <div>
    <div>楼盘详情页</div>
    <p v-for="v in state">楼盘名称：{{v.name}}</p>
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
        mounted(){
            this.$http.post('http://localhost:3000',{},{emulateJSON: true}).then(e=>this.state=e.body)
        }
    }
</script>
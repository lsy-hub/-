<template>
    <div id="app">home</div>
</template>
<script>
    export default {
        data() {
            return {
                gamelist: []
            }
        },
        created() {
            this.$request.get('/home').then(({
                data
            }) => {
                this.gamelist = data.data
                console.log(this.gamelist);
            })
        }



    }
</script>
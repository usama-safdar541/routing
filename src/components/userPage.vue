<template>
    <div>
        <h1> Hi this Is the User Component</h1>
        <h2>WE are Working On routing </h2>
        <hr>
      
        <button @click="navigateHome">Go to home</button>
        <hr>
        <!-- loading child components of user -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    // data() {
    //     return {
    //         id: this.$route.params.id,
    //     }
    // },
    // watch: {
    //     '$route'(to, from) { 
    //         this.id = to.params.id;
    //     }

    // }, 
    methods: {
        navigateHome() {
            this.$router.push('/');
        }
    }
} 
</script>
 
<template>
    <div>
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from './components/Header.vue';
// import Header from './components/Header.vue';
export default {
    components: { Header },
    comments: {
        appHeader: Header,
    }
}

</script>
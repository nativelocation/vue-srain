<template>
    <div id="app">
        <appHeader></appHeader>
        <div role="main">
			<router-view></router-view>
		</div>
        <appFooter></appFooter>
    </div>
</template>

<script type="text/babel">
    import appHeader from './components/Header.vue'
    import appFooter from './components/Footer.vue'
    export default {
        components: {
            appHeader,
            appFooter
        }
    }
</script>

<style lang="sass">
    @import '~styles/variables';
    @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>

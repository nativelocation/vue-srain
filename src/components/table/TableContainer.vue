<template>
    <div id="table-container">
        <Table
            :filter="filter"
            :columns="columns"
            :rows="rows"
        />
    </div>
</template>

<script>
    import Vue from 'vue'
    import '../../../node_modules/beautify-scrollbar/dist/index.css'
    import '../../../node_modules/v2-table/dist/index.css'
    import V2Table from 'v2-table'
    import Table from './Table.vue'
    Vue.use(V2Table)
    export default {
        props: {
            columns: {
                type: Array,
                default: () => []
            },
            rows: {
                type: Array,
                default: () => []
            },
            filter: {
                type: Object,
                default: () => {}
            }
        },
        components: {
            Table
        }
    }
</script>

<style lang="sass"></style>

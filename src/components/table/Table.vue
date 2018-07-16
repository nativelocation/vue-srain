<template>
    <div id="table">
        <v2-table
            :data="rows"
            border
            :cellHeight="cellHeight"
            :colHeight="colHeight"
        >
            <v2-table-column
                v-for="(column, index) in columns"
                :key="index"
                :label="column.label"
                :prop="column.key"
                :width="column.weight"
            />
        </v2-table>
    </div>
</template>

<script>
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
            cellHeight: {
                type: String,
                default: '22'
            },
            colHeight: {
                type: String,
                default: '22'
            }
        }
    }
</script>

<style lang="sass">
    @import '~styles/variables';
    #table {
        .v2-table__header {
            th {
                background: $blue;
                border-color: $gray-600;
                color: $white;
            }
        }
        .v2-table__body {
            td {
                border-color: $gray-600;
            }
        }
    }
</style>

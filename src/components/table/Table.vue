<template>
    <div id="table">
        <v2-table
            :data="rowData"
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
    import _ from 'lodash'
    export default {
        data: () => {
            return {
                rowsFilterData: [],
                colsFilterData: []
            }
        },
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
            },
            cellHeight: {
                type: String,
                default: '22'
            },
            colHeight: {
                type: String,
                default: '22'
            }
        },
        watch: {
            data: {
                immediate: true,
                handler(val) {
                    this.rowsFilterData = this.rows.slice(0)
                    console.log('rowsFilterData', this.rows)
                }
            }
        },
        computed: {
            rowData() {
                const self = this
                let rowsData = this.rows.slice()
                if (this.filter.filterItem.length > 0) {
                    rowsData = _.filter(rowsData, rowFilterData => {
                        return _.findIndex(self.filter.filterItem, item => {
                            console.log(item.label, rowFilterData[self.filter.filterKey])
                            return rowFilterData[self.filter.filterKey] === item.label
                        }) > -1
                    })
                }
                return rowsData
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

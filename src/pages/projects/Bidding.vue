<template>
    <div>
        <div class="bidding-title d-flex align-items-center">
            Projects in Bidding
        </div>
        <div class="bidding-content">
            <TableContainer
                :columns="columns"
                :rows="rows"
            />
        </div>
    </div>
</template>

<script>
    import TableContainer from '../../components/table/TableContainer.vue'
    export default {
        data() {
            return {
                columns: [
                    {
                        key: 'projectId',
                        label: 'Project ID',
                        style: {
                            'color': 'blue'
                        },
                        thClass: 'table-header-public',
                        tdClass: 'table-body'
                    },
                    {
                        key: 'projectNo',
                        label: 'Project No.',
                        style: {
                            'color': 'black'
                        },
                        thClass: 'table-header-public',
                        tdClass: 'table-body'
                    },
                    {
                        key: 'description',
                        label: 'Description',
                        style: {
                            'color': 'black'
                        },
                        thClass: 'table-header-public',
                        tdClass: 'table-body'
                    },
                    {
                        key: 'location',
                        label: 'Construction Location',
                        style: {
                            'color': 'black'
                        },
                        thClass: 'table-header-public',
                        tdClass: 'table-body'
                    },
                    {
                        key: 'bidDate',
                        label: 'Bid Date',
                        style: {
                            'color': 'black',
                            'text-align': 'right',
                            'padding-right': '5px'
                        },
                        thClass: 'table-header-public',
                        tdClass: 'table-body'
                    }
                ],
                rows: [
                    {
                        projectId:  '2164200',
                        projectNo:  'SP 027-657-006',
                        description:  'Humboldt Ave (CSAH 57) Rail Crossing Improvements',
                        location: 'Humboldt Avenue near Victory...',
                        bidDate: '05/29/2018'
                    },
                    {
                        projectId:  '2175500',
                        projectNo:  'CP 1755',
                        description:  'Hennepin Avenue Concrete Pavement Repair',
                        location: 'Minneapolis, MN',
                        bidDate: 'Bidding Closed'
                    },
                    {
                        projectId:  '2175800',
                        projectNo:  'SAP 027-603-072',
                        description:  '2018 Ped Ramps (152 & 3)',
                        location: 'Minneapolis and St Louis Park',
                        bidDate: '05/22/2018'
                    }
                ]
            }
        },
        components: {
            TableContainer
        }
    }
</script>

<style lang="sass">
    @import '~styles/fonts';
    @import '~styles/variables';
    #Home {
        .bidding-title {
            background: $gray-200;
            height: 72px;
            padding: 0 83px;
            font-size: 30px;
            font-family: cabin;
            font-weight: 100;
        }
        .bidding-content {
            padding: 1rem 83px;
        }
    }
</style>

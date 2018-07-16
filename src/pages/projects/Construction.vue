<template>
    <div>
        <div class="construction-title d-flex align-items-center">
            Projects in Construction
        </div>
        <div class="construction-content">
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
                        projectId:  '1234567',
                        projectNo:  '00-000-000',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
                    },
                    {
                        projectId:  '1234567',
                        projectNo:  '00-000-000',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
                    },
                    {
                        projectId:  '1234567',
                        projectNo:  '00-000-000',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
                    },
                    {
                        projectId:  '1234567',
                        projectNo:  '00-000-000',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
                    },
                    {
                        projectId:  '1234567',
                        projectNo:  '00-000-000',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
                    },
                    {
                        projectId:  '1234567',
                        projectNo:  '00-000-000',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
                    },
                    {
                        projectId:  '1234567',
                        projectNo:  '00-000-000',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
                    },
                    {
                        projectId:  '1234567',
                        projectNo:  '00-000-000',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
                    },
                    {
                        projectId:  '1234567',
                        projectNo:  '00-000-000',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
                    },
                    {
                        projectId:  '1234567',
                        projectNo:  '00-000-000',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
                    },
                    {
                        projectId:  '1234567',
                        projectNo:  '00-000-000',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
                    },
                    {
                        projectId:  '1234567',
                        projectNo:  '00-000-000',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
                    },
                    {
                        projectId:  '1234567',
                        projectNo:  '00-000-000',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
                    },
                    {
                        projectId:  '1234567',
                        projectNo:  '00-000-000',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
                    },
                    {
                        projectId:  '1234567',
                        projectNo:  '00-000-000',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
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
        .construction-title {
            background: $gray-200;
            height: 72px;
            padding: 0 83px;
            font-size: 30px;
            font-family: cabin;
            font-weight: 100;
        }
        .construction-content {
            padding: 1rem 83px;
        }
    }
</style>

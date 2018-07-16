<template>
    <div>
        <div class="planning-title d-flex align-items-center">
            Planning Projects
        </div>
        <div class="planning-content">
            <div class="planning-warning d-flex align-items-center pl-3">
                <i class="material-icons warning-icon">warning</i>
                {{warning}}
            </div>
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
                warning: 'These projects are not yet open for bed and are subject to change.',
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
                        label: 'Anticpated Bid Date',
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
                        projectId:  'CP 00-000-000<span style="color: black">(subject to change)</span>',
                        projectNo:  'CP 00-000-000(subject to change)',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
                    },
                    {
                        projectId:  'CP 00-000-000<span style="color: black">(subject to change)</span>',
                        projectNo:  'CP 00-000-000(subject to change)',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
                    },
                    {
                        projectId:  'CP 00-000-000<span style="color: black">(subject to change)</span>',
                        projectNo:  'CP 00-000-000(subject to change)',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
                    },
                    {
                        projectId:  'CP 00-000-000<span style="color: black">(subject to change)</span>',
                        projectNo:  'CP 00-000-000(subject to change)',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
                    },
                    {
                        projectId:  'SAP 00-000-000<span style="color: black">(subject to change)</span>',
                        projectNo:  'SAP 00-000-000(subject to change)',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
                    },
                    {
                        projectId:  'SAP 00-000-000<span style="color: black">(subject to change)</span>',
                        projectNo:  'SAP 00-000-000(subject to change)',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
                    },
                    {
                        projectId:  'SAP 00-000-000<span style="color: black">(subject to change)</span>',
                        projectNo:  'SAP 00-000-000(subject to change)',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
                    },
                    {
                        projectId:  'SAP 00-000-000<span style="color: black">(subject to change)</span>',
                        projectNo:  'SAP 00-000-000(subject to change)',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
                    },
                    {
                        projectId:  'SAP 00-000-000<span style="color: black">(subject to change)</span>',
                        projectNo:  'SAP 00-000-000(subject to change)',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
                    },
                    {
                        projectId:  'SP 00-000-000<span style="color: black">(subject to change)</span>',
                        projectNo:  'SP 00-000-000(subject to change)',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
                    },
                    {
                        projectId:  'SP 00-000-000<span style="color: black">(subject to change)</span>',
                        projectNo:  'SP 00-000-000(subject to change)',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
                    },
                    {
                        projectId:  'SP 00-000-000<span style="color: black">(subject to change)</span>',
                        projectNo:  'SP 00-000-000(subject to change)',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
                    },
                    {
                        projectId:  'SP 00-000-000<span style="color: black">(subject to change)</span>',
                        projectNo:  'SP 00-000-000(subject to change)',
                        description:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        location: 'Street, City, State',
                        bidDate: 'MM/DD/YYYY'
                    },
                    {
                        projectId:  'SP 00-000-000<span style="color: black">(subject to change)</span>',
                        projectNo:  'SP 00-000-000(subject to change)',
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
        .planning-title {
            background: $gray-200;
            height: 72px;
            padding: 0 83px;
            font-size: 30px;
            font-family: cabin;
            font-weight: 100;
        }
        .planning-content {
            padding: 1rem 83px;
            .planning-warning {
                height: 33px;
                background: $gray-400;
                font-size: 14px;
                font-family: cabin;
                font-weight: 100;
                .warning-icon {
                    font-size: 18px;
                    color: #831700;
                }
            }
        }
    }
</style>

<template>
    <div id="banner" class="top-banner">
        <img :src="getBanner" />
        <div class="category-icons d-flex justify-content-around align-items-center">
            <div class="w-100 d-flex justify-content-around flex-wrap">
                <div
                    class="category col-lg-3"
                    @click="clickPlanning"
                >
                    <div
                        class="fix-planning"
                        :class="getPlanning"
                    />
                    <span class="font-30 d-flex justify-content-around">
                        Planning<br/>Projects
                    </span>
                </div>
                <div
                    class="category col-lg-3"
                    @click="clickBidding"
                >
                    <div
                        class="fix-bidding"
                        :class="getBidding"
                    />
                    <span class="font-30 d-flex justify-content-around">
                        Project in<br/>Bidding
                    </span>
                </div>
                <div
                    class="category col-lg-3"
                    @click="clickConstruction"
                >
                    <div
                        class="fix-construction"
                        :class="getConstruction"
                    />
                    <span class="font-30 d-flex justify-content-around">
                        Projects in<br/>Construction
                    </span>
                </div>
                <div
                    class="category col-lg-3"
                    @click="clickReports"
                >
                    <div
                        class="fix-reports"
                        :class="getReports"
                    />
                    <span class="font-30 d-flex justify-content-around">
                        Reports
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import first_banner from '../assets/images/first_banner.jpg'
    import Router from 'vue-router'
    export default {
        methods: {
            clickPlanning() {
                this.$router.push('/projects/planning');
            },
            clickBidding() {
                this.$router.push('/projects/bidding');
            },
            clickConstruction() {
                this.$router.push('/projects/construction');
            },
            clickReports() {
                this.$router.push('/reports');
            }
        },
        computed: {
            getBanner() {
                return first_banner
            },
            getBidding() {
                return this.$route.name === 'bidding' ? 'bidding' : ''
            },
            getPlanning() {
                return this.$route.name === 'planning' ? 'planning' : ''
            },
            getConstruction() {
                return this.$route.name === 'construction' ? 'construction' : ''
            },
            getReports() {
                return this.$route.name === 'reports' ? 'reports' : ''
            }
        }
    }
</script>

<style lang="sass">
    @import '~styles/fonts';
    @import '~styles/variables';
    #banner.top-banner {
        position: relative;
        max-height: 30.7rem;
        overflow: hidden;
        img {
            width: 100%;
        }
        .font-30 {
            font-size: 30px;
            font-family: cabin;
            font-weight: 100;
            color: $white;
            text-align: center;
        }
        .category-icons {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            padding-right: 10%;
            padding-left: 10%;
            .category {
                max-width: 262px;
                min-width: 195px;
                .fix-planning {
                    width: 100%;
                    background: url('/src/assets/images/planning.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    padding-top: 100%;
                    &:hover {
                        background: url('/src/assets/images/planning-transparent.png');
                        width: 100%;
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        padding-top: 100%;
                    }
                }
                .planning {
                    width: 100%;
                    background: url('/src/assets/images/planning-transparent.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    padding-top: 100%;
                }
                .fix-bidding {
                    width: 100%;
                    background: url('/src/assets/images/bidding.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    padding-top: 100%;
                    &:hover {
                        background: url('/src/assets/images/bidding-transparent.png');
                        width: 100%;
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        padding-top: 100%;
                    }
                }
                .bidding {
                    width: 100%;
                    background: url('/src/assets/images/bidding-transparent.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    padding-top: 100%;
                }
                .fix-construction {
                    width: 100%;
                    background: url('/src/assets/images/construction.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    padding-top: 100%;
                    &:hover {
                        background: url('/src/assets/images/construction-transparent.png');
                        width: 100%;
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        padding-top: 100%;
                    }
                }
                .construction {
                    width: 100%;
                    background: url('/src/assets/images/construction-transparent.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    padding-top: 100%;
                }
                .fix-reports {
                    width: 100%;
                    background: url('/src/assets/images/reports.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    padding-top: 100%;
                    cursor: position;
                    &:hover {
                        background: url('/src/assets/images/reports-transparent.png');
                        width: 100%;
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        padding-top: 100%;
                    }
                }
                .reports {
                    width: 100%;
                    background: url('/src/assets/images/reports-transparent.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    padding-top: 100%;
                }
            }
        }
    }
</style>

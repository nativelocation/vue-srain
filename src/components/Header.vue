<template>
    <div id="header">
        <div class="container-fluid p-0 m-0">
            <div
                class="menu-bar px-3 d-flex justify-content-between align-items-center"
                :class="user_role"
            >
                <div class="icon-menu-title d-flex justify-content-around align-items-center">
                    <div class="site-title">
                        OneOffice
                        <span class="ml-3 mr-2">|</span>
                        Hennepin Co
                    </div>
                </div>

                <b-navbar toggleable="md" class="navbar-custom p-0">
                    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
                    <b-collapse is-nav id="nav_collapse">
                        <b-navbar-nav justified>
                            <b-nav-item>
                                <div class="menu-title d-flex align-items-center">
                                    <router-link
                                        to="/"
                                        exact
                                        active-class="toggleClass"
                                    >
                                        Home
                                    </router-link>
                                    <span class="mx-2">|</span>
                                </div>
                            </b-nav-item>
                            <b-nav-item>
                                <div class="menu-title d-flex align-items-center">
                                    <b-nav-item-dropdown
                                        text="Projects"
                                        :class="($route.name === 'planning' || $route.name === 'bidding' || $route.name === 'construction') ? 'toggleClass' : ''"
                                    >
                                        <b-dropdown-item>
                                            <router-link to="/projects/planning" exact>Planning</router-link>
                                        </b-dropdown-item>
                                        <b-dropdown-item>
                                            <router-link to="/projects/bidding" exact>Bidding</router-link>
                                        </b-dropdown-item>
                                        <b-dropdown-item>
                                            <router-link to="/projects/construction" exact>Construction</router-link>
                                        </b-dropdown-item>
                                    </b-nav-item-dropdown>
                                    <span class="mx-2">|</span>
                                </div>
                            </b-nav-item>
                            <b-nav-item>
                                <div class="menu-title d-flex align-items-center">
                                    <b-nav-item-dropdown
                                        text="Messages"
                                        :class="($route.name === 'newMessage' || $route.name === 'help') ? 'toggleClass' : ''"
                                    >
                                        <b-dropdown-item>
                                            <router-link to="/messages/new" exact>New Messages</router-link>
                                        </b-dropdown-item>
                                        <b-dropdown-item>
                                            <router-link to="/messages/help" exact>Help/FAQ</router-link>
                                        </b-dropdown-item>
                                    </b-nav-item-dropdown>
                                    <span class="mx-2">|</span>
                                </div>
                            </b-nav-item>
                            <b-nav-item>
                                <div class="menu-title d-flex align-items-center">
                                    <router-link
                                        to="/reports"
                                        exact
                                        active-class="toggleClass"
                                    >
                                        Reports
                                    </router-link>
                                    <span class="mx-2">|</span>
                                </div>
                            </b-nav-item>
                            <b-nav-item>
                                <div class="menu-title d-flex align-items-center">
                                    <router-link
                                        to="/search"
                                        exact
                                        active-class="toggleClass"
                                    >
                                        Search
                                    </router-link>
                                    <span class="mx-2">|</span>
                                </div>
                            </b-nav-item>
                            <b-nav-item>
                                <div class="menu-title d-flex align-items-center">
                                    <router-link
                                        to="/login"
                                        exact
                                        active-class="toggleClass"
                                    >
                                        Login
                                    </router-link>
                                </div>
                            </b-nav-item>
                        </b-navbar-nav>
                    </b-collapse>
                </b-navbar>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            }
        },
        computed: {
            user_role() {
                return 'public'
            }
        }
    }
</script>

<style lang="sass">
    @import '~styles/fonts';
    @import '~styles/variables';
    #header {
        .container-fluid {
            .menu-bar.public {
                background: $gray-200;
            }
            .menu-bar.internal {
                background: $black;
            }
            .menu-bar {
                height: 72px;
                .navbar-custom {
                    background: $gray-200;
                }
                .site-title {
                    font-family: cabin;
                    font-size: 36px;
                    font-style: normal;
                    font-weight: 100;
                }
                .nav-justified {
                    align-items: center;
                }
                .menu-title {
                    font-family: cabin;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 100;
                    a, a.hover {
                        color: $black;
                        text-decoration: none;
                    }
                    .toggleClass {
                        color: $gray-400 !important;
                        >a {
                            color: $gray-400 !important;
                        }
                    }
                    .dropdown-toggle:after {
                        display: none;
                    }
                    .dropdown-menu {
                        background: $gray-200;
                        .dropdown-item {
                            color: black;
                            font-family: cabin;
                            font-size: 20px;
                            font-weight: 100;
                            &:hover, &:focus {
                               background: $gray-200;
                            }
                        }
                        div {
                            background: $gray-200;
                            border-radius: 0;
                            border: none;
                            font-size: 14px;
                            font-family: arial;
                            top: 18px !important;
                            border-top: solid 1px #d0d0d0;
                            margin-top: 0;
                            margin-bottom: 0;
                            padding-top: 0;
                            padding-bottom: 0;
                            a {
                                background: $gray-200;
                                font-size: 14px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>

<template>
    <div id="footer">
        <div class="container-fluid p-0">
            <div class="content d-flex justify-content-between align-items-center">
                <div>@OneOffice 2018</div>
                <div>Privacy | Security | Terms of Service</div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="sass">
    @import '~styles/variables';
    #footer {
        position: fixed;
        bottom: 0px;
        right: 0px;
        left: 0px;
        background: $blue;
        .container-fluid {
            padding-left: 45px !important;
            padding-right: 45px !important;
            .content {
                font-size: 8px;
                height: 3rem;
                color: $white;
            }
        }
    }
</style>

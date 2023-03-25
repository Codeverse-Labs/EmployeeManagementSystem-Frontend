<template>
    <h2 class="my-6 mx-7 text-left text-3xl font-bold tracking-tight text-gray-900">
        Assets :
    </h2>
    <div class=" mx-4 mt-3">
        <search-bar-component />
    </div>

    <div>
        <!-- content -->
        <div class=" px-5 py-4">
            <div class="grid grid-cols-4 gap-1 screen-md:block">
                <!-- assets filters -->
                <div class=" bg-slate-50 rounded-lg  shadow-lg screen-md:mb-4">
                    <assets-type-list-component />
                </div>

                <!-- assets -->
                <div class="col-span-3 bg-slate-50 rounded-lg pb-5 shadow-lg">
                    <assets-list-component :assets="assetState.assets" />

                    <!-- pagination -->
                    <PaginationComponent :getPage="getPage" :totalPages="assetState.totalPages" />
                </div>
            </div>
        </div>
    </div>
    <AdminSpeedMenu/>
</template>
  
<script>
import { mapGetters } from "vuex";
import PaginationComponent from '@/components/PaginationComponent.vue';
import AssetsTypeListComponent from '@/components/AssetsTypeListComponent.vue';
import AssetsListComponent from '@/components/AssetsListComponent.vue';
import AdminSpeedMenu from "@/components/AdminSpeedMenu.vue";

export default {
    computed: mapGetters({
        assetState: "getAssetState",
    }),
    created: function () {
        this.$watch(
            () => this.$route.query,
            () => {
                this.$store.dispatch("getAllAssets", this.$route.query.page);
                console.log("query", this.$route.query.page)
            },
        ),
            this.$store.dispatch("getAllAssets", this.$route.query.page);
    },
    methods: {
        getPage(page) {
            this.page = page
            this.$router.push({ name: "assets", query: { page: page } })
        }
    },
    components: {
    PaginationComponent,
    AssetsTypeListComponent,
    AssetsListComponent,
    AdminSpeedMenu
}
};
</script>
  
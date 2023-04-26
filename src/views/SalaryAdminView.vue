<template>
  <div class=" justify-between flex my-6 mx-7">
    <h2 class="text-left text-3xl font-bold tracking-tight text-gray-900">
      Salaries :
    </h2>
    <button
      class="p-3 text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm text-center">
      <i class="fa fa-add"></i> Add Salary
    </button>
  </div>

  <!-- Salary List -->
  <salary-list-component/>
  
  <!-- pagination -->
  <PaginationComponent :getPage="getPage" :totalPages="salaryState.totalPages" />

  <AdminSpeedMenu />
</template>

<script>
import AdminSpeedMenu from '@/components/AdminSpeedMenu.vue';
import { mapGetters } from 'vuex'
import PaginationComponent from '@/components/PaginationComponent.vue';
import SalaryListComponent from '@/components/SalaryListComponent.vue';

export default {
  computed: mapGetters({
    salaryState: "getSalaryState",
  }),
  components: {
    AdminSpeedMenu,
    PaginationComponent,
    SalaryListComponent,
  },
  methods: {
    getPage(page) {
      this.page = page
      this.$router.push({ name: "salary", query: { page: page } })
    },
  },
  created() {
    this.$watch(
      () => this.$route.query,
      () => {
      this.$store.dispatch('getAllSalary',{page: this.$route.query.page })
      },
    ),
      this.$store.dispatch('getAllSalary',{page: this.$route.query.page })
  },
};
</script>

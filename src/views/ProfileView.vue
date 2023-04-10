<template>
  <!-- profile -->
  <div class="p-4 bg-slate-200 md:p-16">
    <div class="p-8 bg-white shadow-xl mt-24 rounded-lg">
      <!-- user img -->
      <div
        class="relative w-40 h-40 mx-auto rounded-full shadow-2xl  top-0 -mt-24 flex items-center justify-center bg-white">
        <img :src="userState.user.imageurl" alt="" class=" rounded-full ">
      </div>

      <div class="mt-20 border-b pb-12">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">

          <div class=" text-left">
            <h1 class=" text-xs font-medium text-gray-400">Full Name</h1>
            <h1 class="text-base font-medium text-gray-700" v-if="userState.user.name">{{ userState.user.name }} </h1>            
            <h1 class="text-base font-medium text-gray-700" v-else>-</h1>
          </div>

          <div class=" text-left">
            <h1 class=" text-xs font-medium text-gray-400">Email</h1>
            <h1 class="text-base font-medium text-gray-700" v-if="userState.user.email">{{ userState.user.email }} </h1>            
            <h1 class="text-base font-medium text-gray-700" v-else>-</h1>
          </div>

          <div class=" text-left">
            <h1 class=" text-xs font-medium text-gray-400">Designation</h1>
            <h1 class="text-base font-medium text-gray-700" v-if="userState.user.designation.name">{{ userState.user.designation.name }} </h1>            
            <h1 class="text-base font-medium text-gray-700" v-else>-</h1>
          </div>

          <div class=" text-left">
            <h1 class=" text-xs font-medium text-gray-400">Birthday</h1>
            <h1 class="text-base font-medium text-gray-700" v-if="userState.user.dob">{{ formatDate(userState.user.dob) }}</h1>            
            <h1 class="text-base font-medium text-gray-700" v-else>-</h1>
          </div>

          <div class=" text-left">
            <h1 class=" text-xs font-medium text-gray-400">NIC</h1>
            <h1 class="text-base font-medium text-gray-700" v-if="userState.user.nic">{{ userState.user.nic }} </h1>            
            <h1 class="text-base font-medium text-gray-700" v-else>-</h1>
          </div>

          <div class=" text-left">
            <h1 class=" text-xs font-medium text-gray-400">Report Person</h1>
            <h1 class="text-base font-medium text-gray-700" v-if="userState.user.reportPerson.name">{{ userState.user.reportPerson.name }} </h1>            
            <h1 class="text-base font-medium text-gray-700" v-else>-</h1>
          </div>

          <div class=" text-left">
            <h1 class=" text-xs font-medium text-gray-400">Adderss</h1>
            <h1 class="text-base font-medium text-gray-700" v-if="userState.user.address">{{ userState.user.address }} </h1>            
            <h1 class="text-base font-medium text-gray-700" v-else>-</h1>
          </div>
        </div>        
      </div>
    </div>
  </div>

  <!-- Edit btn -->
  <router-link to="/editprofile">
    <button class=" bg-slate-600 rounded-full text-white fixed right-4 bottom-4 w-12 h-12">
      <i class="fa fa-pen"></i>
    </button>
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
  data() {
    return {
      page: 1,
    }
  },
  computed: mapGetters({
    userState: "getUserState",
  }),
    methods: {
        formatDate(value) {
            if (value) {
                return moment(String(value)).format(' Do MMMM YYYY')
            }
        },
    },
}
</script>

<style></style>
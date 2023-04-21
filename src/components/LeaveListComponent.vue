<template>
    <!-- user list -->
    <div class=" bg-slate-300 rounded-lg mx-4 my-10 overflow-x-auto shadow-2xl">
        <table class=" w-full">
            <thead>
                <th>Leave ID</th>
                <th>LEAVE TYPE</th>
                <th>REQUESTED ON</th>
                <th>LEAVE FROM</th>
                <th>LEAVE TO</th>
                <th>DURATION</th>
                <th>STATUS</th>
            </thead>
            <tbody>
                <tr class="odd:bg-white even:bg-slate-50" v-for="leave in leaves" v-bind:key="leave._id">
                    <td>{{ leave._id }}</td>
                    <td v-if="leave.isMedical">Medical</td>
                    <td v-else>Casual</td>
                    <td>{{ formatDate(leave.createdAt) }}</td>
                    <td>{{ formatDate(leave.leaveFrom) }}</td>
                    <td v-if="leave.isOneday">{{ formatDate(leave.leaveFrom) }}</td>
                    <td v-else>{{ formatDate(leave.leaveTo) }}</td>
                    <td v-if="leave.isOneday && leave.isFullday">1 day</td>
                    <td v-else-if="leave.isOneday && !leave.isFullday">Half day</td>
                    <td v-else>{{ daysDiff(leave.leaveFrom, leave.leaveTo) }} days</td>
                    <td>{{ leave.status }}</td>
                    <td @click="openPopup(leave)"><i class=" fa fa-eye"></i></td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- popup -->
    <div id="popup-modal" v-if="popup"
        class="flex fixed top-0 left-0 right-0 z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full justify-center"
        style="background-color:rgba(0, 0, 0, 0.400)">
        <div class="relative bg-white rounded-lg shadow self-center px-20  m-auto">
            <button type="button" @click="closePopup()"
                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-red-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-hide="popup-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Close modal</span>
            </button>

            <!-- body -->
            <!-- choose which kind of leave -->
            <pre>{{ leave }}</pre>

        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: ['leaves'],
    data() {
        return {
            popup: false,
            leave: null,
        }
    },
    methods: {
        formatDate(value) {
            if (value) {
                return moment(String(value)).format('MM/DD/YYYY')
            }
        },
        daysDiff(startDate, endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const diff = Math.abs(end - start);
            const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
            return Math.round(diff / oneDay);
        },
        closePopup() {
            this.popup = false;
            this.leave = null;
        },
        openPopup(leave) {
            this.popup = true;
            this.leave = leave
        },
    }
}
</script>

<template>
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
                <th>CANCEL</th>
            </thead>
            <tbody>
                <tr class="odd:bg-white even:bg-slate-50" v-for="leave in leaves" v-bind:key="leave._id">
                    <td>{{ leave._id }}</td>
                    <td  v-if="leave.isMedical">Medical</td>
                    <td  v-else>Casual</td>
                    <td >{{ formatDate(leave.createdAt) }}</td>
                    <td >{{ formatDate(leave.leaveFrom) }}</td>
                    <td  v-if="leave.isOneday">{{ formatDate(leave.leaveFrom) }}</td>
                    <td  v-else>{{ formatDate(leave.leaveTo) }}</td>
                    <td  v-if="leave.isOneday && leave.isFullday">1 day</td>
                    <td  v-else-if="leave.isOneday && !leave.isFullday">Half day</td>
                    <td  v-else>{{ daysDiff(leave.leaveFrom, leave.leaveTo) }} days</td>
                    <td >{{ leave.status }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: ['leaves'],

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
    }
}
</script>

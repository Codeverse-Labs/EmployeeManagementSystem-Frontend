import { DesignationService } from "@/services/DesignationService";
import { NotificationHelper } from "@/helper/NotificationHelper";
import store from "..";

// initial state
const state = () => ({
    designationList: {
        desigantions: [],
        errorMessage: "",
        isLoading: false,
        desigantion: null,
    },
})

// getters
const getters = {
    getDesignationState: function (state) {
        return state.designationList;
    }
}

// mutations
const mutations = {
    SET_LOADING: function (state, payload) {
        state.designationList.isLoading = payload;
    },
    SET_DESIGNATIONS: function (state, payload) {
        state.designationList.desigantions = payload.desigantions;
    },
    SET_DESIGNATION: function (state, payload) {
        state.designationList.desigantion = payload.desigantion;
    },
    SET_ERROR: function (state, payload) {
        state.designationList.errorMessage = payload.error;
    },
}

// actions
const actions = {
    getAllDesignations: async function ({ commit }) {
        try {
            commit("SET_LOADING", true);
            let response = await DesignationService.getAll();
            commit("SET_DESIGNATIONS", { desigantions: response.data.data });
            commit("SET_LOADING", false);
        } catch (error) {
            NotificationHelper.errorhandler(error)
            commit("SET_LOADING", false);
        }
    },
    deleteDesignation: async function ({ commit }, id) {
        try {
            await DesignationService.delete(id);
            NotificationHelper.notificationhandler('designation deleted successfully!')
            store.dispatch("getAll")
        } catch (error) {
            console.log(error)
            commit("SET_ERROR", { error: error })
        }
    },
    updateDesignation: async function ({ commit }, data) {
        try {
            await DesignationService.updateCategory(data, data._id);            
            NotificationHelper.notificationhandler('designation updated successfully!')
            store.dispatch("getAll")
        } catch (error) {
            console.log(error)
            commit("SET_ERROR", { error: error })
        }
    },getDesignationById: async function ({ commit },id) {
        try {
            commit("SET_LOADING", true);
            let response = await DesignationService.getById(id);
            console.log(response)
            commit("SET_DESIGNATION", { desigantion: response.data });
            commit("SET_LOADING", false);
        } catch (error) {
            NotificationHelper.errorhandler(error)
            commit("SET_LOADING", false);
        }
    },
    createDesignation:async function({commit},data){
        try {
            commit("SET_LOADING", true);
            await DesignationService.create(data);
            NotificationHelper.notificationhandler('Designation created successfully!')
            store.dispatch('getAll')
            commit("SET_LOADING", false);
        } catch (error) {
            NotificationHelper.errorhandler(error)
            commit("SET_LOADING", false);
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
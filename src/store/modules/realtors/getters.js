export default {
    realtors(state) {
        return state.realtors;
    },
    hasRealtors(state) {
        return state.realtors && state.realtors.length > 0
    },
    isRealtor(_, getters, _2, rootGetters) {
        const realtors = getters.realtors;
        const userId = rootGetters.userId;
        return realtors.some(realtor => realtor.id === userId);
    }
}
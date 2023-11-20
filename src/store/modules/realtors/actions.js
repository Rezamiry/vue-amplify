export default {
    registerRealtor(context, data) {
        const realtorData = {
            "id": context.rootGetters.userId,
            "name": data.name,
            "email": data.email,
            "desc": data.desc
        }

        context.commit("registerRealtor", realtorData)
    }
}
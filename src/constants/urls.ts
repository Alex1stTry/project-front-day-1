const baseURL ='http://localhost:4000'
const auth = '/auth'

const urls = {
    auth:{
        register:`${auth}/register`,
        login:`${auth}/log-in`,
        me:`${auth}/me`
    }
}

export {
    baseURL,
    urls
}
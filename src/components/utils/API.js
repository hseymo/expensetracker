const BASE_URL="localhost:3001/api"

module.exports = {
    getAllUsers:() => {
        return fetch(`${BASE_URL}/api/users`)
        .then(res=> res.json())
    }, 

    verify: (token) => {
        return fetch(`${BASE_URL}/api/users/verifyToken`,{
            headers:{
                authorization:`Bearer ${token}`
            }
        }).then(res=>res.json())
    },

    login: (userData) => {
        return fetch(`${BASE_URL}/api/users/login`,{
            method:"POST",
            body:JSON.stringify(userData),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },

    signup: (userData) => {
        return fetch(`${BASE_URL}/api/users`,{
            method:"POST",
            body:JSON.stringify(userData),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },

    getOneUser: (token) => {
        return fetch(`${BASE_URL}/api/users/me`,{
            headers:{
                authorization:`Bearer ${token}`
            }} )
        .then(res=> res.json())
    },
}
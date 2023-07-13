import { Get_users_error, Get_users_req, Get_users_success } from "./actiontypes"
import axios from 'axios'

const Getusers=()=>(dispatch)=>{
    dispatch({type:Get_users_req})
    return axios.get('http://localhost:4500/get')
    .then((res)=>{
        console.log(res.data)
        dispatch({type:Get_users_success,payload:res.data})
    }).catch((err)=>{
        console.log(err)
        dispatch({type:Get_users_error})
    })

}

export {Getusers}
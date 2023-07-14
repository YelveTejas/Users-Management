import { withDefaultSize } from "@chakra-ui/react"
import { Get_users_error, Get_users_req, Get_users_success, delete_user_req, delete_user_success, post_user_fail, post_user_req, post_user_success, update_user_req, update_user_success } from "./actiontypes"
import axios from 'axios'

const Getusers=()=>(dispatch)=>{
    dispatch({type:Get_users_req})
    return axios.get('http://localhost:4500/get')
    .then((res)=>{
        dispatch({type:Get_users_success,payload:res.data})
    }).catch((err)=>{
        console.log(err)
        dispatch({type:Get_users_error})
    })
}

const Postuser=(data)=>(dispatch)=>{
    dispatch({type:post_user_req})
    return axios.post('http://localhost:4500/post',data)
    .then((res)=>{
        console.log(res)
        dispatch({type:post_user_success})

    }).catch((err)=>{
        console.log(err)
        dispatch({type:post_user_fail})
    })
}

const Updateuser=(id,data)=>(dispatch)=>{
    console.log(id,'id',data,'data')
    dispatch({type:update_user_req})
    return axios.put(`http://localhost:4500/edit/${id}`,data)
    .then((res)=>{
        console.log(res,'updated Data')

        dispatch({type:update_user_success})

    }).catch((err)=>{
        console.log(err,'error')
    })
}

const Deleteuser=(id)=>(dispatch)=>{
    dispatch({type:delete_user_req})
    return axios.delete(`http://localhost:4500/delete/${id}`)
    .then((res)=>{
        console.log('Deleted',res)
        dispatch({type:delete_user_success})

    }).catch((err)=>{
        console.log(err)
    })
}

export {Getusers,Postuser,Updateuser,Deleteuser}
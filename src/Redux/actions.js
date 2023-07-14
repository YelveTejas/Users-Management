import { withDefaultSize } from "@chakra-ui/react";
import {
  Get_users_error,
  Get_users_req,
  Get_users_success,
 
} from "./actiontypes";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Getusers = () => (dispatch) => {
  dispatch({ type: Get_users_req });
  return axios
    .get("https://user-management-2-gyzx.onrender.com/get")
    .then((res) => {
      dispatch({ type: Get_users_success, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: Get_users_error });
    });
};

const Postuser = (data) => (dispatch) => {
  return axios
    .post("https://user-management-2-gyzx.onrender.com/post", data)
    .then((res) => {
       if(res){
        toast.success('User Posted Successfully')
       }
    })
    .catch((err) => {
      console.log(err);
      toast.error('Error while posting user')
    });
};

const Updateuser = (id, data) => (dispatch) => {
  console.log(id, "id", data, "data");

  return axios
    .put(`https://user-management-2-gyzx.onrender.com/update/${id}`, data)
    .then((res) => {
      console.log(res, "updated Data");
      toast.success('User Updated Successfully')
    })
    .catch((err) => {
      console.log(err, "error");
    });
};
const Deleteuser = (id) => (dispatch) => {
  return axios
    .delete(`https://user-management-2-gyzx.onrender.com/delete/${id}`)
    .then((res) => {
      console.log("Deleted", res);
      toast.success('User Deleted')
    })
    .catch((err) => {
      console.log(err);
      toast.error('Error while deleting user')
    });
};

export { Getusers, Postuser, Updateuser, Deleteuser };

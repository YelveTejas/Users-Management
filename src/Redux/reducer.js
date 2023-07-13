import { Get_users_error, Get_users_req, Get_users_success } from "./actiontypes";

const Initial = {
  users: [],
  loading: false,
  error: false,
};

export const reducer = (state = Initial, action) => {
  const { payload, type } = action;
  switch (type) {
    case  Get_users_req:
        return {...state,loading:false}
    case Get_users_success:
        return {...state,users:payload}
    case Get_users_error:
        return {...state,error:true}    
    default:
      return state;
  }
};

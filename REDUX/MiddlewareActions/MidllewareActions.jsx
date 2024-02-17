import { API } from "../../Pages/API";
import axios from "axios";



export const userDetailsActions = (id)=>{

    return async (dispatch) =>{
        dispatch({ type: 'USERDETAILS_REQUEST' });
       
       await axios.get(`http://192.168.1.85:8085/user_details/${id}`)
          .then((response) => {
        //    console.log("res.data",response.data) 
            dispatch({
                type:"USERDETAILS_SUCCESS",
                payload:response.data
            });
            
          })
          .catch((error) => {
             dispatch({
                type:'USERDETAILS_FAILURE',
                payload:error.message
            });
            // console.log(error.message,"pavan kumar8999")
          });
    }
}
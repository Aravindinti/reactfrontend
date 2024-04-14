import axios from "axios";


const BASE_URL="http://localhost:8080/Check"
function CheckUserDetails(username,password)
{
    return axios.get(BASE_URL+'/'+username+'/'+password)

}
export {CheckUserDetails}
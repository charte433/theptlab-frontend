import { publicRequest, userRequest } from "../requestMethod";
import { addOrder, deleteOrderStart, deleteOrderSuccess, deleteOrderFailure } from "./orderRedux";
import { loginStart, loginSuccess, loginFailure, updateUserInfoStart, updateUserInfoSuccess, updateUserInfoFailure } from "./userRedux";

//ORDERS
async function getOrders(userId, dispatch) {
  try {
    const response = await publicRequest.get(`orders/${userId}`);
    //dispatch(addOrder(response.data));
    dispatch(addOrder(response.data));
  } catch (error) {
    console.error(error);
  }
}

//async function deleteOrder(id, dispatch) {
  //dispatch(deleteOrderStart());
  //try {
    //const response = await userRequest.delete(`orders/${id}`);
    //dispatch(deleteOrderSuccess(response.data));
  //} catch (error) {
    //dispatch(deleteOrderFailure());
    //console.error(error);
  //}
//}

//USER
async function registerRequest(dispatch, user) {
  dispatch(loginStart());
  try {
    const registerResponse = await publicRequest.post("/auth/signup", user);
    const userId = await registerResponse.data._id;
    dispatch(loginSuccess(registerResponse.data));
  } catch (error) {
    dispatch(loginFailure());
  }
}

//async function updateUser(id, currentUser, dispatch) {
  //dispatch(updateUserInfoStart());
  //try {
    //const response = await userRequest.patch(`/users/${id}`, currentUser);
    //dispatch(updateUserInfoSuccess(response.data));
  //} catch (error) {
    //dispatch(updateUserInfoFailure());
  //}
//}

export {
  getOrders, registerRequest
};
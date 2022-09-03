import { endpointURL } from "./ApiConfig";
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit';
import { verifyUser } from "./singleComAPIcall";

// one way

export const forgotPasswordAsync = createAsyncThunk(
    "login/forgotPassword",
    async (args) => {
      const { user } = args;
      // axios.request can be used once it is configured by default using axios.create
      const response = axios.get(`${endpointURL}/dsa/user/forgetPassword`, {
        params: {
          username: user,
        },
      });
      const decResponse = JSON.stringify(response);
      try {
        return JSON.parse(decResponse);
      } catch (error) {
        return null;
      }
    }
  );


 // 2nd way

 export const verifyUserAsync = createAsyncThunk(
    "login/verifyUser",
    async (args) => {
      const { user, password } = args;
      // Stringifying the parameters to pass it in JSON request data
      const urlParam = JSON.stringify({
        username: user,
        password: password,
      });
      // encrypting the payload
      const encPayload = urlParam;
      // axios.request can be used once it is configured by default using axios.create
      const response = await verifyUser().request({ data: encPayload });
      const decResponse = response.data;
      response.data =JSON.parse(decResponse);
      
      try {
        return response;
      } catch (error) {
        return null;
      }
    }
  );

 
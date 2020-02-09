import axios, {AxiosPromise} from 'axios';
import {hasKey} from "../modules/admin";

interface ServerResponse {
  data: ServerData
}

interface ServerData {
  path: string
}

type HttpMethod = 'get' | 'post' | 'put';

export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_URL}`,
  timeout: 5000
});


export const requestHandler = async (params: any) => {
  console.log('[Request]: ' + JSON.stringify(params, null, 2));
  try{
    const { data } = await instance(params);
    return successHandler(data);
  }catch(e){
    errorHandler(e)
  }
};

export function successHandler(response: any) {
  console.log('[Response Data]: ');
  console.log(response.status, response.data);
}

function errorHandler(e: Error) {
  console.log('-----------------------------------------------------');
  console.log('[Error]: ' + JSON.stringify(e, null, 2));
}

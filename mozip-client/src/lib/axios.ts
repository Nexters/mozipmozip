import axios, {AxiosPromise} from 'axios';
import {hasKey} from "../modules/admin";

interface ServerResponse {
  data: ServerData
}

interface ServerData {
  path: string
}

export const requestHandler = async (params: any) => {
  console.log('[Request]: ' + JSON.stringify(params, null, 2));
  try{
    const { data } = await axios({
      ...params,
      url:`${process.env.REACT_APP_URL}`,
      timeout: 5000
    });
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
  console.log('[Error]: ' + JSON.stringify(e.message, null, 2));
  throw e
}

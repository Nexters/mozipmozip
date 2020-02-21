import axios from 'axios';

interface ServerResponse {
  data: ServerData
}

interface ServerData {
  path: string
}

export const requestHandler = async (params: any) => {
  try{
    const { path, ...args } = params;
    const config = {
      ...args,
      url: process.env.REACT_APP_URL + path,
      timeout: 5000,
      headers: params.headers ? params.headers : {}
    };
    console.log('[Request]: ' + JSON.stringify(config, null, 2));
    const data = await axios(config);
    return successHandler(data);
  }catch(e){
    errorHandler(e)
  }
};

export function successHandler(response: any) {
  console.log('[Response Data]: ');
  console.log(response.status, response.data);
  return response
}

function errorHandler(e: Error) {
  console.log('-----------------------------------------------------');
  console.log('[Error]: ' + JSON.stringify(e, null, 2));
  throw e
}

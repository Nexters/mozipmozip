//ducks structure

export const FILE_UPLOAD_REQUEST = 'base/FILE_UPLOAD_REQUEST' as const;
export const FILE_UPLOAD_SUCCESS = 'base/FILE_UPLOAD_SUCCESS' as const;
export const FILE_UPLOAD_FAILURE = 'base/FILE_UPLOAD_FAILURE' as const;

export const fileUpload = (formData: any) => ({type: FILE_UPLOAD_REQUEST, payload: {formData}});

export type BaseAction =
  | ReturnType<typeof fileUpload>
  | {type: 'base/FILE_UPLOAD_SUCCESS', payload: any}
  | {type: 'base/FILE_UPLOAD_FAILURE', payload: Error}


type BaseState = {
  path: string
}

const initialState = {
  path: '' // file path
};

export default function (state: BaseState = initialState, action: BaseAction) {
  switch (action.type) {
    case FILE_UPLOAD_REQUEST: {
      console.log('request payload', action.payload);
      return state;
    }
    case FILE_UPLOAD_SUCCESS: {
      console.log('response payload', action.payload);
      return state;
    }
    default:
      return state;
  }
}



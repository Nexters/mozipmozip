import {hasKey} from "../modules/admin";

export function makeFormData(obj: object){
  const formData = new FormData();
  for(const key of Object.keys(obj)){
    if(hasKey(obj, key)){
      formData.append(key, obj[key]);
    }
  }
  return formData
};

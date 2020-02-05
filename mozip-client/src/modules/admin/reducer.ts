import {AdminState, AdminAction} from "./types";

const initialState: AdminState = {
  create: {
    title: '',
    image: {
      name: '',
      imageData: ''
    },
    description: '',
    startDate: '',
    endDate: ''
  }
};

export default function (state: AdminState = initialState, action: AdminAction) {
  switch (action.type) {
    case "admin/SET_FORM_VALUES": {
      const {name, value} = action.payload;
      return {...state, [name]: value};
    }
    default:
      return state;
  }
}

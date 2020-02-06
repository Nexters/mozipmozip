import {AdminState, AdminAction} from "./types";

const initialState: AdminState = {
  recruit: {
    title: '',
    image: {
      name: '',
      imageData: '', // original
      resizeData: '' // resize
    },
    description: '',
    startDate: '',
    endDate: '',
    commonQuestions: [],
    developerQuestions: [],
    designerQuestions: []
  }// recruit create state
};

export default function (state: AdminState = initialState, action: AdminAction) {
  switch (action.type) {
    case "admin/SET_FORM_VALUES": {
      const {name, value} = action.payload;
      return {...state, recruit: {...state.recruit, [name]: value}};
    }
    default:
      return state;
  }
}

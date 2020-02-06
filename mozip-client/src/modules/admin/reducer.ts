import {AdminState, AdminAction} from "./types";

const initialState: AdminState = {
  title: '',
  image: {
    name: '',
    imageData: '', // original
    resizeData: '' // resize
  },
  description: '',
  startDate: '',
  endDate: '',
  questions: {
    commonQuestions: [{title: '', answer: {type: "long", length: 0}, score: 0}],
    developerQuestions: [{title: '', answer: {type: "long", length: 0}, score: 0}],
    designerQuestions: [{title: '', answer: {type: "long", length: 0}, score: 0}]
  }

};

export default function (state: AdminState = initialState, action: AdminAction) {
  switch (action.type) {
    case "admin/SET_FORM_VALUES": {
      const {name, value} = action.payload;
      return {...state, [name]: value};
    }
    case "admin/ADD_QUESTION": {
      const {name} = action.payload;
      return {
        ...state,
        questions: {
          ...state.questions,
          [name]: state.questions[name].concat({title: '', answer: {type: "long", length: 0}, score: 0})
        }
      };
    }
    default:
      return state;
  }
}

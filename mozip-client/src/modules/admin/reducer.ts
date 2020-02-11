import {AdminState, AdminAction, hasKey} from "./types";

const initialState: AdminState = {
  title: '',
  image: {
    name: '',
    imageData: '', // original
    resizeData: '' // resize
  },
  description: '',
  startDateTime: '',
  endDateTime: '',
  questions: {
    common: [{title: '', type: 'long', maxLength: 0, questionScore: 0}],
    programmer: [{title: '', type: 'long', maxLength: 0, questionScore: 0}],
    designer: [{title: '', type: 'long', maxLength: 0, questionScore: 0}]
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
      if (hasKey(state.questions, name)) {
        return {
          ...state,
          questions: {
            ...state.questions,
            [name]: state.questions[name].concat({title: '', type: 'long', maxLength: 0, questionScore: 0})
          }
        };
      } else return state;
    }
    case "admin/SET_QUESTION_VALUE": {
      const {type, keyName, index, value} = action.payload;
      const target = state.questions[type]; // targetArray
      return {
        ...state,
        questions: {
          ...state.questions,
          [type]: [...target.slice(0, index), {
            ...target[index],
            [keyName]: value
          }, ...target.slice(index + 1, target.length)]
        }
      };
    }
    default:
      return state;
  }
}

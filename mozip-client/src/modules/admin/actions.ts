export const SET_FORM_VALUES = 'admin/SET_FORM_VALUES' as const;
export const setFormValues = (name: string, value: any) => ({type: SET_FORM_VALUES, payload: {name, value}});



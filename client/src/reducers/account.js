const initialState = {
  loading: false
};
const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "change_name":
      return { ...state, currentName: action.value };
      break;
    default:
      return state;
      break;
  }
};

export default accountReducer;

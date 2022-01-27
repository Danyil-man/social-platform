const UPDATE_MESSAGE_BODY = "UPDATE_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogsdata: [
    { id: 1, name: "Danila" },
    { id: 2, name: "Antonina" },
    { id: 3, name: "Nikita" },
  ],

  messdata: [
    { id: 1, mess: "Hi, how are u?" },
    { id: 2, mess: "Im fine!" },
    { id: 3, mess: "Im too" },
  ],

  newMessageBody: "",
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_BODY:
    return {
      ...state,
      newMessageBody: action.messbody,
    };

    case SEND_MESSAGE:
      let messbody = state.newMessageBody;
    return {
      ...state,
      newMessageBody: "",
      messdata: [...state.messdata, { id: 4, mess: messbody } ]
     };

     default: return state;
    };
  }
export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  }
}

export const onNewMessageBodyCreator = (messbody) =>{
  return{
    type: UPDATE_MESSAGE_BODY,
    messbody: messbody,
  }
}
export default messageReducer;

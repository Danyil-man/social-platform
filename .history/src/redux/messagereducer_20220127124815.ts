import { InferActionType } from "./reduxStore";

const SEND_MESSAGE = "SEND_MESSAGE";


interface DialogType {
  id: number;
  name: string;
}

interface MessageType {
  id: number;
  mess: string;
}

export interface InitialStateType {
  dialogsdata: Array<DialogType>;
  messdata: Array<MessageType>;
}

let initialState:InitialStateType = {
  dialogsdata: [
    { id: 1, name: "Danila" },
    { id: 2, name: "Vova" },
    { id: 3, name: "Vlasd" },
  ],// as Array<DialogType>,

  messdata: [
    { id: 1, mess: "Hi, how are u?" },
    { id: 2, mess: "Im fine!" },
    { id: 3, mess: "Im too" },
  ] //as Array<MessageType>,

};

//export type initialStateType = typeof initialState;

type ActionCreatorTypes = InferActionType<typeof actions>

const messageReducer = (state = initialState, action:ActionCreatorTypes):InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      let messbody = action.newMessageBody;
    return {
      ...state,
      messdata: [...state.messdata, { id: 4, mess: messbody } ]
     };

     default: return state;
    };
  }

  export const actions = {
    sendMessageCreator: (newMessageBody: string) => {
      return {
        type: SEND_MESSAGE,
        newMessageBody
      } as const
    }
  }



export default messageReducer;

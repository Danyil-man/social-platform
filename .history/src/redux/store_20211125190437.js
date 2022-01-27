import profileReducer from "./profilereducer";
import messageReducer from "./messagereducer";
import sidebarReducer from "./sidebarreducer";

const UPDATE_MESSAGE_BODY = "UPDATE_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let Initialstore = {
  _state: {
    profilePage: {
      postdata: [
        { id: 1, user: "Danila", mess: "Hi, how are u?", like: 18 },
        { id: 2, user: "Antonina", mess: "Its my first postI", like: 44 },
        { id: 3, user: "Nikita", mess: "I won 1m$", like: 21 },
      ],
      newPostText: "",
    },

    messagePage: {
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
    },
    sidebar: {},
  },

  _rerendertree() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._rerendertree = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = messageReducer(this._state.messagePage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._rerendertree(this._state);
  },
};

export default Initialstore;

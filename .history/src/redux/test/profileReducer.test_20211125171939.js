import profileReducer, { addPostActionCreator } from "../profilereducer";

test("new post should be added", () => {
  let action = addPostActionCreator("Hello Test");

  let state = {
    postdata: [
      { id: 1, user: "Danila", mess: "Hi, how are u?", like: 18 },
      { id: 2, user: "Antonina", mess: "Its my first postI", like: 44 },
      { id: 3, user: "Nikita", mess: "I won 1m$", like: 21 },
    ],
  };

  let newState = profileReducer({}, action);
});

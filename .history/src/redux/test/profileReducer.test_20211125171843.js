import profileReducer, { addPostActionCreator } from "../profilereducer";

test("new post should be added", () => {
  let action = addPostActionCreator("Hello Test");
  let newState = profileReducer({}, action);
});

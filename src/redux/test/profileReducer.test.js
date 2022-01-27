// import profileReducer, {
//   addPostActionCreator,
//   deletePost,
// } from "../profilereducer";

// let state = {
//   postdata: [
//     { id: 1, user: "Danila", mess: "Hi, how are u?", like: 18 },
//     { id: 2, user: "Antonina", mess: "Its my first postI", like: 44 },
//     { id: 3, user: "Nikita", mess: "I won 1m$", like: 21 },
//   ],
// };

// test("length of posts 4", () => {
//   let action = addPostActionCreator("Hello Test");

//   let newState = profileReducer(state, action);

//   expect(newState.postdata.length).toBe(4);
//   expect(newState.postdata[3].mess).toBe("Hello Test");
// });

// test("length after deleting decrement", () => {
//   let action = deletePost(1);

//   let newState = profileReducer(state, action);

//   expect(newState.postdata.length).toBe(2);
// });

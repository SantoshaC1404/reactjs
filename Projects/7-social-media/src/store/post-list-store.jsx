import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  } else if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.id,
    );
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST,
  );

  const addPost = ({ userId, title, body, tags, reactions }) => {
    console.log("Adding post:", { userId, title, body, tags, reactions });
    const post = {
      id: Date.now().toString(),
      userId: userId,
      title: title,
      body: body,
      tags: tags,
      reactions: reactions,
    };
    dispatchPostList({ type: "ADD_POST", payload: post });
  };

  const deletePost = (postId) => {
    console.log(`Deleting post with id: ${postId}`);
    dispatchPostList({ type: "DELETE_POST", payload: { id: postId } });
  };

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to the beach this weekend!",
    body: "Can't wait to relax and soak up the sun. Who's coming with me?",
    reactions: 2,
    userId: "user-2",
    tags: ["beach", "weekend", "fun"],
  },
  {
    id: "2",
    title: "Just finished a great book!",
    body: "I highly recommend 'The Great Gatsby' to everyone. Such a classic!",
    reactions: 5,
    userId: "user-3",
    tags: ["books", "reading", "recommendation"],
  },
];

export default PostListProvider;

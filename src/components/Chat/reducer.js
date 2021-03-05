const reducer = (state, action) => {
  const {
    type,
    data: { users, messages },
  } = action;
  switch (type) {
    case 'DATA_RESPONSE_SUCCESS': {
      const usersMap = new Map();

      users.forEach(user => usersMap.set(user.id, user));

      const messagesWithAuthors = messages.map(msg => ({
        ...msg,
        author: usersMap.get(msg.authorId),
      }));

      return {
        ...state,
        users,
        messages: messagesWithAuthors,
      };
    }

    default:
      return state;
  }
};

export default reducer;

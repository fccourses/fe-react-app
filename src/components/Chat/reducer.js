const reducer = (state, action) => {
  switch (action.type) {
    case 'DATA_RESPONSE_SUCCESS': {
      const {
        data: { users, messages },
      } = action;

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
    case 'DATA_RESPONSE_ERROR': {
      const { error } = action;

      return {
        ...state,
        error,
      };
    }

    default:
      return state;
  }
};

export default reducer;

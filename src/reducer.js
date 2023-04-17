export const initData = {
  categories: [],
  books: [],
  showBooks: false,
};

function reduce(state, action) {
  switch (action.type) {
    case "ADD_TO_CATEGORIES":
      return {
        ...state,
        categories: [...state.categories, action.payloud],
      };
    case "REMOVE_FROM_CATEGORIES":
      var tab = [...state.categories];
      var index = tab.indexOf(action.payloud);
      tab.splice(index, 1);
      return {
        ...state,
        categories: [...tab],
      };
    case "ADD_TO_BOOKS":
      return {
        ...state,
        books: [...state.books, action.payloud],
      };
    case "REMOVE_FROM_BOOKS":
      tab = [...state.books];
      index = tab.indexOf(action.payloud);
      tab.splice(index, 1);
      return {
        ...state,
        books: [...tab],
      };
    default:
      return state;
  }
}

export default reduce;

const initialState = {};

export default function cartReducer(state = initialState, action) {
  const stateCopy = { ...state };
  switch (action.type) {
    case "add-item":
      stateCopy[action.item.id]
        ? (stateCopy[action.item.id].quantity += 1)
        : (stateCopy[action.item.id] = { ...action.item, quantity: 1 });
      return stateCopy;
    case "remove-item":
      delete stateCopy[action.id];
      return stateCopy;
    case "update-quantity":
      stateCopy[action.id].quantity = action.quantity;
      return stateCopy;
    default:
      return stateCopy;
  }
}

const initialState = {
  orders : []
}

export const orderReducer = (state = initialState, action) => {
  if(action.type === "ADD_ORDER"){
    return {
      orders : [...state.orders, action.payload]
    }
  }else {
    return state
  }
}
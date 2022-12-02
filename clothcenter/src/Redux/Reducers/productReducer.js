let defaultState = {
  productDetail: []
};

const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      console.log('product added');
      return {
        ...state,
        productDetail: [...state.productDetail, action.payload]
      }
    }

    default:
      return state;
  }
};


export default productReducer
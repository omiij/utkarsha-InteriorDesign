import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsData: [],
  categoryProduct: [],
  selectedProducts: [],
};

const storeSlice = createSlice({
  name: "AppStore",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.productsData = action.payload;
    },
    getCategoryData: (state, action) => {
      state.categoryProduct = state.productsData?.filter((item) => {
        if (item?.category === action?.payload) {
          return item;
        }
      });
    },
    addProductToCart: (state, action) => {
      const productIndex = state.selectedProducts.findIndex(
        (item) => item.id === action.payload
      );

      if (productIndex !== -1) {
        // If product already exists, increase count and update total price
        state.selectedProducts[productIndex].count += 1;
        state.selectedProducts[productIndex].totalPrice +=
          state.selectedProducts[productIndex].price;
      } else {
        // Find the product from productsData and add it with count & totalPrice
        const product = state.productsData?.find(
          (item) => item.id === action.payload
        );

        if (product) {
          state.selectedProducts.push({
            ...product,
            count: 1,
            totalPrice: product.price,
          });
        }
      }
    },

    removeProductFromCart: (state, action) => {
      state.selectedProducts = state.selectedProducts.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  addProducts,
  getCategoryData,
  addProductToCart,
  removeProductFromCart,
} = storeSlice.actions;
export const AppStore = storeSlice.reducer;

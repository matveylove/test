import { createSlice } from "@reduxjs/toolkit";
import {
  product1,
  product3,
  product4,
  product5,
} from "../../assets/productImages";
import { feature1, feature2, feature3 } from "../../assets/productIcons";

const initialState = {
  products: [
    {
      id: 1,
      title: "205/55R16 PIRELLI CINTURATO P7 91VPIRELLI CINTURATO P7 91V",
      price: {
        currentPrice: 6750,
        oldPrice: 7000,
      },
      image: product1,
      rating: 1,
      reviews: 2,
      feature: [
        {
          icon: feature1,
          title: "Зимняя",
        },
        {
          icon: feature2,
          title: "Шипованная",
        },
        {
          icon: feature3,
          title: "Грязевая",
        },
      ],
    },
    {
      id: 2,
      title: "205/55R16 PIRELLI CINTURATO P7 91VPIRELLI CINTURATO P7 91V",
      price: {
        currentPrice: 6750,
        oldPrice: 7000,
      },
      image: product3,
      rating: 2,
      reviews: 10,
      feature: [
        {
          icon: feature1,
          title: "Зимняя",
        },
        {
          icon: feature2,
          title: "Шипованная",
        },
        {
          icon: feature3,
          title: "Грязевая",
        },
      ],
    },
    {
      id: 3,
      title: "205/55R16 PIRELLI CINTURATO P7 91VPIRELLI CINTURATO P7 91V",
      price: {
        currentPrice: 6750,
        oldPrice: 7000,
      },
      image: product3,
      rating: 4,
      reviews: 11,
      feature: [
        {
          icon: feature1,
          title: "Зимняя",
        },
        {
          icon: feature2,
          title: "Шипованная",
        },
        {
          icon: feature3,
          title: "Грязевая",
        },
      ],
    },
    {
      id: 4,
      title: "205/55R16 PIRELLI CINTURATO P7 91VPIRELLI CINTURATO P7 91V",
      price: {
        currentPrice: 6750,
        oldPrice: 7000,
      },
      image: product4,
      rating: 3,
      reviews: 5,
      feature: [
        {
          icon: feature1,
          title: "Зимняя",
        },
        {
          icon: feature2,
          title: "Шипованная",
        },
        {
          icon: feature3,
          title: "Грязевая",
        },
      ],
    },
    {
      id: 5,
      title: "205/55R16 PIRELLI CINTURATO P7 91VPIRELLI CINTURATO P7 91V",
      price: {
        currentPrice: 6750,
        oldPrice: 7000,
      },
      image: product5,
      rating: 2,
      reviews: 4,
      feature: [
        {
          icon: feature1,
          title: "Зимняя",
        },
        {
          icon: feature2,
          title: "Шипованная",
        },
        {
          icon: feature3,
          title: "Грязевая",
        },
      ],
    },
    {
      id: 6,
      title: "205/55R16 PIRELLI CINTURATO P7 91VPIRELLI CINTURATO P7 91V",
      price: {
        currentPrice: 6750,
        oldPrice: 7000,
      },
      image: product1,
      rating: 5,
      reviews: 1,
      feature: [
        {
          icon: feature1,
          title: "Зимняя",
        },
        {
          icon: feature2,
          title: "Шипованная",
        },
        {
          icon: feature3,
          title: "Грязевая",
        },
      ],
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const selectProducts = (state) => state.products.products;
export default productsSlice.reducer;

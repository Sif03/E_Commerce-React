import React, { createContext, useReducer } from "react";
import axios from "axios";
import ProductsReducer from "./ProductsReducer";

const initialState = {

    products: [],
    cart: [],

};

const API_URL = "http://localhost:3000";

export const ProductsContext = createContext(initialState);

export const ProductsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ProductsReducer, initialState);

    const getProducts = async () => {

        const res = await axios.get(API_URL + "/products");

        dispatch({

            type: "GET_PRODUCTS",

            payload: res.data,

        });

        return res;

    };

    const addCart = (product) => {

        dispatch({

            type: "ADD_CART",

            payload: product,

        });

    };

    return (

        <ProductsContext.Provider

            value={{
                products: state.products,
                cart: state.cart,
                getProducts,
                addCart

            }}

        >

            {children}

        </ProductsContext.Provider>

    );
}
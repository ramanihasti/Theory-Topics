// useRedux():

// process:
// first aapki browse(chrome) me redux toolkit name ki library open karna.
// unme quick start me jana.
// install karne ka command: npm install @reduxjs/toolkit react-redux
// ye install karna hain.
// aapki application ke src distribute me redux name ka ek folder create karna.
// unke bad usi folder me store.js name ki file create karni.
// redux folder ke andar slice name ka folder create karna.
// slice folder me slice.js nam eki file create karni.

// store.js file ka work:
// store: yani ki aapki dukan.
// ek store create karna hain.
// wo ek function leta hain wo hame reduxToolkit hi deta hain.
// wo function hain configureStore().
// function ek property leta hain.
// reducer: {}
// ye property ka use kyu karte hain?
// aapne jo slice banayi hain wo odene ke liye.
// aapke slice ka name or reducer function store ko de dena hain.
// means kya karna hain or kese karna hain.
// tohi wo slice hain aesa manega.
import {configureStore} from "@reduxjs/toolkit";
import { cartReducer } from "./slice/slice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;

// slice kya hain?
// slice means aapki dukan ka counter.
// slice store ka ek chota pease(tukda) hain.
// first aapko slice create karni padti hain.
// slice ek function leta hain. wo hame reduxToolkit hi banake deta hain.
// wo function hain createSlice().
// createSlice() function kuch property leta hain.
// createSlice() 3 property leta hain.
// unko hum object ke andar bhejenge.
// first property: slice ka name dena zaruri hain. // name: <kuchbhi>,
// secound property: starting value deni. // intialState: <starting value>,
// third property: aapka reducer function
//  reducers: {
    // aapka reducer function
    // ex: <function_name> : (state , action) { // block of code }
    // addToCart : (state , action) {}
// }

// bad me unko export kar dena hain isi liye puri application me unka use kar sake.
// aapke slice ka name or reducer function store ko de dena hain.
// means kya karna hain or kese karna hain wo pata store ko chale.
// tohi store slice hain aesa manega.

// puri application me store ka use karne ke liye kya karna padta hain?
// aapki application ke main page yani ki app.jsx me aana hain.
// useContext me jese hum top me provider bithate usi tarah.
// app.jsx folder me top me ek provider bithana.
// fir aap puri application me unka use kar sakte ho.
// wo provider ko aapka pura store de dena hain.
// ex. <Provider store={store}> </Provider>

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartList: [],
    total: 0,
}
console.log("initialState" , initialState);

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state , action) => {},
        removeFromCart: (state , action) => {},
        increaseQty: (state , action) => {},
        decreaseQty: (state , action) => {},
    }
});

export const {addToCart , removeFromCart , increaseQty , decreaseQty} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit"

const initialCartState = { items: [], cartChange: false }

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        replaceCart(state, action) {
            state.items = action.payload.items;
        },
        addItem(state, action) {
            const existingItems = [...state.items];
            const existingItem = existingItems.find(item => item.id === action.payload.id);
            state.cartChange = true;
            if (existingItem) {
                existingItem.quantity++;
                existingItem.total += existingItem.price;
            } else {
                const item = {
                    id: action.payload.id,
                    price: action.payload.price,
                    title: action.payload.title,
                    quantity: 1,
                    total: action.payload.price
                }
                existingItems.push(item);
            }
            state.items = existingItems;
        },
        removeItem(state, action) {
            let existingItems = [...state.items];
            const existingItem = existingItems.find(item => item.id === action.payload.id);
            state.cartChange = true;
            if (existingItem.quantity !== 1) {
                existingItem.quantity--;
                existingItem.total = existingItem.total - existingItem.price;
            } else {
                existingItems = existingItems.filter(item => item.id !== action.payload.id)
            }
            state.items = existingItems;
        }
    }
});

export default cartSlice;
export const cartAction = cartSlice.actions;


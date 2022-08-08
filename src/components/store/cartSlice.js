import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        quantity: 0,
        showCart: false,
        changed: false,
    },
    reducers: {
        addToCart(state, action) {
            let data = action.payload
            const existingItem = state.items.find(item => item.id === data.id)
            if (existingItem) {
                existingItem.quantity += existingItem.quantity
                existingItem.price = existingItem.price

            }
            // else
            // {

            else {
                state.items.push({

                    id: data.id,
                    title: data.title,
                    price: data.price,
                    quantity: 1,
                    img: data.img
                })


                // })
                state.quantity++
            }
            // console.log(data)
            // console.log(existingItem)
        },


        showCart(state) {
            state.showCart = !state.showCart;
        }




    }
})
export const { showCart, addToCart } = cartSlice.actions;

export default cartSlice;
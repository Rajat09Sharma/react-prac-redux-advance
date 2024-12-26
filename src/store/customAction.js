import { cartAction } from "./cart";
import { uiAction } from "./ui";

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiAction.showNotification({
            status: "pending",
            title: "Sending",
            message: "Sending cart data......"
        }));

        const sendData = async () => {
            const response = await fetch("https://redux-advance-89115-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json", {
                method: "PUT",
                body: JSON.stringify(cart),
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error("Failed to send cart data.");
            }

            return response;
        }

        try {
            await sendData();
            dispatch(uiAction.showNotification({
                status: "success",
                title: "Success",
                message: "Cart data stored successfully."
            }));

        } catch (error) {
            dispatch(uiAction.showNotification({
                status: "error",
                title: "Error",
                message: error.message
            }));
        }

    }
}

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch("https://redux-advance-89115-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json");

            if (!response.ok) {
                throw new Error("Failed to fetch cart data.");
            }

            const data = await response.json()

            return data;
        }

        try {
            const data = await fetchData();
            const items = data.items || []
            dispatch(cartAction.replaceCart({ items: items }));
            // console.log(cart);


        } catch (error) {
            dispatch(uiAction.showNotification({
                status: "error",
                title: "Error",
                message: error.message
            }));
        }
    }
}
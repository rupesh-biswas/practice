import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, changeSeachTerm, addCar, removeCar } from "./slices/carsSlice";
import { formReducer, changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
})

export {
    store,
    changeSeachTerm,
    addCar,
    removeCar,
    changeName,
    changeCost
};
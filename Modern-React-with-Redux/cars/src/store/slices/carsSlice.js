import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSeachTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action) {
            // Assumption:
            // action.payload === {name:'ab', cost:140}
            state.data.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost
            });
        },
        removeCar(state, action) {
            // Assumption:
            // action.payload === the id of the car we want to remove
            const updated = state.data.filter((car) => car.id !== action.payload);
            state.data = updated;
        }
    }
})

export const { changeSeachTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
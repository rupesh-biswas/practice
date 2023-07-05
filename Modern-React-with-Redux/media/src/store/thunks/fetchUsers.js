import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3005/users');

    // DEV only
    await pause(100);

    return response.data;
})

// DEV ONLY
function pause(duration) {
    return new Promise((resolve) => {
        setTimeout(resolve, duration)
    })
}

// fetch.pending === "users/fetch/pending"
// fetch.fulfilled === "users/fetch/fulfilled"
// fetch.rejected === "users/fetch/rejected"

export { fetchUsers };
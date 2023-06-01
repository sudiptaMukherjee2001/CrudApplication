import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//create student details

export const createStudent = createAsyncThunk("stuCreate", async (stu) => {
    const res = await axios.post(`https://64716fee6a9370d5a41a5bba.mockapi.io/CrudApp`, stu)
    console.log("create response", res.data)
    return res.data;
})

//get all student

export let showStudent = createAsyncThunk("showUser", async () => {
    const response = await axios.get(`https://64716fee6a9370d5a41a5bba.mockapi.io/CrudApp`);
    console.log("it is a Show all user response", response)
    return response.data;
})

//Update student Details

export const updateStudent = createAsyncThunk("updateStudent", async (data) => {
    const { id, name, email, rollNum, phoneNumber } = data;
    console.log(`update action`, data);
    const res = await axios.put(`https://64716fee6a9370d5a41a5bba.mockapi.io/CrudApp/${id}`, {
        name,
        email,
        rollNum,
        phoneNumber
    })
    return res.data
})

//Delete student

export const deleteStudent = createAsyncThunk("deleteStudent", async (id) => {

    let response = await axios.delete(`https://64716fee6a9370d5a41a5bba.mockapi.io/CrudApp/${id}`);
    return response.data;

})


export const studentSlice = createSlice({
    name: "student database",
    initialState: {
        initialStudent: [],

        loading: false,
        error: null
    },
    reducers: {

    },
    extraReducers: {
        [showStudent.pending]: (initialState) => {
            initialState.loading = true
        },
        [showStudent.fulfilled]: (initialState, action) => {
            initialState.loading = false
            // console.log(action, "action is in show");
            initialState.initialStudent = action.payload;
        },
        [showStudent.rejected]: (initialState, action) => {
            initialState.error = action.payload
        },
        [updateStudent.fulfilled]: (initialState, action) => {
            initialState.loading = false
            initialState.initialStudent = initialState.initialStudent.map((ele) => {
                return (
                    ele.id === action.payload.id ? action.payload : ""
                )
            })
        },

        [deleteStudent.fulfilled]: (initialState, action) => {
            initialState.initialStudent = initialState.initialStudent.filter((student) => student.id !== action.payload.id)
        }
    }
})

export default studentSlice.reducer;
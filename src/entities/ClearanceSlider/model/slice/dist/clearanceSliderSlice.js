"use strict";
exports.__esModule = true;
exports.clearanceSliderReducer = exports.clearanceSliderActions = exports.clearanceSliderSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var fetchClearanceSliderData_1 = require("../services/fetchClearanceSliderData");
var initialState = {
    isLoading: true,
    error: undefined
};
exports.clearanceSliderSlice = toolkit_1.createSlice({
    name: 'ClearanceSlider',
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        builder
            .addCase(fetchClearanceSliderData_1.fetchClearanceSliderData.pending, function (state) { })
            .addCase(fetchClearanceSliderData_1.fetchClearanceSliderData.fulfilled, function (state, action) {
            var _a, _b;
            state.data = (_b = (_a = action.payload) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.map(function (item) { var _a; return (_a = item.attributes) !== null && _a !== void 0 ? _a : {}; });
            state.isLoading = false;
        })
            .addCase(fetchClearanceSliderData_1.fetchClearanceSliderData.rejected, function (state) {
            state.isLoading = false;
            state.error = true;
        });
    }
});
// Action creators are generated for each case reducer function
exports.clearanceSliderActions = exports.clearanceSliderSlice.actions;
exports.clearanceSliderReducer = exports.clearanceSliderSlice.reducer;

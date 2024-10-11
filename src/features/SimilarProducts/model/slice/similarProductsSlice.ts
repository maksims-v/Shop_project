import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchSimilarProductsData } from '../services/fetchSimilarProductsData';
import { SimilarProductsResponse, SimilarProductsSchema } from '../types/similarProducts';

const initialState: SimilarProductsSchema = {
  isLoading: true,
  error: undefined,
};

export const similarProductsSlice = createSlice({
  name: 'similarProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSimilarProductsData.pending, (state) => {})
      .addCase(
        fetchSimilarProductsData.fulfilled,
        (state, action: PayloadAction<SimilarProductsResponse>) => {
          const formatData = action.payload?.data?.length
            ? action.payload?.data?.map((item) => ({
                slug: item?.attributes?.slug ?? '',
                title: item?.attributes?.title ?? '',
                imageUrl:
                  typeof item?.attributes?.image !== 'string'
                    ? item?.attributes?.image?.data[0]?.attributes?.formats?.thumbnail?.url
                    : '',
              }))
            : [];
          state.data = formatData;
          state.isLoading = false;
        },
      )
      .addCase(fetchSimilarProductsData.rejected, (state) => {
        state.isLoading = true;
        state.error = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: similarProductsActions } = similarProductsSlice;
export const { reducer: similarProductsReducer } = similarProductsSlice;

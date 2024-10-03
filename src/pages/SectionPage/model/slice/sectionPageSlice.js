const initialState = {
  mobile: false,
  newSearch: true,
  sale: false,
  searchFlag: false,
  sortValue: 'Sort By',
  status: null,
  error: null,
  allSizesFromApi: [],
  //data
  data: [],
  metaData: [],

  //filters
  inputSearchValue: '',
  pageCategory: [],
  pageCategoryChecked: [],
  category: [],
  categoryChecked: [],
  subCategory: [],
  subCategoryChecked: [],
  brands: [],
  brandsChecked: [],
  sizes: [],
  sizesChecked: [],
  priceMinAndMax: [1, 9999],
  changePrice: [1, 9999],

  //pagination
  currentPage: 1,
};

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Profile } from '../../types/profile';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  { rejectValue: string; state: StateSchema }
>('auth/fetchProfileData', async (_, { getState, rejectWithValue }) => {
  try {
    const jwt = Cookies.get('jwt');
    const data = getProfileForm(getState());
    const { id } = data;

    const response = await axios.put(
      `http://127.0.0.1:1337/api/users/${id}`,
      JSON.stringify(data),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
      },
    );

    if (!response.data) {
      throw new Error('error');
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('Вы ввели неверный логин или пароль');
  }
});

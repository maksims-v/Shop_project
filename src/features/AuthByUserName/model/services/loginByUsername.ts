import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';

const userData = {
  identifier: 'test@inbox.lv',
  password: '12345a',
};

export interface LoginByUsernameProps {
  identifier: string;
  password: string;
}

// export const loginByUsername = createAsyncThunk<
//   User,
//   LoginByUsernameProps,
//   { rejectValue: string }
// >('auth/login', async (userData, thunkAPI) => {
//   try {
//     const response = await axios.post('http://127.0.0.1:1337/api/auth/local', {
//       userData,
//     });

//     if (!response.data) {
//       throw new Error('error');
//     }

//     thunkAPI.dispatch(userActions.setAuthData(response.data));

//     return response.data;
//   } catch (e) {
//     console.log(e);
//     return thunkAPI.rejectWithValue('Вы ввели неверный логин или пароль');
//   }
// });

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>('auth/login', async function (credentials, { rejectWithValue }) {
  try {
    const response = await fetch('http://127.0.0.1:1337/api/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: credentials.identifier,
        password: credentials.password,
      }),
    });
    console.log(response);

    if (!response.ok) {
      throw new Error('error');
    }

    const data = response.json();

    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

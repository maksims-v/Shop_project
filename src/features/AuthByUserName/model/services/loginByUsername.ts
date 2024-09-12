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

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post(
      'http://127.0.0.1:1337/api/auth/local',
      {
        identifier: credentials.identifier,
        password: credentials.password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.data) {
      throw new Error('error');
    }

    thunkAPI.dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue('Вы ввели неверный логин или пароль');
  }
});

// export const loginByUsername = createAsyncThunk<
//   User,
//   LoginByUsernameProps,
//   { rejectValue: string }
// >('auth/login', async function (credentials, thunkAPI) {
//   try {
//     const response = await fetch('http://127.0.0.1:1337/api/auth/local', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         identifier: credentials.identifier,
//         password: credentials.password,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error('error');
//     }
//     const data = response.json();

//     thunkAPI.dispatch(userActions.setAuthData(data));

//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

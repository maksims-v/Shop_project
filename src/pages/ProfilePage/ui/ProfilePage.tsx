import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider/config/stateSchema';
import { useSelector, useStore } from 'react-redux';
import { profileActions, profileReducer } from 'entities/Profile/model/slice/ProfileSlice';
import { Box, Tabs, Tab } from '@mui/material';
import { ProfileCard } from 'entities/Profile';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from 'entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly';
import { fetchProfileData } from 'entities/Profile/model/services/fetchProfileData/fetchProfileData';

const ProfilePage = () => {
  const [value, setValue] = useState(0);
  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);

  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    store.reducerManager.add('profile', profileReducer);
    dispatch(fetchProfileData());
    dispatch({ type: '@init' });
    return () => {
      store.reducerManager.remove('profile');
      dispatch({ type: '@destroy' });
    };
  }, []);

  const handleChange = (event: React.SyntheticEvent, value: any) => {
    setValue(value);
  };

  const changeEmail = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(profileActions.updateProfile({ email: event.target.value || '' }));
    },
    [dispatch],
  );

  const changeUsername = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(profileActions.updateProfile({ username: event.target.value || '' }));
    },
    [dispatch],
  );

  const changeFullName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(profileActions.updateProfile({ fullName: event.target.value || '' }));
    },
    [dispatch],
  );

  const changeLastName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(profileActions.updateProfile({ lastName: event.target.value || '' }));
    },
    [dispatch],
  );

  const changeCity = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(profileActions.updateProfile({ city: event.target.value || '' }));
    },
    [dispatch],
  );

  const changeAdress = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(profileActions.updateProfile({ adress: event.target.value || '' }));
    },
    [dispatch],
  );

  const changePostCode = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(profileActions.updateProfile({ postCode: event.target.value || '' }));
    },
    [dispatch],
  );

  const changePhone = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(profileActions.updateProfile({ phone: Number(event.target.value) || '' }));
    },
    [dispatch],
  );

  const changeCountry = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(profileActions.updateProfile({ country: event.target.value || '' }));
    },
    [dispatch],
  );

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="My profile" />
        <Tab label="My orders" />
        <Tab label="Delivery address" />
      </Tabs>
      {value === 0 && (
        <ProfileCard
          data={formData}
          error={error}
          isLoading={isLoading}
          readonly={readonly}
          changeUsername={changeUsername}
          changeAdress={changeAdress}
          changeCity={changeCity}
          changeCountry={changeCountry}
          changeEmail={changeEmail}
          changeFullName={changeFullName}
          changePhone={changePhone}
          changeLastName={changeLastName}
          changePostCode={changePostCode}
        />
      )}
    </Box>
  );
};

export default ProfilePage;

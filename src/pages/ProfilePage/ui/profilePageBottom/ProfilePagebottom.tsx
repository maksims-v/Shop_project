import { Box, Button } from '@mui/material';
import { profileActions } from 'entities/Profile';
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData/updateProfileData';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/hook';

export const ProfilePagebottom = () => {
  const dispatch = useAppDispatch();

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  return (
    <Box pt="10px" display="flex" justifyContent="space-between" maxWidth="250px" margin="0 auto">
      <Button onClick={onCancelEdit} variant="contained" color="error" sx={{ width: '80px' }}>
        Cancel
      </Button>
      <Button onClick={onSave} variant="contained" color="success" sx={{ width: '80px' }}>
        Save
      </Button>
    </Box>
  );
};

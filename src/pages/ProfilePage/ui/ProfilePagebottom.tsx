import { Box, Button } from '@mui/material';
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData/updateProfileData';
import { useAppDispatch } from 'shared/lib/hooks/hook';

export const ProfilePagebottom = () => {
  const dispatch = useAppDispatch();

  const onSave = () => {
    dispatch(updateProfileData());
  };

  return (
    <Box pt="10px" display="flex" justifyContent="space-between">
      <Button variant="contained" color="error" sx={{ width: '80px' }}>
        Cancel
      </Button>
      <Button onClick={onSave} variant="contained" color="success" sx={{ width: '80px' }}>
        Save
      </Button>
    </Box>
  );
};

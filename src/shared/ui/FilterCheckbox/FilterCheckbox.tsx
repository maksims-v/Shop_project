import { FormGroup, FormControlLabel, Checkbox, FormControl, Typography } from '@mui/material';
import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/hook';

export interface FilterCheckboxProps {
  data?: string[];
  title?: string | '';
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  mobile?: boolean;
}

export const FilterCheckbox = memo((props: FilterCheckboxProps) => {
  const { data = [], handleChange, title, mobile = false } = props;

  return (
    <>
      {!mobile && (
        <Typography sx={{ mb: '2px' }} fontWeight="bold">
          {title?.toUpperCase()}
        </Typography>
      )}
      <FormControl sx={{ pl: '8px' }} component="fieldset" variant="standard">
        <FormGroup>
          {data?.length > 0 &&
            data?.map((item, index) => {
              if (item !== 'all') {
                return (
                  <FormControlLabel
                    control={
                      <Checkbox
                        disabled={false}
                        sx={{ p: '2px' }}
                        onChange={handleChange}
                        name={item.toLowerCase()}
                      />
                    }
                    label={item.charAt(0).toUpperCase() + item.slice(1)}
                    key={item}
                  />
                );
              }
            })}
        </FormGroup>
      </FormControl>
    </>
  );
});

import { TextField } from '@mui/material';
import React from 'react';

const InputMui = ({
  onChange,
  onBlur,
  value,
  className,
  touched,
  helperText,
  errors,
  theme,
}: any) => {
  return (
    <TextField
      fullWidth
      margin="normal"
      id="name"
      name="name"
      label="Search"
      variant="outlined"
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      className={className}
      error={touched && Boolean(errors)}
      helperText={helperText}
      color="primary" // Использует основной цвет из темы
      InputLabelProps={{
        style: { color: 'white' },
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white', // Цвет рамки
          },
          '&:hover fieldset': {
            borderColor: 'blue', // Цвет рамки при наведении
          },
          '&.Mui-focused fieldset': {
            borderColor: 'white', // Цвет рамки при фокусе
          },
        },
      }}
      // sx={{
      //   // Дополнительные стили
      //   margin: 2,

      //   '& .MuiOutlinedInput-root': {
      //     '& fieldset': {
      //       borderColor: theme.palette.primary.main, // Цвет рамки
      //     },
      //     '&:hover fieldset': {
      //       borderColor: theme.palette.primary.main, // Цвет рамки при наведении
      //     },
      //     '&.Mui-focused fieldset': {
      //       borderColor: theme.palette.primary.main, // Цвет рамки при фокусе
      //     },
      //   },
      // }}
    />
  );
};

export default InputMui;

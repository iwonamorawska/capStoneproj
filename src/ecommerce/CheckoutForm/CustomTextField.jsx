import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

function FormInput({ name, label, required }) {

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label={label}
            required={required}
            error={!!error}
            helperText={error ? error?.message : ''}
          />
        )}
        {...name}
      />
      
    </Grid>
  );
}

export default FormInput;
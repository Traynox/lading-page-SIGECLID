import React from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import { TextField } from '@mui/material';

const DatosInput = ({ name, label, required, type }) => {
    const { control } = useFormContext();
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                    onChange={onChange}
                    onBlur={onBlur}
                    fullWidth
                    value={value || ''}
                    label={label}
                    required={required}
                    variant="standard"
                    type={type}
                />
            )}
        />
    )
}

export default DatosInput
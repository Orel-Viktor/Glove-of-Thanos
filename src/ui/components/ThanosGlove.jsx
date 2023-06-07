// Core
import React from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
// Components
import { TextField } from './_Forms/TextField';
import { Button } from './Button';
// Parts
import { Grid, Box } from '@mui/material';

// Engine
import { addHeroAsync } from '../../engine/core/thanos-glove/saga/asyncActions';

export function ThanosGlove() {
   const dispatch = useDispatch();

   const onValidate = (value) => {
      const errors = {};

      value.thanosGlove === undefined
         ? (errors.thanosGlove = 'введіть значеня')
         : null;

      return errors;
   };
   const onSubmit = (values, formApi) => {
      dispatch(addHeroAsync(values));
      const { reset } = formApi;
      reset();
   };
   return (
      <div>
         <Form
            validate={onValidate}
            onSubmit={onSubmit}
            render={(formProps) => {
               const { handleSubmit, valid } = formProps;
               return (
                  <Box
                     sx={{ marginBottom: '80px' }}
                     component="form"
                     onSubmit={handleSubmit}
                  >
                     <Grid
                        spacing={2}
                        sx={{
                           display: 'flex',
                           justifyContent: 'space-between',
                           alignItems: 'center',
                        }}
                        container
                     >
                        <Grid item={true} xs={5}>
                           <Field
                              name="thanosGlove"
                              label="thanosGlove"
                              component={TextField}
                           />
                        </Grid>
                        <Grid item={true} xs={3}>
                           <Button
                              className={
                                 !valid
                                    ? '  custom-button-shadow root button-shadow'
                                    : null
                              }
                              type="submit"
                              xs={4}
                              disabled={!valid}
                           >
                              Додати героя
                           </Button>
                        </Grid>
                     </Grid>
                  </Box>
               );
            }}
         />
      </div>
   );
}

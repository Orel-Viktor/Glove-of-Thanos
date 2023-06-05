// Core
import React from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
// Components
import { TextField } from './_Forms/TextField';
import { Button } from './Button';
// Parts
import { Grid, Box } from '@mui/material';

// Engine
import { addHeroAsync } from '../../engine/core/thanos-glove/saga/asyncActions';
import { selectorsThanosGlove } from '../../engine/core/thanos-glove/selectors';

export function ThanosGlove() {
   const dispatch = useDispatch();
   const hero = useSelector(selectorsThanosGlove.heroes);
   console.log(hero);

   //    const onValidate = (value) => {
   //       const errors = {};
   //       const regExpDigit = /^\d+$/;
   //       if (value.tracking === undefined) {
   //          errors.tracking = 'Введите значние';
   //       } else if (!regExpDigit.test(value.tracking)) {
   //          errors.tracking =
   //             'допускаются только числа,возможно в поле есть пробелы';
   //       } else if (value.tracking.length < 14) {
   //          errors.tracking = 'вы ввели меньше 14 цифр';
   //       } else if (value.tracking.length > 14) {
   //          errors.tracking = 'вы ввели больше 14 цифр';
   //       }
   //       return errors;
   //    };
   const onSubmit = (values, formApi) => {
      dispatch(addHeroAsync(values));
      const { reset } = formApi;
      reset();
   };
   return (
      <div>
         <Form
            // initialValues={{
            //    tracking: currentTrackingNumber,
            // }}
            // validate={onValidate}
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
                              Send
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

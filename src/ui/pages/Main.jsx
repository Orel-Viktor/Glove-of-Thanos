// Core
import React from 'react';
// Parts
import { Box } from '@mui/material';
// Components
import { ThanosGlove } from '../components/ThanosGlove';
import { Heroes } from '../components/Heroes';

export function Main() {
   return (
      <Box component="div">
         Thanos Glove
         <ThanosGlove />
         <Heroes />
      </Box>
   );
}

// Core
import React from 'react';
import { useSelector } from 'react-redux';
// Engine
import { selectorsThanosGlove } from '../../engine/core/thanos-glove/selectors';
// Parts
import { Box } from '@mui/material';

export function Heroes() {
   const heroes = useSelector(selectorsThanosGlove.heroes);
   console.log('Герои', heroes);
   return (
      <Box>
         {heroes.length ? (
            heroes.map((elem, id) => {
               return (
                  <Box key={elem + id}>
                     <HeroesInner heroes={heroes[id]} />
                  </Box>
               );
            })
         ) : (
            <Box>Герої</Box>
         )}
      </Box>
   );
}

export function HeroesInner(props) {
   const { heroes } = props;

   return <div>{heroes}</div>;
}

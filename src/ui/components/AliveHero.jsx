// Core
import React from 'react';
import { useSelector } from 'react-redux';
// Engine
import { selectorsThanosGlove } from '../../engine/core/thanos-glove/selectors';
// Parts
import { Box } from '@mui/material';
// Components

export function AliveHero() {
   const aliveHero = useSelector(selectorsThanosGlove.aliveHero);
   return (
      <Box>
         {aliveHero.length
            ? aliveHero.map((elem, id) => {
                 return (
                    <Box key={elem + id}>
                       <AliveHeroInner hero={elem} />
                    </Box>
                 );
              })
            : null}
      </Box>
   );
}

export function AliveHeroInner(props) {
   const { hero } = props;

   return (
      <Box
         sx={{
            cursor: 'pointer',
            fontSize: '30px',
            color: 'primary.main',
            marginRight: '10px',
         }}
      >
         <Box
            sx={{
               color: 'secondary.info',
               fontSize: '30px',
            }}
         >
            <div> Герой, що вижив {hero.heroName} </div>
            <img src={hero.heroPicture} alt={hero.heroName} />
         </Box>
      </Box>
   );
}

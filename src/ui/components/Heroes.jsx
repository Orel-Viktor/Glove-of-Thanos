// Core
import React from 'react';
import { useSelector } from 'react-redux';
// Engine
import { selectorsThanosGlove } from '../../engine/core/thanos-glove/selectors';
// Parts
import { Box } from '@mui/material';
// Components
import { KillHeroesButton } from './KillHeroes';
import { AliveHero } from './AliveHero';

export function Heroes() {
   const heroes = useSelector(selectorsThanosGlove.heroes);
   const aliveHero = useSelector(selectorsThanosGlove.aliveHero);
   console.log(aliveHero);
   return aliveHero.length ? (
      <AliveHero />
   ) : (
      <Box>
         <KillHeroesButton sx={{ margin: '0 0 20px 0' }} />
         <Box sx={{ color: 'secondary.info', fontSize: '30px' }}>
            Герої що підлягают відбору
         </Box>

         {heroes.length
            ? heroes.map((elem, id) => {
                 return (
                    <Box
                       sx={{
                          fontSize: '20px',
                          color: 'secondary.main',
                       }}
                       key={elem + id}
                    >
                       <HeroesInner heroes={elem} />
                    </Box>
                 );
              })
            : null}
      </Box>
   );
}

export function HeroesInner(props) {
   const { heroes } = props;

   return <div>{heroes}</div>;
}

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
import { LoaderLinear } from './_Helpers/Loader';

export function Heroes() {
   const heroes = useSelector(selectorsThanosGlove.heroes);
   const aliveHero = useSelector(selectorsThanosGlove.aliveHero);
   const loading = useSelector(selectorsThanosGlove.loading);
   // console.log(aliveHero);
   return loading ? (
      <LoaderLinear />
   ) : aliveHero.length ? (
      <AliveHero />
   ) : (
      <Box>
         <KillHeroesButton sx={{ margin: '0 0 20px 0' }} />
         <Box sx={{ color: 'secondary.info', fontSize: '30px' }}>
            Герої що підлягают відбору
         </Box>
         <Box
            sx={{
               display: 'flex',
               alignItems: 'end',
               flexWrap: 'wrap',
               maxWidth: '100%',
            }}
         >
            {' '}
            {heroes.length
               ? heroes.map((elem, id) => {
                    return (
                       <Box
                          sx={{
                             width: '20%',
                             fontSize: '20px',
                             color: 'secondary.main',
                             margin: '0 40px 0 0',
                          }}
                          key={elem + id}
                       >
                          <HeroesInner heroes={elem} />
                       </Box>
                    );
                 })
               : null}
         </Box>
      </Box>
   );
}

export function HeroesInner(props) {
   const { heroes } = props;

   return (
      <Box>
         {' '}
         <div>{heroes.heroName}</div>
         <img src={heroes.heroPicture} alt={heroes.heroName} />
      </Box>
   );
}

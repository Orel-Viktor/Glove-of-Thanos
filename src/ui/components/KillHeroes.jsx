// Core
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Component
import { Button } from './Button';
// Engine
import { selectorsThanosGlove } from '../../engine/core/thanos-glove/selectors';
import { killHalfHeroes } from '../../engine/core/thanos-glove/saga/asyncActions';

export function KillHeroes(props) {
   const dispatch = useDispatch();
   const heroes = useSelector(selectorsThanosGlove.heroes);
   const killHeroes = () => {
      dispatch(killHalfHeroes(heroes));
   };
   const { sx } = props;

   return heroes.length > 1 ? (
      <Button onClick={killHeroes} sx={sx}>
         Зницщити половину героїв
      </Button>
   ) : null;
}

import { h } from 'preact';
import { RoutableProps } from 'preact-router';
import { farmers } from '../services/FarmersService';
import { FarmerCard } from '../components/FarmerCard';

import { Wrapper } from '../ui/containers/Wrapper';
import { Grid } from '../ui/grid/Grid';

import styles from './Farmers.styl';

export const Farmers = (_: RoutableProps) => (
  <Wrapper verticalPadding="1rem">
    <Grid className={styles.grid}>
      {farmers.map(farmer => (
        <FarmerCard farmer={farmer} />
      ))}
    </Grid>
  </Wrapper>
);

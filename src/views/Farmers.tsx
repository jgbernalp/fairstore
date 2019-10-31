import { h } from 'preact';
import { RoutableProps } from 'preact-router';
import { farmers } from '../services/FarmersService';
import { FarmerCard } from '../components/FarmerCard';

import { Wrapper } from '../ui/containers/Wrapper';
import { Grid } from '../ui/grid/Grid';

export const Farmers = (_: RoutableProps) => (
  <Wrapper verticalPadding="1rem">
    <Grid gridCols="repeat(auto-fill, minmax(250px, 1fr))">
      {farmers.map(farmer => (
        <FarmerCard farmer={farmer} />
      ))}
    </Grid>
  </Wrapper>
);

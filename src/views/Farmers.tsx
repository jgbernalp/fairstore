import { h } from 'preact';
import { RoutableProps } from 'preact-router';
import { FlexList } from '../ui/lists/FlexList';
import { farmers } from '../services/FarmersService';
import { FarmerCard } from '../components/FarmerCard';

import styles from './Farmers.styl';
import { Wrapper } from '../ui/containers/Wrapper';

export const Farmers = (props: RoutableProps) => (
  <Wrapper className={styles.container}>
    <FlexList center>
      {farmers.map(farmer => (
        <FarmerCard className={styles.farmerCard} farmer={farmer} />
      ))}
    </FlexList>
  </Wrapper>
);

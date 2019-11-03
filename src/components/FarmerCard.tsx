import { h, JSX, Fragment } from 'preact';
import { Card } from '../ui/card/Card';
import { Title } from '../ui/typography/Title';
import styles from './FarmerCard.styl';
import { Avatar } from '../ui/avatar/Avatar';
import { Farmer } from '../models/Farmer';
import { Grid } from '../ui/grid/Grid';
import { FlexCols } from '../ui/containers/FlexCols';

export interface ProcuctCardProps {
  farmer: Farmer;
}

export const FarmerCard = ({ farmer }: ProcuctCardProps & JSX.HTMLAttributes) => {
  return (
    <Card className={styles.farmerCard}>
      <Grid className={styles.grid}>
        <FlexCols verticalCenter>
          <Avatar src={farmer.avatar} />
          <div>
            <Title h4 className={styles.title}>
              {farmer.name}
            </Title>
            <Title h6 className={styles.subtitle}>
              Country
            </Title>
          </div>
        </FlexCols>

        <Fragment>{farmer.intro && <p className={styles.intro}>{farmer.intro}</p>}</Fragment>
      </Grid>
    </Card>
  );
};

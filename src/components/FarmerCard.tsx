import { h, JSX, Fragment } from 'preact';
import { Card } from '../ui/card/Card';
import { Title } from '../ui/typography/Title';
import styles from './FarmerCard.styl';
import { Avatar } from '../ui/avatar/Avatar';
import { Farmer } from '../models/Farmer';
import { Grid, GridAreaComponents } from '../ui/grid/Grid';
import { FlexCols } from '../ui/containers/FlexCols';

export interface ProcuctCardProps {
  farmer: Farmer;
}

export const FarmerCard = ({ farmer }: ProcuctCardProps & JSX.HTMLAttributes) => {
  return (
    <Card className={styles.farmerCard}>
      <Grid gap="0" areas={['titlearea', 'content']} gridCols="40px auto;">
        {({ Titlearea, Content }: GridAreaComponents) => (
          <Fragment>
            <Titlearea>
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
            </Titlearea>
            <Content>{farmer.intro && <p className={styles.intro}>{farmer.intro}</p>}</Content>
          </Fragment>
        )}
      </Grid>
    </Card>
  );
};

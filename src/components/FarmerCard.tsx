import { h, JSX } from 'preact';
import { Card } from '../ui/card/Card';
import { Title } from '../ui/typography/Title';
import styles from './FarmerCard.styl';
import { Avatar } from '../ui/avatar/Avatar';
import { Farmer } from '../models/Farmer';
import { FlexCols } from '../ui/containers/FlexCols';
import { FlexRows } from '../ui/containers/FlexRows';
import { classNames } from '../utils/classNames';

export interface ProcuctCardProps {
  farmer: Farmer;
}

export const FarmerCard = ({ farmer, className }: ProcuctCardProps & JSX.HTMLAttributes) => {
  return (
    <Card className={classNames(className, styles.farmerCard)}>
      <FlexRows>
        <FlexCols center>
          <Avatar src={farmer.avatar} />
          <FlexRows>
            <Title h4 className={styles.title}>
              {farmer.name}
            </Title>
            <Title h6 className={styles.subtitle}>
              Country
            </Title>
          </FlexRows>
        </FlexCols>
        {farmer.intro && <p className={styles.intro}>{farmer.intro}</p>}
      </FlexRows>
    </Card>
  );
};

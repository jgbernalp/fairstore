import { h } from 'preact';
import styles from './NumericStepper.styl';
import { AddIcon } from '../../icons/AddIcon';
import { LessIcon } from '../../icons/LessIcon';
import { classNames } from '../../utils/classNames';

import { useState, StateUpdater } from 'preact/hooks';

const setNumber = (setValue: StateUpdater<number>, value: number) => () => {
  if (value > 0 && value <= 30) {
    setValue(value);
  }
};

export const NumericStepper = () => {
  const [value, setValue] = useState(1);

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <button onClick={setNumber(setValue, value - 1)} className={classNames(styles.button, styles.less)}>
          <LessIcon />
        </button>
        <input disabled className={styles.input} type="number" value={value.toString()} />
        <button onClick={setNumber(setValue, value + 1)} className={classNames(styles.button, styles.add)}>
          <AddIcon />
        </button>
      </div>
    </div>
  );
};

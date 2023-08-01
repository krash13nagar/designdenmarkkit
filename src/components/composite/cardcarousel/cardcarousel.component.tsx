import React from 'react';
import { CardCarouselProps } from './cardcarousel.types';
import styles from './cardcarousel.module.scss';
import { DenTabs, DenTab } from '../../common';
import DenBox from '../../common/box/box.component';

export const CardCarousel = React.forwardRef<HTMLDivElement, CardCarouselProps>(
  ({ Component, componentPropsList }, ref) => {
    return (
      <DenBox ref={ref} className={styles.carouselWrapper}>
        <DenTabs
          onChange={() => {}}
          variant="scrollable"
          classes={{
            root: styles.tabsRoot,
            scrollButtons: styles.scrollButtons,
            indicator: styles.indicator,
          }}
          value={0}
          scrollButtons={'auto'}
        >
          {componentPropsList?.map((compProps, i) => {
            return (
              <DenTab
                key={compProps.id || i}
                component={Component}
                {...compProps}
              />
            );
          })}
        </DenTabs>
      </DenBox>
    );
  }
);

export default CardCarousel;

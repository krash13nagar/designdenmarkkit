import React from 'react';
import { CardCarouselProps } from './cardcarousel.types';
import styles from './cardcarousel.module.scss';
import { DenTabs, DenTab } from '../../common';
import DenBox from '../../common/box/box.component';

/**
 * CardCarousel Component.
 * @constructor
 * @param {React.FC} props.Component -  Component we want to show in the carousel
 * @param {any[]} props.componentPropsList - list having props to be sent to the list of Components passed to be shown in the carousel
 * ref is forwarded to parent element
 */

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
            flexContainer: styles.flexContainer,
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

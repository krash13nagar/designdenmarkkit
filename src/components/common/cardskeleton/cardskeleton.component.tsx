import * as React from 'react';
import DenGrid from '../grid/grid.component';
import DenSkeleton from '../skeleton/skeleton.component';
import { CardSkeletonTypes } from './cardskeleton.types';

export const DenCardSkeleton: React.FC<CardSkeletonTypes> = (props) => {
  const h = props.height ? props.height : 150;
  const w = props.width ? props.width : '100%';
  const i = props.items && props.items > 0 ? props.items : 1;
  const items = Array.from(Array(i).keys());

  const renderItems = (
    items: number[],
    width: string | number,
    height: string | number
  ) => {
    return items.map((_, index) => (
      <DenGrid
        item
        key={index}
        xl={3}
        lg={4}
        md={6}
        xs={12}
        sx={props.sx || {}}
        {...(props.singleColumn && { xl: 12, lg: 12, md: 12, xs: 12 })}
      >
        <DenSkeleton
          className="card-skeleton"
          animation={props.animation || 'wave'}
          key={index}
          variant={props.variant || 'rectangular'}
          width={width}
          height={height}
        />
      </DenGrid>
    ));
  };

  return (
    <DenGrid
      className="card-skeleton-wrapper"
      container
      rowSpacing={props.rowSpacing || '24px'}
      columnSpacing={props.columnSpacing || '24px'}
    >
      {renderItems(items, w, h)}
    </DenGrid>
  );
};

export default DenCardSkeleton;

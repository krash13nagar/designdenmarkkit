import React from 'react';
import style from './viewportblock.module.scss';
import { ViewPortBlockProps } from './viewportblock.types';
import { blockStyle, viewPortDimenssions } from './viewportblock.utils';

/**
 * LabelValue Component.
 * @constructor
 * @param {string} props.aspectRatio* - aspect ratio of blocks
 * @param {string} props.size @default {"small"} - size of block
 * @param {string} props.wrapperClassName  - classname of wrapper node
 * @param {string} props.blockClassName  - classname of the block node
 * for more details see http:localhost:6006
 */

export const ViewPortBlock = (props: ViewPortBlockProps) => {
  const {
    aspectRatio,
    label,
    size = 'small',
    wrapperClassName = style['viewportWrapper'],
    blockClassName = style['viewportBlock'],
    labelClassName = style['viewportLabel'],
    selected = false,
    onClick = () => {},
  } = props;
  const blockStyles = blockStyle(viewPortDimenssions(aspectRatio));
  return (
    <div className={`${wrapperClassName}`} onClick={onClick}>
      <div
        className={`${style['block-wrapper']}  ${style[size]} ${
          selected ? style['selected'] : ''
        }`}
      >
        <div className={blockClassName} style={blockStyles}>
          {aspectRatio}
        </div>
      </div>
      <span
        className={`${labelClassName} ${selected ? style['selected'] : ''}`}
      >
        {label}
      </span>
    </div>
  );
};
export default ViewPortBlock;

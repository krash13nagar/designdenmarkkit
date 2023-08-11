import React, { useRef } from 'react';
import style from './viewportblock.module.scss';
import { ViewPortBlockProps } from './viewportblock.types';
import { viewPortDimenssions } from './viewportblock.utils';
import { useAspectRatioBlock } from './useaspectratioblock';

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
  const parentRef = useRef<HTMLDivElement>(null);

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
  // const blockStyles = blockStyle(viewPortDimenssions(aspectRatio));
  const { width, height } = viewPortDimenssions(aspectRatio);
  const blockStyles = useAspectRatioBlock({
    aspectRatio: width / height,
    parentNode: parentRef?.current,
  });

  return (
    <div className={`${wrapperClassName}`} onClick={onClick}>
      <div
        className={`${style['block-wrapper']}  ${style[size]} ${
          selected ? style['selected'] : ''
        }`}
        ref={parentRef}
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

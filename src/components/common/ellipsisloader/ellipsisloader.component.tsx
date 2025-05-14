import React from 'react';
import './ellipsisloader.style.scss';
import { EllipsisLoaderProps } from './ellipsisloader.types';


/**
 * EllipsisLoader Component.
 * @constructor
 * @param {string} props.loadingText - (optional) Loading text to be shown
 * @param {string} props.className - (optional) className applied to container of EllipsisLoader
 */

export const EllipsisLoader: React.FC<EllipsisLoaderProps> = ({
  loadingText,
  className,
  sx
}) => {
  return (
    <div className={`ellipsis-loader-container ${className ? className : ''}`} >
      {loadingText && <div className={`loader--text`} style={sx}>{loadingText}</div>}
    </div>
  );
};

export default EllipsisLoader;

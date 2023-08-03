import React from 'react';
import './dotloader.style.scss';
import { DotLoaderProps } from './dotloader.types';

/**
 * DotLoader Component.
 * @constructor
 * @param {string} props.loadingText - (optional) Loading text to be shown
 * @param {string} props.className - (optional) className applied to container of DotLoader
 */

export const DotLoader: React.FC<DotLoaderProps> = ({
  loadingText,
  className,
}) => {
  return (
    <div className={`dot-loader-container ${className ? className : ''}`}>
      <div className="loader">
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
      </div>
      {loadingText && <div className="loader--text">{loadingText}</div>}
    </div>
  );
};

export default DotLoader;

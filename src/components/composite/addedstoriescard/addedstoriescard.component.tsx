import React, { useState, ReactNode } from 'react';
import { AddedStoriesCardProps } from './addedstoriescard.types';
import styles from './addedstoriescard.module.scss';
import DenCheckbox from '../../common/checkbox/checkbox.component';
import { DenTypography } from '../../common';

/**
 * AddedStoriesCard Component.
 * @constructor
 * @param  {boolean}props.checked - checkbox is checked or not
 * @param  {string} text - story text to be shown
 * @param {React.ReactNode} props.removeIcon -  (optional) delete icon
 * @param {React.ReactNode} props.popOutIcon -  (optional) pop out icon
 * @param {React.MouseEventHandler<HTMLSpanElement>} props.handlePopOut -  (optional) handler for pop out click
 * @param {React.MouseEventHandler<HTMLDivElement>} props.handleRemove - (optional) handler for delete icon click
 * @param {React.MouseEventHandler<HTMLDivElement>} props.classes - (optional) classes to override styles

 * ref is forwarded to parent element
 */

export const AddedStoriesCard = React.forwardRef<
  HTMLDivElement,
  AddedStoriesCardProps
>(
  (
    {
      text,
      checked,
      removeIcon,
      popOutIcon,
      handleRemove = () => {},
      handlePopOut = () => {},
      classes,
      showCheckbox = false,
      handleCheckboxChange = () => {},
      popOutTooltip,
      removeTooltip,
      sourceUrl = '',
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`${classes?.wrapperClass ? classes.wrapperClass : ''} ${
          styles.addedStoriesCardWrapper
        } ${showCheckbox ? styles.noShadow : ''}`}
      >
        <div className={styles.checkBoxWrapper}>
          <DenCheckbox
            sx={{
              padding: 0,
              visibility: showCheckbox ? 'visible' : 'hidden',
              color: '#D3E4FD',
            }}
            disableFocusRipple
            disableRipple
            checked={checked}
            onChange={handleCheckboxChange}
            classes={{ root: styles.checkboxRoot }}
          />
        </div>
        <span title={text} className={styles.textWrapper}>
          <DenTypography
            variant="body1"
            className={`${styles.text} ${styles.ellipsis}`}
          >
            {text}
          </DenTypography>
        </span>
        <div
          className={`${styles.iconsWrapper} ${
            showCheckbox ? styles.hide : ''
          }`}
        >
          {popOutIcon && (
            <span
              title={popOutTooltip}
              key="popouticon"
              className={`${styles.popOutIcon} ${
                removeIcon ? styles.margin : ''
              }`}
              onClick={(e) => handlePopOut?.(e, sourceUrl)}
            >
              {popOutIcon}
            </span>
          )}
          {removeIcon && (
            <span
              key="removeicon"
              title={removeTooltip}
              className={styles.removeIcon}
              onClick={(e) => handleRemove?.(e)}
            >
              {removeIcon}
            </span>
          )}
        </div>
      </div>
    );
  }
);

export default AddedStoriesCard;

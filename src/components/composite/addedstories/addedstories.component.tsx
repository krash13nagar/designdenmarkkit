import React, { useState, ReactNode } from 'react';
import { AddedStoriesProps } from './addedstories.types';
import styles from './addedstories.module.scss';
import { DenBox, DenButton, DenTooltip, DenTypography } from '../../common';
import { AddedStoriesCard } from '../addedstoriescard';
import DenCheckbox from '../../common/checkbox/checkbox.component';

/**
 * Addedstories Component.
 * @constructor
 * @param  props.stories - stories added to generate
 * @param {React.ReactNode} props.removeIcon -  (optional) delete icon
 * @param {React.ReactNode} props.popOutIcon -  (optional) pop out icon
 * @param {React.MouseEventHandler<HTMLSpanElement>} props.handlePopOut -  (optional) handler for pop out click
 * @param {React.MouseEventHandler<HTMLDivElement>} props.handleRemove - (optional) handler for delete icon click
 * @param {React.MouseEventHandler<HTMLDivElement>} props.handleGenerateStory - (optional) handler for generate story
 * @param {React.MouseEventHandler<HTMLDivElement>} props.handleCancel - (optional) handler for cancel button
 * @param {React.MouseEventHandler<HTMLDivElement>} props.classes - (optional) classes to override styles

 * ref is forwarded to parent element
 */

export const AddedStories = React.forwardRef<HTMLDivElement, AddedStoriesProps>(
  (
    {
      stories = [],
      removeIcon,
      popOutIcon,
      handleCancel = () => {},
      handleGenerateStory = () => {},
      handleRemove = () => {},
      handlePopOut = () => {},
      classes = {},
      headerLabel = 'Added Stories',
      footerNote = 'You can add a minimum of 2 and a maximum of 5 stories',
      footerNoteLabel = 'Note',
      generateButtonLabel = 'Generate Story',
      cancelButtonLabel = 'Cancel',
      removeButtonLabel = 'Remove',
      multiSelectToggleLabel = 'Remove stories from the list',
      multiSelectLabel = 'Select all',
      maxStoryCount = 5,
      minStoryCount = 2,
      noStoriesMessage = 'No Stories Added',
      countLabel = '',
    },
    ref
  ) => {
    const [multiSelectMode, setMultiSelectMode] = useState(false);

    const [storiesIndicesToRemove, setStoriesIndicesToRemove] = useState([]);

    const handleRemoveAllToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        setStoriesIndicesToRemove(stories.map((_, i) => i));
      } else {
        setStoriesIndicesToRemove([]);
      }
    };

    const handleRemoveSingle = (event: React.MouseEvent, index: number) => {
      handleRemove?.(event, index);
    };

    const handleCheckBoxChange = (
      event: React.ChangeEvent<HTMLInputElement>,
      index: number
    ) => {
      if (event.target.checked) {
        setStoriesIndicesToRemove((indices) => [...indices, index]);
      } else {
        const filtered = storiesIndicesToRemove.filter((idx) => idx !== index);
        setStoriesIndicesToRemove(filtered);
      }
    };

    const handleCancelClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setMultiSelectMode(false);
      setStoriesIndicesToRemove([]);
      if (handleCancel) {
        handleCancel?.(e);
      }
    };

    const handleRemoveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setMultiSelectMode(false);
      setStoriesIndicesToRemove([]);
      handleRemove?.(e, storiesIndicesToRemove);
    };

    const renderFooter = (multiSelectMode: boolean): ReactNode => {
      if (!multiSelectMode) {
        return (
          <>
            <DenTypography className={styles.footerNote}>
              {footerNote && (
                <>
                  {footerNoteLabel && (
                    <span className={styles.footerNoteLabel}>
                      <span
                        className={
                          stories?.length > maxStoryCount ||
                          stories?.length < minStoryCount
                            ? styles.danger
                            : ''
                        }
                      >
                        {footerNoteLabel}
                      </span>
                      {' : '}
                    </span>
                  )}
                  {footerNote}
                </>
              )}
            </DenTypography>
            <DenButton
              variant="contained"
              onClick={handleGenerateStory}
              disabled={
                !stories?.length ||
                stories?.length > maxStoryCount ||
                stories?.length < minStoryCount
              }
              sx={{ textWrap: 'nowrap' }}
            >
              {generateButtonLabel}
            </DenButton>
          </>
        );
      }
      return (
        <div className={styles.multiSelectModeButtons}>
          <DenButton
            variant="outlined"
            color="secondary"
            sx={{ mr: '0.5rem', borderColor: '#D2D8DF' }}
            onClick={handleCancelClick}
          >
            {cancelButtonLabel}
          </DenButton>
          <DenButton
            variant="outlined"
            color="error"
            onClick={handleRemoveClick}
            disabled={!storiesIndicesToRemove?.length}
          >
            {removeButtonLabel}
          </DenButton>
        </div>
      );
    };

    const renderMultiSelectToggle = (multiSelectMode: boolean): ReactNode => {
      if (!multiSelectMode) {
        return (
          <DenBox sx={{ ml: 'auto', width: 'fit-content', pr: '0.25rem' }}>
            <DenButton
              variant="text"
              onClick={() => setMultiSelectMode(true)}
              sx={{
                maxHeight: '1.5rem',
                '&:hover': { backgroundColor: 'inherit' },
              }}
              disabled={!(stories?.length > 0)}
            >
              {multiSelectToggleLabel}
            </DenButton>
          </DenBox>
        );
      }

      return (
        <div className={styles.selectAll}>
          <DenCheckbox
            sx={{
              padding: 0,
              mr: '0.75rem',
              color: '#D3E4FD',
            }}
            disableFocusRipple
            disableRipple
            onChange={handleRemoveAllToggle}
            checked={storiesIndicesToRemove.length == stories?.length}
            indeterminate={
              storiesIndicesToRemove.length > 0 &&
              storiesIndicesToRemove.length < stories?.length
            }
            classes={{ root: styles.checkboxRoot }}
          />
          <DenTypography variant="h4" className={styles.selectAllLabel}>
            {multiSelectLabel}
          </DenTypography>
        </div>
      );
    };

    const renderStoriesCards = () => {
      if (!(stories?.length > 0) && noStoriesMessage) {
        return (
          <DenTypography align="center" className={styles.noStoriesMessage}>
            {noStoriesMessage}
          </DenTypography>
        );
      }
      return stories?.map((story, index) => {
        return (
          <React.Fragment key={story.id}>
            <AddedStoriesCard
              text={story.title}
              sourceUrl={story.sourceUrl}
              showPopOutIcon={!!story.sourceUrl}
              handlePopOut={handlePopOut}
              handleRemove={(e) => handleRemoveSingle?.(e, index)}
              popOutIcon={popOutIcon}
              removeIcon={removeIcon}
              showCheckbox={multiSelectMode}
              checked={storiesIndicesToRemove?.includes(index)}
              handleCheckboxChange={(e) => handleCheckBoxChange(e, index)}
            />
            {index < stories.length - 1 && (
              <div className={styles.separator}></div>
            )}
          </React.Fragment>
        );
      });
    };

    return (
      <div
        ref={ref}
        className={`${classes?.root ? classes.root : ''} ${
          styles.addedStoriesWrapper
        }`}
      >
        <div className={styles.header}>
          <DenTypography
            className={`${styles.headerLabel} ${
              classes.header ? classes.header : ''
            }`}
            variant={'h5'}
          >
            {headerLabel}
          </DenTypography>
          {stories?.length >= 0 && (
            <div className={styles.count} title={countLabel}>
              {stories?.length}
            </div>
          )}
        </div>
        <div
          className={`${styles.multiSelect} ${
            classes.multiSelectToggle ? classes.multiSelectToggle : ''
          }`}
        >
          {renderMultiSelectToggle(multiSelectMode)}
        </div>
        <div
          className={`${styles.storiesWrapper} ${
            !(stories?.length > 0) && noStoriesMessage ? styles.alignCenter : ''
          } ${classes.stories || ''}`}
        >
          {renderStoriesCards()}
        </div>

        <div
          className={`${styles.footer} ${classes.footer ? classes.footer : ''}`}
        >
          {renderFooter(multiSelectMode)}
        </div>
      </div>
    );
  }
);

export default AddedStories;

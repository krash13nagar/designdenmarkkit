import React from 'react';
import { ArticlePreviewCardProps } from './articlepreviewcard.types';
import styles from './articlepreviewcard.module.scss';
import { DenBox, DenIconButton, DenRadio, DenTypography } from '../../common';
import ImageWithFallback from '../../common/imagewithfallback/imagewithfallback';
import { Collapse, IconButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArticlePreview from '../articlepreview/articlepreview.component';
import clsx from 'clsx';
import { ExpandMoreIcon, OpenInNewIcon } from '../../../assets';

/**
 * ArticlePreviewCard Component.
 * @constructor
 * @param {string} props.title -  title
 * @param {string} props.imgUrl - (optional) url for image
 * @param {string} props.date -  (optional) date
 * @param {string} props.wordCount - (optional) wordcount
 * @param {string} props.agency -  (optional) agency
 * @param {string} props.source - (optional) source
 * @param {React.ReactNode} props.ctaIcon -  (optional) icon for CTA
 * @param {React.MouseEventHandler<HTMLDivElement>} props.handleCTAClick - (optional) handler for CTA click
 * @param {React.MouseEventHandler<HTMLDivElement>} props.handleCardClick - (optional) handler for card click
 * @param {React.ReactNode} props.imagePlaceholderIcon -  (optional) icon for image placeholder
 * @param {string} props.ctaTooltipText -  (optional) cta tooltip
 * ref is forwarded to parent element
 */

export const ArticlePreviewCard = React.forwardRef<
  HTMLDivElement,
  ArticlePreviewCardProps
>(
  (
    {
      title,
      imgUrl,
      imagePlaceholderIcon,
      ctaIcon,
      handleCTAClick = () => {},
      wordCount,
      date,
      agency,
      source,
      handleCardClick = () => {},
      ctaTooltipText = '',
      classes = {},
      id = '',
      idLabel = 'MSID',
      rightMargin,
      leftMargin,
      wrapperClass = '',
      showCta = true,
      radioValue,
      selectedRadioValue,
      handleRadioChange,
      showRadio = false,
      synopsis = '',
      richContent = '',
      showExpandMore = false,
    },
    ref
  ) => {
    const [expanded, setExpanded] = React.useState(false);
    const handleCTA = (e: React.MouseEvent<HTMLButtonElement>) => {
      handleCTAClick(e);
      e.stopPropagation();
    };

    const handleExpandClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setExpanded((exp) => !exp);
      e.stopPropagation();
    };

    interface ExpandMoreProps extends IconButtonProps {
      expand: boolean;
    }

    const ExpandMore = styled((props: ExpandMoreProps) => {
      const { expand, ...other } = props;
      return <DenIconButton {...other} />;
    })(({ theme, expand }) => ({
      transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('all', {
        duration: theme.transitions.duration.short,
      }),
    }));

    const isSelected =
      selectedRadioValue !== undefined && selectedRadioValue === radioValue;

    return (
      <DenBox
        onClick={handleCardClick}
        ref={ref}
        className={clsx(
          styles.referenceCardWrapper,
          wrapperClass,
          classes.root,
          { [styles.selected]: isSelected }
        )}
        sx={{ mr: rightMargin || 0, ml: leftMargin || 0 }}
      >
        {imgUrl && (
          <div className={styles.leftWrapper}>
            <ImageWithFallback
              src={imgUrl}
              width={'100%'}
              height={'100%'}
              placeholderIcon={imagePlaceholderIcon}
            />
          </div>
        )}

        <div className={styles.rightWrapper}>
          <DenBox
            className={clsx(styles.noMargin, styles.radioTitleWrapper)}
            title={title}
            sx={{
              mb: showRadio ? '4px' : '8px',
            }}
          >
            {showRadio && (
              <DenRadio
                classes={{ root: styles.radio }}
                checked={isSelected}
                onChange={handleRadioChange}
                value={radioValue}
                name="article-preview-radio-buttons"
              />
            )}
            <DenTypography className={styles.title}>{title}</DenTypography>
          </DenBox>
          <div className={styles.rightBottomWrapper}>
            <div className={styles.secondaryText}>
              {date && <span>{date}</span>}
              {date && +wordCount > 0 && <>&thinsp;|&thinsp;</>}
              {+wordCount > 0 && <span>WC {wordCount}</span>}
            </div>
            {(synopsis || richContent) && (
              <Collapse in={expanded} timeout="auto">
                <ArticlePreview
                  synopsis={synopsis}
                  richContent={richContent}
                  contentClass={styles.richContent}
                  synopsisClass={styles.synopsis}
                  classes={{ root: styles.articlePreviewRoot }}
                />
              </Collapse>
            )}
            <div className={styles.redirectWrapper}>
              <div
                className={`${styles.agencySourceWrapper} ${styles.secondaryText}`}
              >
                {agency && <span>Agency : {agency}</span>}
                {agency && source && <>&thinsp;|&thinsp;</>}
                {source && <span>Source : {source}</span>}
                {id && (agency || source) && <>&thinsp;|&thinsp;</>}
                {id && (
                  <span>
                    {idLabel} : {id}
                  </span>
                )}
              </div>
              <div className={styles.actionButtons}>
                {showCta && (
                  <DenIconButton
                    title={ctaTooltipText}
                    onClick={handleCTA}
                    className={styles.ctaIcon}
                    size={'small'}
                    disableRipple
                    sx={{ p: 0 }}
                  >
                    {ctaIcon || (
                      <OpenInNewIcon
                        hoverHtmlColor="#0E88FF"
                        htmlColor="#D2D8DF"
                      />
                    )}
                  </DenIconButton>
                )}
                {showExpandMore && (
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    size={'small'}
                    sx={{ p: 0 }}
                  >
                    <ExpandMoreIcon
                      hoverHtmlColor="#4D4D4D"
                      htmlColor="#D2D8DF"
                    />
                  </ExpandMore>
                )}
              </div>
            </div>
          </div>
        </div>
      </DenBox>
    );
  }
);

export default ArticlePreviewCard;

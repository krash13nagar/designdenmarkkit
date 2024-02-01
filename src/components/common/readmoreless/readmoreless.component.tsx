import React, {useState, useEffect} from 'react';
import { ReadMoreLessProps } from './readmoreless.types';
import style from './readmoreless.module.scss'
import DenTypography from '../typography/typography.component';
import { cleanHTML } from '../../../utility/utils';

/**
 * ReadMoreLess Component.
 * @constructor
 * @param {string} props.content - Content of the typography component.
 * @param {number} props.lineLimit - Line count for the collapsed state of Typography.
 * @param {number} props.charLimit - Character count for the collapsed state of Typography.
 * @param {string} props.variant - Variant of Typography.
 * @param {string} props.classes - Classes for Typography.
 * @param {React.CSSProperties} props.cssConfig - CSS Configurations.
 * @param {object} props.displayText - Display Text.
 * ref is forwarded to the parent element.
 */

export const ReadMoreLess = React.forwardRef<HTMLDivElement, { config: ReadMoreLessProps }>(
  ({ config: { content, lineLimit, charLimit, variant, classes, cssConfig, displayText } }, ref) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [updatedContent, setUpdatedContent]=useState(`${charLimit ? content.slice(0, charLimit) : content}`);
    const [dynamicCss, setDynamicCss]=useState({WebkitLineClamp: isExpanded ? 'unset' : lineLimit || 2});

    const toggleReadMore =()=>{
      setIsExpanded(!isExpanded);
      if(lineLimit){
        setDynamicCss({
          WebkitLineClamp: !isExpanded ? 'unset' : lineLimit || 2,
        });
      }else if(charLimit){
        setUpdatedContent(!isExpanded ? content : content.slice(0, charLimit));
      }else{
        setDynamicCss({
          WebkitLineClamp: !isExpanded ? 'unset' : lineLimit || 2,
        });
      }
    }


    return (
      <>
      <span className={style['contentWrapper']}>
        <DenTypography
          variant={variant ? variant : 'caption'}
          className={`${charLimit || isExpanded ? style['inlinePos'] : style['ellipsis']}`}
          title={cleanHTML(updatedContent)}
          classes={classes}
          dangerouslySetInnerHTML={{ __html: updatedContent}}
          style={lineLimit || !charLimit ? dynamicCss : {}}
        />
        {<DenTypography
          variant={variant ? variant : 'caption'}
          className={`${!isExpanded && (lineLimit || !charLimit) ? style['absoultePos'] : style['inlinePos']}`}
          style={{...cssConfig, color: cssConfig?.color? cssConfig.color : "#4D9ACA"}}
          onClick={toggleReadMore}
          >
          {isExpanded ? `${displayText?.less ? displayText.less : " Read Less"}` :
          `${displayText?.more ? displayText.more : "...Read More"}`}
          </DenTypography>}
        </span>
      </>
    );
  }
);

export default ReadMoreLess;


             


import React, {useState, useEffect} from 'react';
import { ReadMoreLessProps } from './readmoreless.types';
import style from './readmoreless.module.scss'
import DenAccordion from '../accordion/accordion.component';
import DenTypography from '../typography/typography.component';
import { cleanHTML } from '../../../utility/utils';

/**
 * ReadMoreLess Component.
 * @constructor
 * @param {string} props.content - Content of the typography component.
 * @param {number} props.lineLimit - Line count for the collapsed state of Typography.
 * @param {number} props.charLimit - Character count for the collapsed state of Typography.
 * @param {string} props.variant - Variant of typography.
 * @param {string} props.className - Classes for Typography.
 * @param {React.CSSProperties} props.cssConfig - CSS Configurations.
 * @param {string} props.displayText - Display Text.
 * ref is forwarded to the parent element.
 */

export const ReadMoreLess = React.forwardRef<HTMLDivElement, { config: ReadMoreLessProps }>(
  ({ config: { content, lineLimit, charLimit, variant, className, cssConfig, displayText } }, ref) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [updatedContent, setUpdatedContent]=useState(content);
    const [dynamicCss, setDynamicCss]=useState({WebkitLineClamp: isExpanded ? 'unset' : lineLimit || 2});

    const toggleReadMore =()=>{
      if(lineLimit || !charLimit){
        setDynamicCss({
          WebkitLineClamp: isExpanded ? 'unset' : lineLimit || 2,
        });
      }else if(charLimit){
        setUpdatedContent(isExpanded ? content : content.slice(0, charLimit));
      }
      setIsExpanded(!isExpanded);
    }


    return (
      <>
      <span className={style.contentWrapper}>
        <DenTypography
          className={`${style['ellipsis']}`}
          variant="caption"
          title={cleanHTML(updatedContent)}
          dangerouslySetInnerHTML={{ __html: updatedContent }}
          style={lineLimit || !charLimit ? dynamicCss : {}}
        />
        {<DenTypography
          variant="caption"
          style={cssConfig}
          onClick={toggleReadMore}
          >
          {isExpanded ? `${displayText?.less ? displayText.less : "Read Less"}` :
          `${displayText?.more ? displayText.more : "...Read More"}`}
          </DenTypography>}
        </span>
      </>
    );
  }
);

export default ReadMoreLess;


             


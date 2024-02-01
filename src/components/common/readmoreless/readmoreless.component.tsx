import React, {useState, useEffect} from 'react';
import { ReadMoreLessProps } from './readmoreless.types';
import style from './readmoreless.module.scss'
import DenTypography from '../typography/typography.component';
import { cleanHTML } from '../../../utility/utils';

/**
 * ReadMoreLess Component.
 * @constructorp
 * @param {string} props.content - Content of the typography component.
 * @param {number} props.lineLimit - Line count for the collapsed state of Typography.
 * @param {number} props.charLimit - Character count for the collapsed state of Typography.
 * @param {object} props.config - Config object with optinal variant, classes, cssConfig, displayText
 * ref is forwarded to the parent element.
 */

export const ReadMoreLess = React.forwardRef<HTMLDivElement, ReadMoreLessProps >(
  ({content, lineLimit, charLimit, config}, ref) => {
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
          variant={config?.variant ? config?.variant : 'caption'}
          className={`${charLimit || isExpanded ? style['inlinePos'] : style['ellipsis']}`}
          title={cleanHTML(updatedContent)}
          classes={config?.classes}
          dangerouslySetInnerHTML={{ __html: updatedContent}}
          style={lineLimit || !charLimit ? dynamicCss : {}}
        />
        {<DenTypography
          variant={config?.variant ? config?.variant : 'caption'}
          className={`${!isExpanded && (lineLimit || !charLimit) ? style['absolutePos'] : style['inlinePos']}`}
          style={{...config?.cssConfig, color: config?.cssConfig?.color? config?.cssConfig?.color : "#4D9ACA"}}
          onClick={toggleReadMore}
          >
          {isExpanded ? `${config?.displayText?.less ? config?.displayText.less : " Read Less"}` :
          `${config?.displayText?.more ? config?.displayText.more : "...Read More"}`}
          </DenTypography>}
        </span>
      </>
    );
  }
);

export default ReadMoreLess;


             


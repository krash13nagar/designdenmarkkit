import React, {useState, useEffect, useRef} from 'react';
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
    const [updatedContent, setUpdatedContent]=useState(`${!lineLimit && charLimit ? content.slice(0, charLimit) : content}`);
    const [dynamicCss, setDynamicCss]=useState({WebkitLineClamp: isExpanded ? 'unset' : lineLimit || 2});
    const [contentOverflow, setContentOverflow] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
      if (contentRef?.current) {
        if(contentRef.current.scrollHeight - contentRef.current.offsetHeight >= 19){
          setContentOverflow(true);
        }
      }
    }, [content]);

    const toggleReadMore =()=>{
      setIsExpanded(!isExpanded);
      if(lineLimit || !charLimit){
        setDynamicCss({
          WebkitLineClamp: !isExpanded ? 'unset' : lineLimit || 2,
        });
      }else{
        setUpdatedContent(!isExpanded ? content : content.slice(0, charLimit));
      }
    }

    const variant=config?.variant ? config?.variant : 'caption';
    const readMoreText=config?.displayText?.more ? config?.displayText.more : "...Read More";
    const readLessText=config?.displayText?.less ? config?.displayText.less : " Read Less";
    const btnColor=config?.cssConfig?.color? config?.cssConfig?.color : "#4D9ACA";
    const btnCss={...config?.cssConfig, color: btnColor};
    const titleText=cleanHTML(updatedContent);

    const btnClass=()=>{
      if(!isExpanded && (lineLimit || !charLimit)){
        return 'posabsolute';
      }
      return 'posinline';
    }

    const txtClass=()=>{
      if(charLimit || isExpanded){
        return 'posinline';
      }
      return 'ellipsis';
    }

    return (
      <>
      <span className={style['readmorewrapper']}>
        <DenTypography
          variant={variant}
          className={style[txtClass()]}
          title={titleText}
          classes={config?.classes}
          ref={contentRef}
          dangerouslySetInnerHTML={{ __html: updatedContent}}
          style={lineLimit || !charLimit ? dynamicCss : {}}
        />
        {contentOverflow && <DenTypography
          variant={variant}
          className={style[btnClass()]}
          style={btnCss}
          onClick={toggleReadMore}
          >
          {isExpanded ? readLessText : readMoreText}
          </DenTypography>}
        </span>
      </>
    );
  }
);

export default ReadMoreLess;


             


import * as React from 'react';
import { DenTextField } from '../../common/textfield/textfield.component';
import Count from '../wordcount/wordcount.component';
import style from './titleforurl.module.scss';
import { DenIconButton } from '../../common';
import { AddCircle } from '../../../assets/cdsicons/addcircleicon';
import { Cancel } from '../../../assets/cdsicons/cancelicon';
import { TitleForUrlProps } from './titleforurl.types';

/**
 * Title for Url Component.
 * @constructor
 * @param {string} props.seoTitleProps* - extends the text field props
 * @param {string} props.overridelinkProps* - extends the text field props
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const TitleForUrl: React.FC<TitleForUrlProps> = (props) => {
  const [isOvverrideVisible, setIsOvverideVisible] = React.useState(false);
  return (
    <div className={style['title-for-url-wrapper']}>
      <div className={style['title-for-url']}>
        <DenTextField
          {...props.seoTitleProps}
          valueProps={{
            classes: {
              root: style['denLabel'],
              input: style['denInput'],
            },
          }}
        />
        <DenIconButton onClick={() => setIsOvverideVisible(true)}>
          <AddCircle />
        </DenIconButton>
      </div>
      <Count wordString={props.seoTitleProps.value ?? ''} />
      {isOvverrideVisible && (
        <>
          <div className={style['override-link']}>
            <DenTextField
              {...props.overrideLinkProps}
              valueProps={{
                classes: {
                  root: style['denLabel'],
                  input: style['denInput'],
                },
              }}
            />
            <DenIconButton onClick={() => setIsOvverideVisible(false)}>
              <Cancel />
            </DenIconButton>
          </div>
          <Count wordString={props.overrideLinkProps.value ?? ''} />
        </>
      )}
    </div>
  );
};

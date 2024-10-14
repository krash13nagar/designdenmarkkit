import * as React from 'react';
import { DenTextField } from '../../common/textfield/textfield.component';
import Count from '../wordcount/wordcount.component';
import style from './titleforurl.module.scss';
import { DenIconButton, DenInputLabel } from '../../common';
import { Cancel } from '../../../assets/cdsicons/cancelicon';
import { TitleForUrlProps } from './titleforurl.types';
import CustomSpeedDial from '../customspeeddial/customspeeddial.component';
import clsx from 'clsx';

/**
 * Title for Url Component.
 * @constructor
 * @param {string} props.seoTitleProps* - extends the text field props
 * @param {string} props.overridelinkProps* - extends the text field props
 * The ref is forwarded to the root element.
 * for more details see http:localhost:6006
 */
export const TitleForUrl: React.FC<TitleForUrlProps> = ({
  seoTitleProps = {},
  overrideLinkProps = {},
}) => {
  const [isOvverrideVisible, setIsOvverideVisible] = React.useState(false);
  const [speedDialOpen, setSpeedDialOpen] = React.useState(false);
  return (
    <div className={style['title-for-url-wrapper']}>
      <DenInputLabel
        shrink={seoTitleProps.shrinkLabel || false}
        htmlFor={seoTitleProps.id ?? 'bootstrap-input'}
        className={clsx(
          style.label,
          'cds-input-label',
          seoTitleProps.shrinkLabel ? style['shrink'] : ''
        )}
      >
        {seoTitleProps.label}
      </DenInputLabel>
      <div className={style['title-for-url']}>
        <DenTextField
          {...seoTitleProps}
          showLabel={false}
          valueProps={{
            classes: {
              root: style['denLabel'],
              input: style['denInput'],
            },
          }}
        />
        <CustomSpeedDial
          actions={[
            {
              label: 'Override Link',
              onClick: (e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOvverideVisible(true);
                setSpeedDialOpen(false);
              },
            },
          ]}
          open={speedDialOpen}
          setOpen={setSpeedDialOpen}
          classes={{
            root: clsx(style['icon-button'], style['icon-button-root']),
            fab: style['icon-button-fab'],
          }}
        />
      </div>
      <Count wordString={seoTitleProps.value ?? ''} />
      {isOvverrideVisible && (
        <>
          <DenInputLabel
            shrink={overrideLinkProps.shrinkLabel || false}
            htmlFor={overrideLinkProps.id ?? 'bootstrap-input'}
            className={clsx(
              style.label,
              'cds-input-label',
              overrideLinkProps.shrinkLabel ? style['shrink'] : ''
            )}
          >
            {overrideLinkProps.label}
          </DenInputLabel>
          <div className={style['override-link']}>
            <DenTextField
              {...overrideLinkProps}
              showLabel={false}
              valueProps={{
                classes: {
                  root: style['denLabel'],
                  input: style['denInput'],
                },
              }}
            />
            <DenIconButton
              onClick={() => setIsOvverideVisible(false)}
              size={'small'}
              className={style['icon-button']}
            >
              <Cancel />
            </DenIconButton>
          </div>
          <Count wordString={overrideLinkProps.value ?? ''} />
        </>
      )}
    </div>
  );
};

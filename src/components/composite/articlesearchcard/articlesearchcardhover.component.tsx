import React from 'react';
import style from './articlesearchcard.module.scss';
import { articleSearchCardHoverConfig } from './articlesearchcard.types';
import { DenButton, DenIconButton } from '../../common';
import MoreVert from '@mui/icons-material/MoreVert';
import { DenNestedMenu } from '../nestedmenu/nestedmenu';
import { renderMenu } from '../../../utility/utils';
import OpenInNewIcon from '../../../assets/cdsicons/openinnewicon';
import clsx from 'clsx';
export const ArticleSearchCardHoverDetails = (
  props: articleSearchCardHoverConfig
) => {
  const {
    actionButtonsList,
    cardMenuOptions = [],
    handleOpenInNew,
    title,
    subtitle
  } = props;


  const renderMenuOptions = (menuOptions: any) => {
    return renderMenu(menuOptions)
  }

  return (
    <div className={`${style['card-reveal']} ${style['card-reveal-show']}`}>
      <div className={style['card-details']}>
        <div title={title} className={style['hover-title']}>
          {title}
        </div>
        {subtitle && <div title={subtitle} className={clsx(style['hover-title'], style['hover-subtitle'])}>{subtitle}</div>}
      </div>
      <div className={style['card-hover-footer']}>
        <div className={style['card-footer-btn-wrapper']}>
          {actionButtonsList?.length > 0 &&
            actionButtonsList.map((btn, i) => (
              <DenButton
                onClick={(e) => {
                  e.stopPropagation();
                  btn?.onClick?.(e);
                }}
                variant={btn.variant || 'contained'}
                color={btn.color || 'primary'}
                key={i}
                className={style['primaryButton-cds']}
                sx={{
                  mr: '8px',
                  ...(btn.variant == 'outlined' && {
                    color: '#FFFFFF',
                    border: '1px solid #FFFFFF',
                    '&:hover': {
                      border: '1px solid #FFFFFF,',
                    },
                  }),
                }}
                {...btn.props}
              >
                {btn.label}
              </DenButton>
            ))}
        </div>
        {!handleOpenInNew && cardMenuOptions?.length > 0 &&
          <DenNestedMenu
            trigger={
              <DenIconButton sx={{ color: "#FFFFFF", padding: 0 }} disableRipple>
                <MoreVert />
              </DenIconButton>}
            menu={renderMenuOptions(cardMenuOptions)}
          />}
        {
          handleOpenInNew &&
          <DenIconButton onClick={handleOpenInNew} disableRipple title={"Open in new tab"}>
            <OpenInNewIcon htmlColor='#FFFFFF' hoverHtmlColor='#0F89FF' width={16} height={16} />
          </DenIconButton>
        }
      </div>
    </div>
  );
};
export default ArticleSearchCardHoverDetails;

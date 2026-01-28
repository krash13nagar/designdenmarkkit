import React from 'react';
import style from '../imagecontentcard.module.scss';
import { ImageContentCardHoverConfig } from '../imagecontentcard.types';
import { DenButton, DenTooltip } from '../../../common';
import { ActionButton } from '../../../complex/imageauth/imageauth.types';
import moment from 'moment';
import KeyValueCopy from '../../keyvaluecopy/keyvaluecopy.component';

export const ImageContentCardHoverDetails: React.FC<ImageContentCardHoverConfig> = ({
    title,
    agencyName,
    dataSource,
    ingestionDate,
    resolution,
    onCallbackSelectImagefnc,
    actionButtonsList,
    ingestionDateTimestamp,
    id, //msid
    showImageHoverFooter = true
}) => {
    const dateToShow =
        ingestionDate ||
        (ingestionDateTimestamp
            ? moment(ingestionDateTimestamp).format('Do MMM YYYY hh:mm A')
            : '');

    const handleSelectImage = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        e.stopPropagation();
        if (onCallbackSelectImagefnc) {
            onCallbackSelectImagefnc(e);
        }
    };

    return (
        <div className={style['card-reveal']}>
            <div className={style['card-details']}>
                {title && (
                    <div title={title} className={style['img_title']}>
                        {title}
                    </div>
                )}

                {(agencyName || dataSource) && (
                    <div className={`${style['mb7']} ${style['vc-ellipsis']}`}>
                        {agencyName && (
                            <span title={`Agency:${agencyName}`}>
                                <span className={style['secondaryText']}>Agency:</span>
                                <span className={style['primaryText']}>{agencyName}</span>
                            </span>
                        )}
                        {agencyName && dataSource && (
                            <span className={style['primaryText']}> | </span>
                        )}
                        {dataSource && (
                            <span title={`Source : ${dataSource}`}>
                                <span className={style['secondaryText']}>Source:</span>
                                <span className={style['primaryText']}>{dataSource}</span>
                            </span>
                        )}
                    </div>
                )}

                {dateToShow && (
                    <div
                        className={`${style['mb7']} ${style['vc-ellipsis']}`}
                        title={dateToShow}
                    >
                        <span className={style['secondaryText']}>{dateToShow}</span>
                    </div>
                )}

                {resolution && (
                    <div className={`${style['mb7']} ${style['secondaryText']} ${style['vc-ellipsis']}`}>
                        <span title={resolution}>{resolution}</span>
                    </div>
                )}
            </div>
            {showImageHoverFooter && (
                <div className={style['card-footer']}>
                    <div className={style['card-footer-btn-wrapper']}>
                        {actionButtonsList?.length > 0 &&
                            actionButtonsList.map((btn: ActionButton, i: number) => {
                                const { sx, ...btnProps } = btn.props || {};
                                return (
                                    <DenTooltip key={i} title={btn?.toolTip || ""} arrow>
                                        <div className={style['card-footer-btn-wrapper-tooltip']}>
                                            <DenButton
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    btn?.onClick?.(e);
                                                }}
                                                variant={btn.variant || 'contained'}
                                                color={btn.color || 'primary'}
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
                                                    ...(btn.props?.sx || {})
                                                }}
                                                {...btnProps}
                                            >
                                                {btn.label}
                                            </DenButton>
                                        </div>
                                    </DenTooltip>
                                )
                            })}

                        {id && (
                            <KeyValueCopy className={'msid-copy-wrapper'} key={id} keyText="ID:" valueText={id} showCopy={true} />
                        )}

                        {!actionButtonsList && (
                            <div onClick={handleSelectImage}>
                                <button
                                    className={`${style['btn']} ${style['primaryButton-cds']}`}
                                >
                                    Select Image
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageContentCardHoverDetails;

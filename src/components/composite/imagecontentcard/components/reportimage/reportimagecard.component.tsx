import React, { useState } from 'react';
import { DenSelect } from '../../../../common/select/select.component';
import { DenMenuItem } from '../../../../common/menuitem/menuitem.component';
import { DenFormControl } from '../../../../common/formcontrol/formcontrol.component';
import { DenButton } from '../../../../common/button/button.component';
import { ReportImageCardConfig } from './reportimagecard.types';
import cssClassName from './reportimagecard.module.scss';
import { DenTypography } from '../../../../common';
import clsx from 'clsx';

export const ReportImageCard: React.FC<ReportImageCardConfig> = ({
    title = '',
    dropdownLabel = '',
    dropdownOptions = [],
    dropdownDefaultOption = '',
    onCancel = () => { },
    onConfirm = () => { },
    reportImageCardCallBack = () => { },
    animatedClass = '',
}) => {
    const [selectedOption, setSelectedOption] = useState(dropdownOptions.length > 0 ? 'select' : '');

    const handleMenuChange = (e: any) => {
        setSelectedOption(e.target.value);
    }

    const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        reportImageCardCallBack?.(1);
        onCancel?.();
    }

    const handleConfirm = () => {
        reportImageCardCallBack?.(2);
        onConfirm?.(selectedOption);
    }

    return (
        <div
            className={clsx(cssClassName['report-card-overlay'], animatedClass ? cssClassName[animatedClass] : '')}
            data-report-overlay="true"
            onClick={(e) => e.stopPropagation()}
        >
            <div className={cssClassName['report-card-container-top']}>
                <div className={cssClassName['card-title']}>{title}</div>
                {dropdownOptions && dropdownOptions.length > 0 && (
                    <div className={cssClassName['card-menu']}>
                        <div className={cssClassName['dropdown-label']}>{dropdownLabel}</div>
                        <DenFormControl fullWidth className={cssClassName['report-form-control']}>
                            <DenSelect
                                value={selectedOption}
                                variant="outlined"
                                className={cssClassName['report-select']}
                                sx={{
                                    '& .cds-MuiSelect-select': {
                                        padding: '5px 0px 5px 8px',
                                        display: 'inherit'
                                    },
                                }}
                                onChange={handleMenuChange}
                                renderValue={(option: any) => {
                                    if (option == 'select') {
                                        return <DenTypography sx={{ color: '#B3B3B3' }}>{dropdownDefaultOption}</DenTypography>
                                    }
                                    return option;
                                }}
                            >
                                <DenMenuItem key='0' value='select'>
                                    {dropdownDefaultOption}
                                </DenMenuItem>
                                {dropdownOptions.map((opt, index) => (
                                    <DenMenuItem key={index + 1} value={opt.label}>
                                        {opt.label}
                                    </DenMenuItem>
                                ))}
                            </DenSelect>
                        </DenFormControl>
                    </div>
                )}
            </div>
            <div className={cssClassName['report-card-container-bottom']}>
                <div className={cssClassName['action-buttons']}>
                    <DenButton 
                        className={cssClassName['primaryButton-cds']} 
                        variant="outlined" 
                        sx={{ color: '#FFFFFF', border: '1px solid #FFFFFF', '&:hover': { border: '1px solid #FFFFFF' } }} 
                        onClick={handleCancel}
                    >
                        Cancel
                    </DenButton>
                    <DenButton 
                        className={clsx(cssClassName['primaryButton-cds'], (selectedOption == 'select' && cssClassName['disabled-button']))} 
                        variant='contained' 
                        onClick={handleConfirm}
                    >
                        Confirm
                    </DenButton>
                </div>
            </div>
        </div>
    );
}

export default ReportImageCard;

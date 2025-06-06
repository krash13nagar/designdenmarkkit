import React, { useEffect, useRef, useState } from 'react';
import { DenSelect } from '../../../common/select/select.component';
import { DenMenuItem } from '../../../common/menuitem/menuitem.component';
import { DenFormControl } from '../../../common/formcontrol/formcontrol.component';
import { DenButton } from '../../../common/button/button.component';
import { DenTypography } from '../../../common';
import { ReportPopupConfig } from './reportpopup.types';
import clsx from 'clsx';
import './reportpopup.styles.scss';

export const ReportPopup = React.forwardRef((props: ReportPopupConfig, ref: React.MutableRefObject<any>) => {
    const btnPopupRef = useRef<HTMLDivElement>(null);
    const selectRef = useRef<HTMLDivElement>(null);
    const {
        isOpen = false,
        title = 'Report this image to ensure it is permanently removed from future search results.',
        message = '',
        dropdownLabel = 'Please specify the reason for your report.',
        dropdownOptions = [],
        dropdownDefaultOption = 'Select Reason',
        onCancel = () => { },
        onConfirm = () => { },
        confirmButtonText = 'Confirm',
        cancelButtonText = 'Cancel',
        position = { top: '-280px', right: '0px' },
        wrapperClass = '',
        animatedClass = ''
    } = props;

    const [selectedOption, setSelectedOption] = useState(dropdownOptions.length > 0 ? 'select' : '');

    const handleMenuChange = (e: any) => {
        setSelectedOption(e.target.value);
    };

    const handleCancel = () => {
        setSelectedOption(dropdownOptions.length > 0 ? 'select' : '');
        onCancel?.();
    };

    const handleConfirm = () => {
        onConfirm?.(selectedOption);
        setSelectedOption(dropdownOptions.length > 0 ? 'select' : '');
    };

    useEffect(() => {
        if (btnPopupRef.current && isOpen) {
            const handleClickOutside = (event: MouseEvent) => {
                const target = event.target as Element;

                // Check if click is outside popup
                if (btnPopupRef.current && !btnPopupRef.current.contains(target)) {
                    // More specific check for dropdown menu items only
                    const isDropdownMenuClick = target.closest('.cds-MuiMenu-paper') ||
                        target.closest('.cds-MuiMenuItem-root') ||
                        target.closest('.MuiMenu-paper') ||
                        target.closest('.MuiMenuItem-root') ||
                        target.closest('li[role="menuitem"]') ||
                        (target.getAttribute && target.getAttribute('role') === 'menuitem');

                    // Only close if it's not a dropdown menu click
                    if (!isDropdownMenuClick) {
                        onCancel?.();
                    }
                }
            };

            document.addEventListener('mousedown', handleClickOutside);

            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }
    }, [isOpen, onCancel]);

    if (!isOpen) return null;

    return (
        <div
            ref={btnPopupRef}
            className={clsx('report-popup-container', wrapperClass, animatedClass)}
            style={{
                top: position.top,
                right: position.right,
                left: position.left,
                bottom: position.bottom,
            }}
        >
            <div className="report-popup-content">
                <div>
                    <DenTypography
                        variant="body2"
                        sx={{
                            color: '#FFFFFF',
                            fontFamily: '"Source Sans 3", sans-serif',
                            fontWeight: 600,
                            fontStyle: 'normal',
                            fontSize: '12px',
                            // lineHeight: '16px',
                        }}
                    >
                        {title}
                    </DenTypography>

                    {message && (
                        <DenTypography
                            variant="body2"
                            sx={{
                                color: '#B3B3B3',
                                marginBottom: '0px',
                                fontSize: '12px'
                            }}
                        >
                            {message}
                        </DenTypography>
                    )}

                    {dropdownOptions && dropdownOptions.length > 0 && (
                        <div>
                            <DenTypography
                                variant="body2"
                                sx={{
                                    color: '#FFFFFF',
                                    marginBottom: '4px',
                                    marginTop: '4px',
                                    fontSize: '12px',
                                    fontFamily: '"Source Sans 3", sans-serif',
                                    fontWeight: 400,
                                    fontStyle: 'normal',
                                }}
                            >
                                {dropdownLabel}
                            </DenTypography>
                            <DenFormControl fullWidth>
                                <DenSelect
                                    ref={selectRef}
                                    value={selectedOption}
                                    variant="outlined"
                                    onChange={handleMenuChange}
                                    size="small"
                                    sx={{
                                        '& .cds-MuiSelect-select': {
                                            padding: '2px 8px',
                                            backgroundColor: '#FFFFFF',
                                            color: '#4D4D4D',
                                            fontSize: '10px',
                                        },
                                        '& .cds-MuiSelect-select:focus': {
                                            backgroundColor: '#FFFFFF !important',
                                        },
                                        '& .cds-MuiSelect-icon': {
                                            color: '#4D4D4D',
                                        }
                                    }}
                                    renderValue={(option: any) => {
                                        if (option === 'select') {
                                            return (
                                                <DenTypography sx={{ color: '4D4D4D', fontSize: '10px' }}>
                                                    {dropdownDefaultOption}
                                                </DenTypography>
                                            );
                                        }
                                        return option;
                                    }}
                                >
                                    <DenMenuItem value="select">
                                        {dropdownDefaultOption}
                                    </DenMenuItem>
                                    {dropdownOptions.map((opt, index) => (
                                        <DenMenuItem key={index} value={opt.value}>
                                            {opt.label}
                                        </DenMenuItem>
                                    ))}
                                </DenSelect>
                            </DenFormControl>
                        </div>
                    )}
                </div>

                <div className="report-popup-buttons">
                    <DenButton
                        variant="outlined"
                        size="small"
                        onClick={handleCancel}
                        sx={{
                            color: '#FFFFFF',
                            border: '1px solid #FFFFFF',
                            fontSize: '10px',
                            paddingTop: '2px !important',
                            paddingBottom: '2px !important',
                            height: '20px !important',
                        }}
                    >
                        {cancelButtonText}
                    </DenButton>
                    <DenButton
                        variant="contained"
                        size="small"
                        onClick={handleConfirm}
                        disabled={selectedOption === 'select' && dropdownOptions?.length > 0}
                        sx={{
                            backgroundColor: '#0F89FF',
                            fontSize: '10px',
                            paddingTop: '2px !important',
                            paddingBottom: '2px !important',
                            height: '20px !important',
                            '&:hover': {
                                backgroundColor: '#0F89FF',
                            },
                            '&:disabled': {
                                backgroundColor: '#D2D8DF',
                                color: '#FFFFFF',
                            }
                        }}
                    >
                        {confirmButtonText}
                    </DenButton>
                </div>
            </div>
        </div>
    );
});

export default ReportPopup; 
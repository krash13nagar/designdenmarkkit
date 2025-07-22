import React, { useEffect, useRef, useState } from 'react';
import { ReportPopupConfig } from './reportpopup.types';
import './reportpopup.styles.scss';
import DiscardImageCard from '../../../composite/imagesearchcard/discardimagecard.component';

export const ReportPopup = React.forwardRef((props: ReportPopupConfig, ref: React.MutableRefObject<any>) => {
    const btnPopupRef = useRef<HTMLDivElement>(null);
    const {
        isOpen = false,
        reportButtonProps,
        onCancel,
        onConfirm,
        position = { top: '-280px', right: '0px' },
    } = props;


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
            className={'cds-report-popup-container'}
            style={{
                top: position.top,
                right: position.right,
                left: position.left,
                bottom: position.bottom,
            }}
        >
            <DiscardImageCard
                {...reportButtonProps}
                onCancel={onCancel}
                onConfirm={onConfirm}
                discardImageCardCallBack={() => { }}
            />
        </div>
    );
});

export default ReportPopup; 
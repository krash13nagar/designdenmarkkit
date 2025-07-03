import React, { useEffect, useRef } from "react";
import { BetaSearchKeywordProps } from "./betakeywords.types";
import { DenTextField } from "../../common";
import styles from './betakeywords.module.scss';

export const BetaSearchKeyword = (props: BetaSearchKeywordProps) => {
    const { 
        bautocomplete, 
        label, 
        placeholder, 
        searchCallbckfnc, 
        searchKeywordVal, 
        handleSearchKeywordVal, 
        handleSuggestionKeywordFnc = () => { }, 
        onEnterKeyPress = () => { },
        shouldAutoFocus = false,
        onAutoFocusComplete
    } = props;

    const targetRef = useRef<HTMLDivElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        handleSearchKeywordVal?.(val);
        searchCallbckfnc?.(val);
    };

    const handleBlur = () => {
        setTimeout(() => {
            handleSuggestionKeywordFnc?.(false);
        }, 300);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onEnterKeyPress?.(event);
        }
    };

    // Focus based on prop
    useEffect(() => {
        if (shouldAutoFocus && targetRef.current) {
            const inputElement = targetRef.current.querySelector('input');
            if (inputElement) {
                inputElement.focus();
                onAutoFocusComplete?.();
            }
        }
    }, [shouldAutoFocus, onAutoFocusComplete]);

    return (
        <>
            <DenTextField
                fullWidth={true} 
                label={label}
                onKeyDown={handleKeyPress}
                ref={targetRef}
                onClick={() => { handleSuggestionKeywordFnc?.(true); }} 
                onBlur={handleBlur}
                InputProps={{
                    autoComplete: bautocomplete,
                }}
                value={searchKeywordVal}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
                labelProps={{
                    classes: { root: "" }
                }}
                valueProps={{
                    placeholder: placeholder,
                    classes: { root: styles["textField-cls"] }
                }}
            />
        </>
    );
};

export default BetaSearchKeyword;
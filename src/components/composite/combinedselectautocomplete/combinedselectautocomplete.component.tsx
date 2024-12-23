import React, { useState } from "react";
import {
    BoxProps,
} from "@mui/material";
import { styled } from "@mui/system";
import { AutoCompleteInput, DenBox, DenFormControl, DenInputLabel, DenMenuItem, DenSelect } from "../../common";
import { AutocompleteInputProps } from "../../common/autocompleteinput/autocompleteinput.types";
import './combinedselectautocomplete.styles.scss'
import clsx from "clsx";

interface BoxWithFocus extends BoxProps {
    focused?: boolean,
    isError?: boolean
}

const HighlightContainer = styled(DenBox)<BoxWithFocus>(({ theme, focused, isError }) => ({
    display: "flex",
    alignItems: "center",
    border: `${isError ? "1px solid red !important" : (focused ? "1px solid #0F89FF !important" : "1px solid #E5E9ED")}`,
    borderRadius: theme.shape.borderRadius,
    transition: "border-color 0.3s",
    padding: 0,
}));

export interface CombinedSelectAutocompleteProps {
    isError?: boolean,
    autoCompleteProps?: AutocompleteInputProps,
    errorMessage?: string,
    title?: string,
    selectedDropdownValue?: string,
    onDropdownSelect?: (event: any) => void,
    dropdownDisabled?: boolean,
    dropdownOptions?: { label?: string, value: string }[],
    classes?: {
        list?: string,
        paper?: string
    }
}

export const CombinedSelectAutocomplete = React.forwardRef(({
    isError = false,
    autoCompleteProps = {},
    errorMessage = "",
    title = "",
    selectedDropdownValue = "",
    onDropdownSelect = () => { },
    dropdownDisabled = false,
    dropdownOptions = [],
    classes = {}
}: CombinedSelectAutocompleteProps, ref: React.MutableRefObject<unknown>) => {

    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = () => {
        setFocused(false);
    };

    return (
        <DenBox
            sx={{
                display: 'flex',
                flexDirection: 'column',
                '& label': { margin: 0 },
            }}
            className="cds-combined-select-autocomplete-wrapper"
        >
            {title && (
                <DenInputLabel
                    id="cds-simple-select-label"
                    shrink={false}
                    sx={{ mb: '6px !important' }}
                >
                    {title}
                </DenInputLabel>
            )}
            <HighlightContainer
                focused={focused}
                onFocus={handleFocus}
                onBlur={handleBlur}
                tabIndex={-1}
                isError={isError}
                sx={{
                    "&:hover": {
                        borderColor: "rgba(0, 0, 0, 0.87)",
                    },
                    maxHeight: "30px"
                }}
            >
                <DenFormControl size="small" style={{ minWidth: 120, border: "none" }}>
                    <DenSelect
                        value={selectedDropdownValue}
                        onChange={onDropdownSelect}
                        className="cds-combined-selector-root"
                        displayEmpty
                        disableUnderline
                        MenuProps={{
                            classes: {
                                list: clsx("cds-combined-selector-list-root", classes.list),
                                paper: clsx("cds-combined-selector-paper-root", classes.paper)
                            }
                        }}
                        renderValue={(option: any) => {
                            if (!option) {
                                return <span>Select</span>;
                            }
                            return dropdownOptions?.find?.(opt => opt.value == option)?.label || option;
                        }}
                        disabled={dropdownDisabled}
                        sx={{
                            "& .cds-MuiSelect-select": {
                                paddingTop: 0,
                                paddingBottom: 0,
                                display: "flex",
                                alignItems: "center"
                            },
                            "& .cds-MuiOutlinedInput-notchedOutline": {
                                border: "none",
                            }
                        }}
                    >
                        {dropdownOptions?.map((item, index) => (
                            <DenMenuItem
                                sx={{
                                    font: "normal normal 12px/17px 'Source Sans 3'",
                                    '&:hover': {
                                        color: '#0F89FF',
                                    },
                                }}
                                key={`${item.value}_${index + 1}`}
                                value={item.value}
                            >
                                {item.label ?? item.value}
                            </DenMenuItem>
                        ))}
                    </DenSelect>
                </DenFormControl>
                <DenBox sx={{ width: "1px", backgroundColor: "#D2D8DF", height: "20px" }}
                    className="select_textfield_separator"
                >
                    &nbsp;
                </DenBox>

                <AutoCompleteInput
                    ref={ref}
                    {...autoCompleteProps}
                    noBorder
                    title=""
                />
            </HighlightContainer>
            {isError && errorMessage ? (
                <DenBox sx={{ pt: '2px' }} className="has-error">
                    {errorMessage}
                </DenBox>
            )
                : null}
        </DenBox>

    );
})

export default CombinedSelectAutocomplete;

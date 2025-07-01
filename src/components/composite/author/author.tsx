import React, { useRef } from 'react';
import { AutoCompleteInput, DenBox, DenInputLabel, DenMenuItem, DenSelect } from "../../common";
import { AuthorProps } from "./author.types";

export const Author: React.FC<AuthorProps> = ({
    title = '',
    showDropdown = false,
    selectedOption = '',
    onDropdownSelect = () => {},
    dropdownOptions = [],
    disabled = false,
    errorMessage = '',
    bylineAutocompleteProps = {},
    isError = false,
}) => {
    return (
        <DenBox
        sx={{
          display: 'flex',
          flexDirection: 'column',
          '& label': { margin: 0 },
        }}
        className="article-author-search-wrapper"
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
        <DenBox sx={{ display: 'flex' }}>
          {showDropdown && (
            <DenSelect
              value={selectedOption}
              onChange={onDropdownSelect}
              className="article3-author-selector-root"
              displayEmpty
              renderValue={(option: unknown) => {
                if (!option) {
                  return <em>Select</em>;
                }
                return option as React.ReactNode;
              }}
              disabled={disabled}
              sx={{
                "& .cds-MuiSelect-select":{
                  paddingTop: 0,
                  paddingBottom: 0,
                  minWidth: "90px",
                }
                ,
                  borderTopRightRadius:0,
                  borderBottomRightRadius:0,
                  maxHeight:"30px"
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
          )}
          <DenBox sx={{ flex: 1 }}>
            <AutoCompleteInput wrapperClass='autocomplete-wrapper' {...bylineAutocompleteProps} disabled={disabled} hideSearchIcon 
            errorMessage={errorMessage}
            isError={isError}
            />
          </DenBox>
        </DenBox>
      </DenBox>
    )
}
export default Author;
import {
    DenBox,
    DenFormControlLabel,
    DenGrid,
    DenLink,
    DenRadioGroup,
    DenRadio,
    DenTypography,
    DenInputLabel,
  } from '../../common';
  import { CombinedSelectAutocomplete } from '..';
  import React, { useRef } from 'react';
  import FavouriteSection from '../favouritesection/favouritesection';
  import './publishsection.style.scss';
  import { 
    PublishSectionProps, 
  } from './publishsection.types';
  
  
 export const PublishSection: React.FC<PublishSectionProps> = ({
    title = '',
    id = '',
    placeholder = 'Search',
    overridePlaceholder = false,
    secondarySectionValue = [],
    showFav = true,
    enableMultipublish = true,
    openedFrom = "",
    isHostDropdownDisabled = null,
    options = [],
    statusFilter = '',
    isReadOnly = false,
    publishSectionText = '',
    showFilter = false,
    favourite = [],
    isPrimarySectionMode = false,
    handleFavChange = () => {},
    handleFilterChange = () => {},
    dropdownOptions = [],
    handleChannelSelect = () => {},
    inputRef = null,
    renderPrimarySectionChips = () => null,
    renderSecondarySectionChips = () => null,
    errorMessage = '',
    handleShowEditModal = () => {},
    handleChange = () => {},
    handleTextChange = () => {},
    handleSetPublishSectionText = () => {},
    getHostId = () => '',
    handleFavDelete = () => {},
    publishSectionFilters = [],
    isTextFieldVisible = false,
    renderOptions = () => null,
    favAnchorEl = null,
    handleFavouriteSection = () => {},
    renderFavouriteOptions = () => null,
    handleFavClose = () => {}
  }) => {
  
    const placeHolder = `${placeholder} ${
      isPrimarySectionMode ? 'Primary Section' : 'Secondary Section'
    }`;
   
    const containerRef = useRef<HTMLDivElement>(null);
    return (
      <DenGrid container direction={'column'} className="publish_section_wrapper" ref={containerRef}>
        <DenGrid item xs={12}>
          <DenGrid container justifyContent={'space-between'}>
            <DenGrid item sx={{ mb: '6px !important' }}>
              <DenInputLabel id="cds-simple-select-label" shrink={false}>
                {title}
              </DenInputLabel>
            </DenGrid>
            {enableMultipublish && <DenGrid item><DenLink
              onClick={() => {
                handleShowEditModal(true)
              }}
              component="div"
              underline="hover"
              sx={[
                ...(!secondarySectionValue?.length ? [{
                  color:"#D2D8DF",
                  pointerEvents:"none"
                }]:[{ cursor: 'pointer' }])
              ]}
            >
              Edit Details
            </DenLink></DenGrid>}
          </DenGrid>
        </DenGrid>
        <DenGrid item xs={12} display="flex">
          {renderPrimarySectionChips()}
          {enableMultipublish &&  renderSecondarySectionChips()}
        </DenGrid>
        {isTextFieldVisible && (
          <DenGrid item xs={12}>
            <CombinedSelectAutocomplete
              key={'auto_' + title}
              autoCompleteProps={{
                id: id || 'publish_section',
                wrapperClass: 'article_autocomplete_input_cds',
                placeholder: overridePlaceholder ? placeholder : placeHolder,
                // value: value,
                // limit: 1,
                isReadOnly: isPrimarySectionMode ? isReadOnly : false,
                onChange: handleChange,
                onTextChange: handleTextChange,
                options: options,
                hideSearchIcon: true,
                renderOptions: renderOptions,
                setInputValueProp: handleSetPublishSectionText,
                inputValueProp: publishSectionText,
                classes: {
                  popper: 'publish_section_filter_popper',
                },
              }}
              classes={{list:"article3_publish_section_dropdown_root",
                paper:"article3_publish_section_dropdown_paper_root"
              }}
              ref={inputRef}
              dropdownOptions={dropdownOptions}
              onDropdownSelect={handleChannelSelect}
              dropdownDisabled={isHostDropdownDisabled ?? isPrimarySectionMode}
              selectedDropdownValue={
               getHostId()
              }
              isError={!!errorMessage}
              errorMessage={errorMessage}
            />
          </DenGrid>
        )}
        {showFilter && (
          <DenBox
            sx={{ width: inputRef?.current?.clientWidth || '80%' }}
            className="filter_section"
            onMouseDown={(e: React.MouseEvent) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <DenTypography className="filter_label">Status : </DenTypography>
            <DenRadioGroup
              onMouseDown={(e: React.MouseEvent) => {
                e.preventDefault();
              }}
              row
              value={statusFilter}
              onChange={handleFilterChange}
              name="filter-radio-buttons-group"
            >
              {publishSectionFilters?.map((filter, i) => (
                <DenFormControlLabel
                  key={i}
                  value={filter.value}
                  control={<DenRadio disableRipple />}
                  label={filter.label}
                />
              ))}
            </DenRadioGroup>
          </DenBox>
        )}
        {showFav  && isTextFieldVisible ? (
          <DenBox className="publish_section_actions" sx={{
            bottom:errorMessage? "15px":"-2px"
          }}>
            <div className="divider"></div>
            <FavouriteSection
              size="medium"
              variant="outlined"
              clickable={true}
              handleFavChange={handleFavChange}
              favourite={isPrimarySectionMode ? favourite?.filter((fav) => fav.parents?.[0]?.hostId === getHostId()) : favourite}
              containerRef={containerRef}
              filterCurrentHostFavs
              openedFrom={openedFrom}
              handleFavDelete={handleFavDelete}
              favAnchorEl={favAnchorEl}
              handleFavouriteSection={handleFavouriteSection}
              renderFavouriteOptions={renderFavouriteOptions}
              handleFavClose={handleFavClose}
            />
          </DenBox>
        ) : null}
      </DenGrid>
    );
  }
  
  export default PublishSection;
  
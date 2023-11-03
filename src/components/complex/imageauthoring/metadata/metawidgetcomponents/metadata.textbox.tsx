import React, { useEffect, useState } from 'react';
import { DenTextField } from '../../../../common/textfield/textfield.component';

const MetadataTextBox = (props: any) => {
  const imgSrc = props.imgData;
  const ext_author = 'External Author(s)';

  const handleTitle = () => {
    if (imgSrc?.imageInput?.imageSource == 'TEMPMEDIA') {
      return false;
    } else if (
      (imgSrc?.imageInput?.imageSource == 'DAM' ||
        imgSrc?.originalContentInfo?.damType) &&
      props.title == ext_author
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleChange = (event: any) => {
    if (props.onChange) {
      props.onChange(
        props.widget.metadataDefinition.metatype,
        event.target.value,
        props.olderValue
      );
    }
  };

  return (
    <>
      <DenTextField
        fullWidth={true}
        label={props.title}
        value={props.value}
        onChange={handleChange}
        valueProps={{
          readOnly: Boolean(handleTitle()),
          title: handleTitle() ? 'Author can not be added or removed' : '',
        }}
      />
    </>
  );
};

export default MetadataTextBox;

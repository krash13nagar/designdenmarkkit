import React, { useState } from 'react';
import CheckIcon from '../../../assets/cdsicons/checkicon';
import CopyIcon from '../../../assets/cdsicons/copyicon';
import { copyToClipboard } from '../../../utility/utils';
import { DenIconButton } from '../../common';
import { CopyIconButtonProps } from './copyiconbutton.types';

const CopyIconButton = (props: CopyIconButtonProps) => {
  const copyValue = props.copyValue ?? '';
  const [isCopied, setCopied] = useState(false);

  const handleIconClick = (value: string) => {
    if (isCopied) return;
    copyToClipboard(value);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const renderIcon = () => {
    if (copyValue) {
      return (
        <DenIconButton
          title={isCopied ? 'Copied' : 'Click to copy'}
          className="cds-copy-icon-button"
          onClick={() => handleIconClick(copyValue)}
          sx={{ p: '4px' }}
        >
          {isCopied ? (
            <CheckIcon htmlColor="#28A745" width="15px" height="15px" />
          ) : (
            <CopyIcon
              htmlColor="#4D4D4D"
              hoverHtmlColor="#0F89FF"
              width="15px"
              height="15px"
            />
          )}
        </DenIconButton>
      );
    }
    return null;
  };

  return renderIcon();
};

export default CopyIconButton;

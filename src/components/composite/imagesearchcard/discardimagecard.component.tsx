import React, { useState } from 'react';
import { DenSelect } from '../../common/select/select.component';
import { DenMenuItem } from '../../common/menuitem/menuitem.component';
import { DenInputLabel } from '../../common/inputlabel/inputlabel.component';
import { DenFormControl } from '../../common/formcontrol/formcontrol.component';
import { DenButton } from '../../common/button/button.component';
import { DiscardImageCardConfig } from './discardimagecard.types';
import cssClassName from './discardimagecard.module.scss';
import { DenTypography } from '../../common';
import clsx from 'clsx';

export const DiscardImageCard= React.forwardRef((props: DiscardImageCardConfig, ref: React.MutableRefObject<any>) => {
  const {
    title='',
    dropdownLabel='',
    dropdownOptions=[],
    dropdownDefaultOption='',
    onCancel=()=>{},
    onConfirm=()=>{},
    discardImageCardCallBack=()=>{},
    wrapperClass='',
    animatedClass=''
  } = props;

  const [selectedOption,setSelectedOption]=useState(dropdownOptions.length>0?'select':'');

  const handleMenuChange=(e:any)=>{
    setSelectedOption(e.target.value);
  }

  const handleCancel=()=>{
    discardImageCardCallBack?.(1);
    onCancel?.();
  }

  const handleConfirm=()=>{
    discardImageCardCallBack?.(2);
    onConfirm?.(selectedOption);
  }

  return (
    <div className={clsx(cssClassName['discard-card-wrapper'], animatedClass ? cssClassName[animatedClass] : '', cssClassName[wrapperClass])}>
        <div className={cssClassName['discard-card-container-top']}>
        <div className={cssClassName['card-title']}>{title}</div>
      {dropdownOptions && dropdownOptions.length > 0 && <div className={cssClassName['card-menu']}>
      <div className={cssClassName['dropdown-label']}>{dropdownLabel}</div>
      <DenFormControl fullWidth className={cssClassName['discard-form-control']}>
        <DenSelect
          value={selectedOption}
          variant="outlined"
          className={cssClassName['discard-select']}
          sx={{
            '& .cds-MuiSelect-select': {
                padding: '5px 0px 5px 8px'
            },
          }}
          onChange={handleMenuChange}
          renderValue={(option:any)=>{
            if(option=='select'){
                return <DenTypography sx={{color:'#B3B3B3'}}>{dropdownDefaultOption}</DenTypography>
            }
            return option;
          }}
        >
            <DenMenuItem key='0' value='select'>
            {dropdownDefaultOption}
          </DenMenuItem>
          {dropdownOptions.map((opt,index) => (
            <DenMenuItem key={index+1} value={opt.label}>
              {opt.label}
            </DenMenuItem>
          ))}
        </DenSelect>
      </DenFormControl>
      </div>} 
        </div>
        <div className={cssClassName['discard-card-container-bottom']}>
        <div className={cssClassName['action-buttons']}>
        <DenButton className={cssClassName['primaryButton-cds']} variant="outlined" sx={{color:'#FFFFFF',border:'1px solid #FFFFFF','&:hover':{border:'1px solid #FFFFFF'}}}  onClick={handleCancel}>
          Cancel
        </DenButton>
        <DenButton className={clsx(cssClassName['primaryButton-cds'], (selectedOption=='select' && cssClassName['disabled-button']))} variant='contained' onClick={handleConfirm} >
          Confirm
        </DenButton>
      </div>
        </div>
    </div>
  );
})

export default DiscardImageCard; 
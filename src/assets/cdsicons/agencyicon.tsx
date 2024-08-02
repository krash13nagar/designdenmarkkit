import React from 'react';
import { DenSvgIcon, SVGTypes } from '../../components';

export const AgencyIcon = (props: Partial<SVGTypes>) => (
  <DenSvgIcon
    name={props?.name ?? 'agency icon'}
    htmlColor={props?.htmlColor ?? '#2b2b2b'}
    width={props?.width}
    height={props?.height}
    {...props}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.059 12.186">
      <g id="noun-legal-1790506" transform="translate(-87.454 -34.999)">
        <path
          id="Path_4"
          data-name="Path 4"
          d="M87.673,38.916h12.621a.218.218,0,0,0,.1-.409l-6.311-3.482a.222.222,0,0,0-.209,0l-6.311,3.482a.218.218,0,0,0,.1.409ZM93.984,36.3a.653.653,0,1,1-.462.191A.653.653,0,0,1,93.984,36.3Z"
        />
        <path
          id="Path_5"
          data-name="Path 5"
          d="M100.339,438.37H99.9v-.653a.218.218,0,0,0-.218-.218H88.37a.218.218,0,0,0-.218.218v.653h-.435a.218.218,0,0,0-.218.218v.87a.218.218,0,0,0,.218.218h12.621a.218.218,0,0,0,.218-.218v-.87a.218.218,0,0,0-.218-.218Z"
          transform="translate(-0.045 -392.491)"
        />
        <path
          id="Path_6"
          data-name="Path 6"
          d="M310.413,215.221l-.379-4.755.187-.468h-1.689l.187.468-.379,4.755Z"
          transform="translate(-215.393 -170.647)"
        />
        <path
          id="Path_7"
          data-name="Path 7"
          d="M466.031,210l.187.468-.379,4.755h2.072l-.379-4.755.187-.468Z"
          transform="translate(-368.975 -170.649)"
        />
        <path
          id="Path_8"
          data-name="Path 8"
          d="M152.913,215.221l-.379-4.755.187-.468h-1.689l.187.468-.379,4.755Z"
          transform="translate(-61.81 -170.647)"
        />
      </g>
    </svg>
  </DenSvgIcon>
);

export default AgencyIcon;

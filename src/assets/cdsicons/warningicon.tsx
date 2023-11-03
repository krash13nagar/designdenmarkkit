import React from 'react';
import { DenSvgIcon, SVGTypes } from '../../components';

export const Warning = (props: Partial<SVGTypes>) => {
  return (
    <DenSvgIcon
      name="warning icon"
      htmlColor="#ffa700"
      hoverHtmlColor="#ffa700cc"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="icon-warning"
        width="12.766"
        height="12.764"
        viewBox="0 0 12.766 12.764"
      >
        <path
          id="Subtraction_1"
          data-name="Subtraction 1"
          d="M-7947.618-1342h-10.763a1,1,0,0,1-.853-.475.992.992,0,0,1-.042-.972l5.382-10.765a.992.992,0,0,1,.894-.553.993.993,0,0,1,.894.553l5.384,10.765a.994.994,0,0,1-.044.973A.994.994,0,0,1-7947.618-1342Zm-5.382-3.718a.751.751,0,0,0-.565.244.813.813,0,0,0-.244.565.758.758,0,0,0,.244.565.831.831,0,0,0,.565.242.828.828,0,0,0,.565-.242.82.82,0,0,0,.242-.565.752.752,0,0,0-.242-.565A.821.821,0,0,0-7953-1345.718Zm0-4.958a.647.647,0,0,0-.647.645v3a.648.648,0,0,0,.647.647.647.647,0,0,0,.646-.647v-3A.646.646,0,0,0-7953-1350.676Z"
          transform="translate(7959.383 1354.765)"
          fill="currentColor"
        />
      </svg>
    </DenSvgIcon>
  );
};

export default Warning;

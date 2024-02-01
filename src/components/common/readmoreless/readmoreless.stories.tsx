// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import {ReadMoreLess} from './readmoreless.component';

const meta: Meta<typeof ReadMoreLess> = {
    component: ReadMoreLess,
};

export default meta;
type Story = StoryObj<typeof ReadMoreLess>;

export const Default: Story = {
    args: {
        config: {
            content: "<strong>New Delhi, Aug 11 (IANS) Isolate</strong>d heavy<sub> to very hea</sub>vy rainfall is <sup>likely to continue</sup> over Uttarakhand, Bihar, Sikkim, Arunachal Pradesh, Assam, <u>and Meghalaya during </u>next five days while rainfall activity over rest of the country is likely to be subdued during next one week before a revival of active monsoon conditions thereafter, the IMD said on Friday. <strong>New Delhi, Aug 11 (IANS) Isolate</strong>d heavy<sub> to very hea</sub>vy rainfall is <sup>likely to continue</sup> over Uttarakhand, Bihar, Sikkim, Arunachal Pradesh, Assam, <u>and Meghalaya during </u>next five days while rainfall activity over rest of the country is likely to be subdued during next one week before a revival of active monsoon conditions thereafter, the IMD said on Friday.",
            charLimit: 300
        }
    },
  };
  


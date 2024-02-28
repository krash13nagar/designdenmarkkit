// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import ImageSearchCardWrapper from './imagesearchcardwrapper.component';
import { imageSearchCardWrapperSample } from './sample';


const meta: Meta<typeof ImageSearchCardWrapper> = {
  component: ImageSearchCardWrapper,
};

export default meta;
type Story = StoryObj<typeof ImageSearchCardWrapper>;

export const Primary: Story = {
  args: {
    imagesearchcardList: imageSearchCardWrapperSample,
    classes:{"root":"imgCardWrapperClass"}
  },
};

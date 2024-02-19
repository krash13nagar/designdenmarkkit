// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import ImageSearchCard from './imagesearchcard.component';
import { imageSearchCardSample } from './sample';


const meta: Meta<typeof ImageSearchCard> = {
  component: ImageSearchCard,
};

export default meta;
type Story = StoryObj<typeof ImageSearchCard>;

export const Primary: Story = {
  args: imageSearchCardSample,
};

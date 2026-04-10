// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import ImageSearchCard from './imagesearchcard.component';
import { imageSearchCardSample, imageSearchCardSample2, imageSearchCardSampleWithIconButtons } from './sample';

const meta: Meta<typeof ImageSearchCard> = {
  component: ImageSearchCard,
};

export default meta;
type Story = StoryObj<typeof ImageSearchCard>;

export const Variant1: Story = {
  args: imageSearchCardSample,
};

export const Variant2: Story = {
  args: imageSearchCardSample2,
};

export const WithIconButtons: Story = {
  args: imageSearchCardSampleWithIconButtons,
};

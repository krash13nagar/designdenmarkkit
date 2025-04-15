// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import DocumentImageCard from './documentimagecard.component';
import { documentImageCardSample, documentImageCardSample2 } from './sample';

const meta: Meta<typeof DocumentImageCard> = {
  component: DocumentImageCard,
};

export default meta;
type Story = StoryObj<typeof DocumentImageCard>;

export const Variant1: Story = {
  args: documentImageCardSample,
};

export const Variant2: Story = {
  args: documentImageCardSample2,
};

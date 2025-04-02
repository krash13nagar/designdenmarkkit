// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import DocumentSearchCard from './documentsearchcard.component';
import { documentsearchcardSample, documentsearchcardSample2 } from './sample';

const meta: Meta<typeof DocumentSearchCard> = {
  component: DocumentSearchCard,
};

export default meta;
type Story = StoryObj<typeof DocumentSearchCard>;

export const Variant1: Story = {
  args: documentsearchcardSample,
};

export const Variant2: Story = {
  args: documentsearchcardSample2,
};

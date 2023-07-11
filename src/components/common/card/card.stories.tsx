// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { DenCard } from './card.component';
import DenChip from '../chip/chip.component';
import React from 'react';

const meta: Meta<typeof DenCard> = {
  component: DenCard,
};

export default meta;
type Story = StoryObj<typeof DenCard>;

export const Primary: Story = {
  args: {
    children: <DenChip />,
  },
};

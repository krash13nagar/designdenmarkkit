// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { DenCardActionArea } from './cardactionarea.component';
import DenChip from '../chip/chip.component';
import React from 'react';

const meta: Meta<typeof DenCardActionArea> = {
  component: DenCardActionArea,
};

export default meta;
type Story = StoryObj<typeof DenCardActionArea>;

export const Primary: Story = {
  args: {
    children: <DenChip />,
  },
};

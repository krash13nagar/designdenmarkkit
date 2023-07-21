// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { DenFormGroup } from './formgroup.component';
import DenChip from '../chip/chip.component';
import React from 'react';

const meta: Meta<typeof DenFormGroup> = {
  component: DenFormGroup,
};

export default meta;
type Story = StoryObj<typeof DenFormGroup>;

export const Primary: Story = {
  args: {
    children: <DenChip />,
  },
};

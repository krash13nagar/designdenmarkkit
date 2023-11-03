import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import '../../../styles/storybookBasesStyles.scss';
import DateMonthSelection from './datemonthselection.component';

const meta: Meta<typeof DateMonthSelection> = {
  component: DateMonthSelection,
};

export default meta;
type Story = StoryObj<typeof DateMonthSelection>;

export const Basic: Story = {
  args: {
    value: {
      day: 3,
      month: 7,
    },
  },
};

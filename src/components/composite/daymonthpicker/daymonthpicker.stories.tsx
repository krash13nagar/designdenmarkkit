import type { Meta, StoryObj } from '@storybook/react';
import '../../../styles/storybookBasesStyles.scss';
import DayMonthPicker from './daymonthpicker.component';

const meta: Meta<typeof DayMonthPicker> = {
  component: DayMonthPicker,
};

export default meta;
type Story = StoryObj<typeof DayMonthPicker>;

export const Basic: Story = {
  args: {},
};

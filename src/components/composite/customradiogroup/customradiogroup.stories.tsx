import type { Meta, StoryObj } from '@storybook/react';
import CustomRadioGroup from './customradiogroup.component';
import '../../../styles/storybookBasesStyles.scss';

const meta: Meta<typeof CustomRadioGroup> = {
  component: CustomRadioGroup,
};

export default meta;
type Story = StoryObj<typeof CustomRadioGroup>;

export const Basic: Story = {
  args: {
    defaultRadio: 'short',
    radioButtonList: [
      { value: 'short', label: 'Short' },
      { value: 'medium', label: 'Medium' },
      {
        value: 'long',
        label: 'Long',
        disabled: true,
        title: 'This radio is disabled',
      },
    ],
    onHandleChange: (newValue) => {
      console.log(newValue);
    },
  },
};

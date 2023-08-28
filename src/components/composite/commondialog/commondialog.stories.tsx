import type { Meta, StoryObj } from '@storybook/react';
import CommonDialog from './commondialog.component';
import '../../../styles/storybookBasesStyles.scss';

const meta: Meta<typeof CommonDialog> = {
  component: CommonDialog,
};

export default meta;
type Story = StoryObj<typeof CommonDialog>;

export const Basic: Story = {
  args: {
    open: true,
    handleClose: () => {},
    title: 'Warning!',
    content:
      'If you proceed to the previous page, your current selection will be lost. Are you sure you want to continue?',
    actionOptionsList: [
      {
        onClick: () => {},
        label: 'Yes',
        variant: 'outlined',
        color: 'error',
      },
      {
        onClick: () => {},
        label: 'No',
        variant: 'contained',
        color: 'primary',
      },
    ],
  },
};

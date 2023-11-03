import type { Meta, StoryObj } from '@storybook/react';
import SearchIcons from './cdsicons.component';
import { SVGTypes } from '../common';

const meta: Meta<SVGTypes> = {
  component: SearchIcons,
  argTypes: {
    htmlColor: {
      control: { type: 'color' },
    },
    hoverHtmlColor: {
      control: { type: 'color' },
    },
    viewBox: {
      control: { type: 'text' },
    },
    fontSize: {
      control: 'radio',
      defaultValue: 'large',
      options: ['inherit', 'large', 'medium', 'small'],
    },
    color: {
      control: 'radio',
      options: [
        'inherit',
        'action',
        'disabled',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchIcons>;

export const Basic: Story = {};

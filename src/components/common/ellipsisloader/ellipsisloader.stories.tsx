import type { Meta, StoryObj } from '@storybook/react';
import '../../../styles/storybookBasesStyles.scss';
import EllipsisLoader from './ellipsisloader.component';

const meta: Meta<typeof EllipsisLoader> = {
  component: EllipsisLoader,
};

export default meta;
type Story = StoryObj<typeof EllipsisLoader>;

export const Basic: Story = {
  args: {
    loadingText: 'Loading',
  },
};

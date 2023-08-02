import type { Meta, StoryObj } from '@storybook/react';
import '../../../styles/storybookBasesStyles.scss';
import DotLoader from './dotloader.component';

const meta: Meta<typeof DotLoader> = {
  component: DotLoader,
};

export default meta;
type Story = StoryObj<typeof DotLoader>;

export const Basic: Story = {
  args: {
    loadingText: 'Loading',
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { ImagePreview } from './imagepreview.component';
import { sample } from './sample';

const meta: Meta<typeof ImagePreview> = {
  component: ImagePreview,
};

export default meta;
type Story = StoryObj<typeof ImagePreview>;

export const Basic: Story = {
  args: sample,
};

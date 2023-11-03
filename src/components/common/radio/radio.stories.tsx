// Radio.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
import DenRadio from './radio.component';
const meta: Meta<typeof DenRadio> = {
  component: DenRadio,
};
export default meta;
type Story = StoryObj<typeof DenRadio>;
export const Default: Story = {
  args: {},
};

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import KeywordsWrapper from './keywords.wrapper';
import { config } from './keywords.sample';

const meta: Meta<typeof KeywordsWrapper> = {
  component: KeywordsWrapper,
};

export default meta;
type Story = StoryObj<typeof KeywordsWrapper>;

export const Basic: Story = {
  args: config
};

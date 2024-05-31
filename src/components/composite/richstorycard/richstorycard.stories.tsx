// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { richStoryCardSample } from './sample';
import RichStoryCard from './richstorycard.component';


const meta: Meta<typeof RichStoryCard> = {
  component: RichStoryCard,
};

export default meta;
type Story = StoryObj<typeof RichStoryCard>;

export const Primary: Story = {
  args: richStoryCardSample,
};

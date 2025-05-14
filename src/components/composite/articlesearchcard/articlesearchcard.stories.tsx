// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import ArticleSearchCard from './articlesearchcard.component';
import { articleSearchCardSample, articleSearchCardSample2 } from './sample';

const meta: Meta<typeof ArticleSearchCard> = {
  component: ArticleSearchCard,
};

export default meta;
type Story = StoryObj<typeof ArticleSearchCard>;

export const Variant1: Story = {
  args: articleSearchCardSample,
};

export const Variant2: Story = {
  args: articleSearchCardSample2,
};

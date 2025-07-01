import type { Meta, StoryObj } from '@storybook/react';
import MarketplaceContentCard from './marketplacecontentcard.component';
import {
    marketplaceContentCardSample,
    marketplaceContentCardSample2
} from './sample';

const meta: Meta<typeof MarketplaceContentCard> = {
    component: MarketplaceContentCard,
};

export default meta;
type Story = StoryObj<typeof MarketplaceContentCard>;

export const Variant1: Story = {
    args: marketplaceContentCardSample,
};

export const Variant2: Story = {
    args: marketplaceContentCardSample2,
}; 
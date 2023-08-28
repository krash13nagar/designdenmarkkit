// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { TitleForUrl } from './titleforurl.component';

const meta: Meta<typeof TitleForUrl> = {
  component: TitleForUrl,
};

export default meta;
type Story = StoryObj<typeof TitleForUrl>;

export const ImageDefault: Story = {
  args: {
    seoTitleProps: {
      label: 'Seo Title',
      value:
        'test seo title dsajh dsakjhd kjsah dkjsah dkjsah dkjhsadkjh sakjdh kjsahd kjsahdkjsah kdjh askjdh kasjdh kjsah dkjsahdkjjksah dkjh sakjdh kjsah dk dkasjh dasjhdkjash dkjash dkjash djkashjkdh askjhd kjasd hkjash dkjash kjadsh kjdash kjdsah kjdsah kjasdh kjsadh kjdh skjh dsakj',
      onChange: () => console.log(''),
      fullWidth: true,
    },
    overrideLinkProps: {
      label: 'Ovveride Link',
      value: 'test Ovveride link',
      onChange: () => console.log(''),
      fullWidth: true,
    },
  },
};

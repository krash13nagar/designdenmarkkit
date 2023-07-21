// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react'
import { DenBadge } from './badge.component';

const meta: Meta<typeof DenBadge> = {
  component: DenBadge,
};

export default meta;
type Story = StoryObj<typeof DenBadge>;

export const Primary: Story = {
  args: {
   badgeContent : '4',
    color:"primary",
    children:React.createElement('div',{
      style:{
       width:"40px",
       height:"40px",
       border:"1px solid blue",
      }
    })
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import DenBreadcrumbs from './breadcrumbs.component';
import DenLink from '../link/link.component';
import DenTypography from '../typography/typography.component';

const meta: Meta<typeof DenBreadcrumbs> = {
  component: DenBreadcrumbs,
};

export default meta;

type Story = StoryObj<typeof DenBreadcrumbs>;

const breadcrumbs = [
  <DenLink underline="hover" key="1" color="inherit" href="/">MUI</DenLink>,
  <DenLink underline="hover" key="2" color="inherit" href="/">Core</DenLink>,
  <DenTypography key="3" color="text.primary" variant="inherit">Breadcrumb</DenTypography>,
];

export const Primary: Story = {
  args: {
    children: breadcrumbs,
    separator: "/",
    itemsAfterCollapse: 1,
    itemsBeforeCollapse: 1,
    maxItems: 8,
    slotProps: {},
    slots: {}
  },
};

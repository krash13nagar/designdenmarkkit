import type { Meta, StoryObj } from '@storybook/react';
import BasicTable from './basictable.component';
import StatusDot from '../../common/statusdot/statusdot.component';
import React from 'react';
import { DenTooltip, DenTypography } from '../../common';

const meta: Meta<typeof BasicTable> = {
  component: BasicTable,
};

const Text = ({ text }: any) => {
  return (
    <DenTooltip title={text} arrow>
      <DenTypography>{text}</DenTypography>
    </DenTooltip>
  );
};

export default meta;
type Story = StoryObj<typeof BasicTable>;

export const Basic: Story = {
  args: {
    headings: ['Status', 'Message', 'Expires at', 'Name'],
    rows: [
      {
        rowData: [
          <StatusDot />,
          <Text
            text="Markets are all time High as Sensex jumps over 3000 points to hit the
  50,000 mark for all time. Nifty above 14,700 market at all time high as
  Sensex."
          />,
          '14:27',
          'MB',
        ],
        id: 0,
      },
      {
        rowData: [
          <StatusDot />,
          <Text
            text="Markets are all time High as Sensex jumps over 3000 points to hit the
  50,000 mark for all time. Nifty above 14,700 market at all time high as
  Sensex."
          />,
          '14:27',
          'MB',
        ],
        id: 1,
      },
      {
        rowData: [
          <StatusDot />,
          <Text
            text="Markets are all time High as Sensex jumps over 3000 points to hit the
  50,000 mark for all time. Nifty above 14,700 market at all time high as
  Sensex."
          />,
          '14:27',
          'MB',
        ],
        id: 2,
      },
      {
        rowData: [
          <StatusDot />,
          <Text
            text="Markets are all time High as Sensex jumps over 3000 points to hit the
  50,000 mark for all time. Nifty above 14,700 market at all time high as
  Sensex."
          />,
          '14:27',
          'MB',
        ],
        id: 3,
      },
      {
        rowData: [
          <StatusDot />,
          <Text
            text="Markets are all time High as Sensex jumps over 3000 points to hit the
  50,000 mark for all time. Nifty above 14,700 market at all time high as
  Sensex."
          />,
          '14:27',
          'MB',
        ],
        id: 4,
      },
    ],
    showEditColumn: true,
  },
};

import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DenAccordion } from './accordion.component';
import { DenAccordionSummary } from '../accordionsummary/accordionsummary.component';
import { DenAccordionDetails } from '../accordiondetails/accordiondetails.component';
import { DenTypography } from '../typography/typography.component';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Source } from '@storybook/blocks';

const AccordianCom = () => {
  return (
    <DenAccordion>
      <DenAccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <DenTypography>DenAccordion 1</DenTypography>
      </DenAccordionSummary>
      <DenAccordionDetails>
        <DenTypography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </DenTypography>
      </DenAccordionDetails>
    </DenAccordion>
  );
};
const AccordianDisabled = () => {
  return (
    <DenAccordion disabled>
      <DenAccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3a-content"
        id="panel3a-header"
      >
        <DenTypography>Disabled DenAccordion</DenTypography>
      </DenAccordionSummary>
    </DenAccordion>
  );
};

const meta: Meta<typeof DenAccordion> = {
  component: DenAccordion,
};

export default meta;
type Story = StoryObj<typeof DenAccordion>;

export const Default: Story = {
  args: {
    children: AccordianCom(),
  },
};
export const Disabled: Story = {
  args: {
    children: AccordianDisabled(),
  },
  parameters: {
    docs: {
      source: { language: 'tsx' },
    },
  },
};

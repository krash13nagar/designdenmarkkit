import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import DenButton from './button.component';

type Story = ComponentStory<typeof DenButton>;

export default {
  title: 'Denmark/Common/Button',
  component: DenButton,
} as ComponentMeta<typeof DenButton>;

const Template: Story = (args) => <DenButton {...args} />;

export const SampleInput = Template.bind({});
SampleInput.args = {
  label: 'Full Name',
  name: 'name',
  //   helperText: 'Enter the full name',
};

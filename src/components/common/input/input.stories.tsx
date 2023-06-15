/**
 * @author: sandeep.gupta1@timesinternet.in
 * @desc: Storybook display for Input component
 */

import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Input from './input.component';
import { TextFieldProps } from '@mui/material';

type Story = ComponentStory<typeof Input>;

export default {
  title: 'Denmark/Common/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: Story = (args: TextFieldProps) => <Input {...args} />;

export const SampleInput = Template.bind({});
SampleInput.args = {
  label: 'Full Name',
  name: 'name',
  helperText: 'Enter the full name',
};


/**
 * @author: sandeep.gupta1@timesinternet.in
 * @desc: Storybook display for Input component
 */

import React from 'react';
import Input from './input.component';

export default {
  title: 'Denmark/Common/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const SampleInput = Template.bind({});
SampleInput.args = {
  label: 'Full Name',
  name: 'name',
  helperText: 'Enter the full name',
};

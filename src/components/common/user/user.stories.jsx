
/**
 * @author: sandeep.gupta1@timesinternet.in
 * @desc: Storybook display for User component
 */

import React from 'react';
import User from './user.component';

export default {
  title: 'Denmark/Common/User',
  component: User,
};

const Template = (args) => <User {...args} />;

export const SampleUser = Template.bind({});
SampleUser.args = {
  name: 'Mohan Kumar',
  age: 21,
};
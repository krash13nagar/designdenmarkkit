/**
 * @author: sandeep.gupta1@timesinternet.in
 * @desc: Storybook display for User component
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { UserProps } from './types';
import User from './user.component';

type Story = ComponentStory<typeof User>;
export default {
  title: 'Denmark/Common/User',
  component: User,
} as ComponentMeta<typeof User>;

const Template: Story = (args: UserProps) => <User {...args} />;

export const SampleUser = Template.bind({});

SampleUser.args = {
  name: 'Mohan Kumar',
  age: 21,
};

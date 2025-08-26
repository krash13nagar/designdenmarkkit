import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PollMCQCard } from './pollmcqcard.component';
import { PollMCQCardConfig } from './pollmcqcard.types';

export default {
    title: 'Composite/PollMCQCard',
    component: PollMCQCard,
    parameters: {
        layout: 'padded',
    },
} as ComponentMeta<typeof PollMCQCard>;

const Template: ComponentStory<typeof PollMCQCard> = (args) => <PollMCQCard {...args} />;

const samplePollData = {
    msid: 123429091,
    updateDate: 1755767220069,
    insertDate: 1755767220069,
    hostid: [83],
    contenttypeid: 4,
    contentsubtypeid: 0,
    title: "Are tit-for-tat airspace bans an effective strategy in international relations?",
    publish_s_date: 1755767220069,
    publish_e_date: 4102424999000,
    path: "TOIonline/Polls (In Articles)/Are tit-for-tat airspace bans an effective strategy in international relations?",
    primeCategoryId: 0,
    status: "2",
    voteCount: 749,
    pollOptions: [
        {
            msidPollOptions: 123393133,
            optionNo: 1,
            isCorrect: false,
            anscount: 486,
            percentage: 64.88,
            optionText: "Yes, they are effective deterrents"
        },
        {
            msidPollOptions: 123393134,
            optionNo: 2,
            isCorrect: false,
            anscount: 263,
            percentage: 35.12,
            optionText: "No, they escalate tensions unnecessarily"
        }
    ]
};

const sampleMCQData = {
    ...samplePollData,
    title: "What is the capital of France?",
    voteCount: 1247,
    pollOptions: [
        {
            msidPollOptions: 123393135,
            optionNo: 1,
            isCorrect: false,
            anscount: 124,
            percentage: 10.0,
            optionText: "London"
        },
        {
            msidPollOptions: 123393136,
            optionNo: 2,
            isCorrect: true,
            anscount: 1000,
            percentage: 80.2,
            optionText: "Paris"
        },
        {
            msidPollOptions: 123393137,
            optionNo: 3,
            isCorrect: false,
            anscount: 73,
            percentage: 5.9,
            optionText: "Madrid"
        },
        {
            msidPollOptions: 123393138,
            optionNo: 4,
            isCorrect: false,
            anscount: 50,
            percentage: 3.9,
            optionText: "Berlin"
        }
    ]
};

export const PollCard = Template.bind({});
PollCard.args = {
    data: samplePollData,
    type: 'poll',
    cardMenuOptions: [
        { label: 'Edit', onClickFnc: () => console.log('Edit clicked') },
        { label: 'Delete', onClickFnc: () => console.log('Delete clicked') },
    ],
    onVoteClick: () => console.log('Vote clicked'),
    onOptionClick: (option) => console.log('Option clicked:', option),
} as PollMCQCardConfig;

export const MCQCard = Template.bind({});
MCQCard.args = {
    data: sampleMCQData,
    type: 'mcq',
    cardMenuOptions: [
        { label: 'Edit', onClickFnc: () => console.log('Edit clicked') },
        { label: 'Delete', onClickFnc: () => console.log('Delete clicked') },
    ],
    onVoteClick: () => console.log('Vote clicked'),
    onOptionClick: (option) => console.log('Option clicked:', option),
} as PollMCQCardConfig;

export const PollWithResults = Template.bind({});
PollWithResults.args = {
    data: samplePollData,
    type: 'poll',
    showResults: true,
    userVote: 1,
} as PollMCQCardConfig;

export const MCQWithResults = Template.bind({});
MCQWithResults.args = {
    data: sampleMCQData,
    type: 'mcq',
    showResults: true,
    userVote: 2,
} as PollMCQCardConfig;

export const PollSelected = Template.bind({});
PollSelected.args = {
    data: samplePollData,
    type: 'poll',
    selected: true,
    checkboxProps: {
        isChecked: true,
        tooltipText: 'Selected for bulk action',
    },
} as PollMCQCardConfig;

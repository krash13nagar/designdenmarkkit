import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import Schedule from '@mui/icons-material/Schedule';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import '../../../styles/storybookBasesStyles.scss';
import ArticlePreview from './articlepreview.component';

const meta: Meta<typeof ArticlePreview> = {
  component: ArticlePreview,
};

export default meta;
type Story = StoryObj<typeof ArticlePreview>;

export const Basic: Story = {
  args: {
    title:
      'Transformation of APJ Abdul Kalam Park into a Versatile Recreational Space',
    date: 'July 7, 2023',
    time: '4:44 PM',
    wordCount: '234',
    popOutIcon: <OpenInNewIcon />,
    clockIcon: <Schedule />,
    synopsis:
      "The APJ Abdul Kalam Park is set for a transformation three years after its inauguration. Planned as a multi-purpose space, the park will host a myriad of activities and services including a cafeteria, outdoor gym, and rental areas for art and sports events. The park is also set to incorporate an IT workstation. Backed by the civic body, the park will develop revenue-generating features, which will significantly upgrade the existing facilities. The initiative aims to preserve the green space, and is set to be a notable milestone in enhancing the city's recreational and educational landscape.",
    richContent:
      "The APJ Abdul Kalam Park at Poundukadavu is all set for a transformation, nearly three years after its inauguration. The park, initially built under the Atal Mission for Rejuvenation and Urban Transformation (AMRUT) project, aims to be converted into a multi-purpose recreational space. The new plan is backed by the civic body which will be a significant upgrade in order to feature multiple revenue-generating options.<br/>Located close to Technopark's Phase-1 and Phase-3 campuses, this transformation will also include an IT workstation within the park’s premises. With its new avatar, the park is expected to enhance its appeal by offering a myriad of activities and services. A corporation has been approached with an expression of interest summons to undertake the park's maintenance, which has been a matter of concern in the past due to the lack of a proper system, resulting in the park often being kept in a poor state.<br/>Among the possible initiatives are a cafetaria, digital advertisements, comfort stations, an IT workstation connecting Wi-Fi, hosting exhibition trade fairs, and providing rental spaces for arts and sports competitions organised by educational institutions. Besides, the park plans to incorporate outdoor gyms, yoga and meditation centres into its premises. An additional project is also set to be launched at Poundukadavu, proposing an agro bazar and entry pavilion covering a plinth area of 1720 sq m across 6.95 acres.<br/>The park, which covers the largest recreational space in the city, has been handed over to the corporation by the Vikram Sarabhai Space Centre for this project. This green project is expected to preserve approximately 500 species of plants and trees, thereby creating an arboretum in the area. Additionally, it will feature a 1.5-kilometre-long cycle track, a pathway, a toilet complex, and an exhibition centre, adding to its allure and functionality.<br/>In other news, Dr APJ Abdul Kalam Technical University has held a meeting to chart the admission processes for the academic year 2023. The university has also announced the commencement of counselling processes for various undergraduate courses under the Central Universities Entrance Test (CUET) from July 28. With the registration process for BTech admissions already in progress, the university plans to conduct counselling in four phases. Furthermore, the university will also conduct counselling for 12 state universities in Uttar Pradesh this year, amplifying its reach and impact. The transformation of the APJ Abdul Kalam Park is expected to be a significant milestone in enhancing the city's recreational and educational landscape.",
    popOutTooltip: 'Open In New Tab',
    handlePopOutClick: () => console.log('open new tab clicked!'),
    id: '123456',
    agency: 'ANI',
    source: 'TOI',
  },
};

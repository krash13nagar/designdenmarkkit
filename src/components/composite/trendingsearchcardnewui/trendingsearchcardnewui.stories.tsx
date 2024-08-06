import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';

import { TrendingSearchCardNewUi } from './trendingsearchcardnewui.component';

const meta: Meta<typeof TrendingSearchCardNewUi> = {
    component: TrendingSearchCardNewUi,
};

export default meta;
type Story = StoryObj<typeof TrendingSearchCardNewUi>;

export const Basic: Story = {
    args: {
        count: 100000,
        label: 'World Cup Schedule',
        icon: <TwitterIcon style={{ color: '#5da8dc' }} />,
        tags: "India TV",
        description: "India won the t-20 worldcup 2024 in westindies against the mighty England. ",
        keywords: [
            "ind vs sl odi",
            "india vs. sri lanka",
            "india vs sri lanka 2nd odi",
            "sl बनाम ind",
            "ind vs sl 2nd odi",
            "india vs sri lanka odi",
            "रोहित शर्मा",
            "odi ind vs sl"
          ],
        trendingFrom: "5 mins ago",
        handleClick: () => console.log("clicked!"),
        competitorNewsDetails: [
                        {
                            "competitorName": "Hindustan Times",
                            "competitorCode": "HT",
                            "iconURL": "https://cdn.freelogovectors.net/wp-content/uploads/2021/12/hindustan-times-logo-freelogovectors.net_.png",
                            "newsURL": "https://www.hindustantimes.com/cricket/india-vs-sri-lanka-live-score-1st-odi-ind-vs-sl-scorecard-updates-today-match-2-august-2024-in-premadasa-stadium-colombo-101722575561546.html",
                            "title": "India vs Sri Lanka, 1st ODI highlights: Series opener ends ...",
                            "description": "Sri Lanka stunned India with a late comeback as Charith Asalanka took two successive wickets to force a tie in the 1st ODI. | Crickit.",
                            "isPublished": true,
                            "publishedDate": null,
                            "metadata": null
                        },
                        {
                            "competitorName": "NDTV",
                            "competitorCode": "NDTV",
                            "iconURL": "https://i.pinimg.com/736x/8b/12/52/8b125232501ef2f169a7085149b14a3b.jpg",
                            "newsURL": "https://www.hindustantimes.com/cricket/india-vs-sri-lanka-live-score-1st-odi-ind-vs-sl-scorecard-updates-today-match-2-august-2024-in-premadasa-stadium-colombo-101722575561546.html",
                            "title": "India vs Sri Lanka, 1st ODI highlights: Series opener ends ...",
                            "description": "Sri Lanka stunned India with a late comeback as Charith Asalanka took two successive wickets to force a tie in the 1st ODI. | Crickit.",
                            "isPublished": false,
                            "publishedDate": null,
                            "metadata": null
                        },
                        {
                            "competitorName": "Zee News",
                            "competitorCode": "ZEE",
                            "iconURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKo21MHOGeneLudlfT2ABQwuw90BVxjRMYAMyhp8VyXzaGpIDupkl9-O3fSRDJrV4VXAs&usqp=CAU",
                            "newsURL": "https://timesofindia.indiatimes.com/technology/tech-news/ex-microsoft-employee-who-got-fired-shares-why-he-is-thankful-to-microsoft/articleshow/112276762.cms",
                            "title": "India vs Sri Lanka, 1st ODI highlights: Series opener ends ...",
                            "description": "Sri Lanka stunned India with a late comeback as Charith Asalanka took two successive wickets to force a tie in the 1st ODI. | Crickit.",
                            "isPublished": true,
                            "publishedDate": null,
                            "metadata": null
                        },
                        {
                            "competitorName": "Zee News",
                            "competitorCode": "ZEE",
                            "iconURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKo21MHOGeneLudlfT2ABQwuw90BVxjRMYAMyhp8VyXzaGpIDupkl9-O3fSRDJrV4VXAs&usqp=CAU",
                            "newsURL": "https://www.hindustantimes.com/cricket/india-vs-sri-lanka-live-score-1st-odi-ind-vs-sl-scorecard-updates-today-match-2-august-2024-in-premadasa-stadium-colombo-101722575561546.html",
                            "title": "India vs Sri Lanka, 1st ODI highlights: Series opener ends ...",
                            "description": "Sri Lanka stunned India with a late comeback as Charith Asalanka took two successive wickets to force a tie in the 1st ODI. | Crickit.",
                            "isPublished": true,
                            "publishedDate": null,
                            "metadata": null
                        },
                        {
                            "competitorName": "Zee News",
                            "competitorCode": "ZEE",
                            "iconURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKo21MHOGeneLudlfT2ABQwuw90BVxjRMYAMyhp8VyXzaGpIDupkl9-O3fSRDJrV4VXAs&usqp=CAU",
                            "newsURL": "https://www.hindustantimes.com/cricket/india-vs-sri-lanka-live-score-1st-odi-ind-vs-sl-scorecard-updates-today-match-2-august-2024-in-premadasa-stadium-colombo-101722575561546.html",
                            "title": "India vs Sri Lanka, 1st ODI highlights: Series opener ends ...",
                            "description": "Sri Lanka stunned India with a late comeback as Charith Asalanka took two successive wickets to force a tie in the 1st ODI. | Crickit.",
                            "isPublished": true,
                            "publishedDate": null,
                            "metadata": null
                        }
                    ]
    },
};
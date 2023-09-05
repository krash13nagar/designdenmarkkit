import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import RecommendKeywords from './recommend.keywords';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { metaInfo, recommendedKeywords } from './keywords.types';
import { CachedOutlined } from '@mui/icons-material';

const meta: Meta<typeof RecommendKeywords> = {
  component: RecommendKeywords,
};

export default meta;
type Story = StoryObj<typeof RecommendKeywords>;

export const Basic: Story = {
  args: {
    "recommendedConfig": {
          title: "Recommended Keywords",
          nodatafound: "No recommendation found",
          errorMsg: "API Error",
          refreshIcon: <CachedOutlined fontSize="inherit" />,
          addKeywordIcon: <AddCircleOutlineIcon/>,
          refreshCallbackFn: undefined,
          addCallbackFn: function(elm: recommendedKeywords){
            console.log("clicked refresh btn")
          }
      },
      "recommendedKeywords" : [
    {
        "keywordName": "Aisha Verma",
        "keyEnum": "Denny",
        "source": "Denny",
        "relevance": 100,
        "metaInfo": undefined,
    },
    {
        "keywordName": "Guru Divekar",
        "keyEnum": "Denny",
        "source": "Denny",
        "relevance": 100,
        "metaInfo": undefined,
    },
    {
        "keywordName": "young woman",
        "keyEnum": "Denny",
        "source": "Denny",
        "relevance": 80,
        "metaInfo": {
          "hostId": 83,
          "aliasName": "union budget of india,Indian union budget,budget session india,indias budget session,annual budget of india,india annual budget",
          "entityName": "budget",
          "keywordSubtype": "undefined",
          "entityId": "budget",
          "seoPath": "politics/budget",
          "msId": 62690834
      },
    },
    {
        "keywordName": "defenestration",
        "keyEnum": "Denny",
        "source": "Denny",
        "relevance": 80,
        "metaInfo": undefined,
    },
    {
        "keywordName": "masked man",
        "keyEnum": "Denny",
        "source": "Denny",
        "relevance": 80,
        "metaInfo": undefined,
    },
    {
        "keywordName": "CBI",
        "keyEnum": "Denny",
        "source": "Denny",
        "relevance": 20,
        "metaInfo": undefined,
    },
    {
        "keywordName": "Mumbai",
        "keyEnum": "TOPIC",
        "keywordType": "place",
        "source": "TOPIC",
        "relevance": 60,
        "metaInfo": undefined as metaInfo,
    },
    {
        "keywordName": "Aditya",
        "keyEnum": "TOPIC",
        "keywordType": "cinema-entertainment",
        "source": "TOPIC",
        "relevance": 60,
        "metaInfo": undefined,
    },
    {
        "keywordName": "Aisha",
        "keyEnum": "TOPIC",
        "keywordType": "cinema-entertainment",
        "source": "TOPIC",
        "relevance": 60,
        "metaInfo": undefined,
    },
    {
        "keywordName": "Guru",
        "keyEnum": "TOPIC",
        "keywordType": "cinema-entertainment",
        "source": "TOPIC",
        "relevance": 60,
        "metaInfo": undefined,
    },
    {
        "keywordName": "Uttar Pradesh",
        "keyEnum": "TOPIC",
        "keywordType": "place",
        "source": "TOPIC",
        "relevance": 60,
        "metaInfo": undefined,
    },
    {
        "keywordName": "murder case",
        "keyEnum": "TOPIC",
        "keywordType": "miscellaneous",
        "source": "TOPIC",
        "relevance": 60,
        "metaInfo": undefined,
    },
    {
        "keywordName": "World Health Organisation",
        "keyEnum": "TOPIC",
        "keywordType": "organisation-company",
        "source": "TOPIC",
        "relevance": 60,
        "metaInfo": undefined,
    },
    {
        "keywordName": "aisha verma",
        "keyEnum": "General",
        "source": "Orion",
        "relevance": 100,
        "metaInfo": undefined,
    },
    {
        "keywordName": "guru",
        "keyEnum": "General",
        "source": "Orion",
        "relevance": 80,
        "metaInfo": undefined,
    },
    {
        "keywordName": "guru divekar",
        "keyEnum": "General",
        "source": "Orion",
        "relevance": 50,
        "metaInfo": undefined,
    },
    {
        "keywordName": "debu",
        "keyEnum": "General",
        "source": "Orion",
        "relevance": 50,
        "metaInfo": undefined,
    },
    {
        "keywordName": "aditya rathore",
        "keyEnum": "General",
        "source": "Orion",
        "relevance": 50,
        "metaInfo": undefined,
    },
    {
        "keywordName": "cbi",
        "keyEnum": "General",
        "source": "Orion",
        "relevance": 50,
        "metaInfo": undefined,
    },
    {
        "keywordName": "caesar",
        "keyEnum": "General",
        "source": "Orion",
        "relevance": 50,
        "metaInfo": undefined,
    },
    {
        "keywordName": "aisha",
        "keyEnum": "General",
        "source": "Orion",
        "relevance": 50,
        "metaInfo": undefined,
    },
    {
        "keywordName": "mumbai",
        "keyEnum": "General",
        "source": "Orion",
        "relevance": 20,
        "metaInfo": undefined,
    }
  ]
  },
};
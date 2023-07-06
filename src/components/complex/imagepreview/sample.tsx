import MoreVertIcon from '@mui/icons-material/MoreVert';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { MenuEnum } from './imagepreview.types';

export const sample = {
  containerHeader: 'View Image',
  msid: 1234567,
  imageSource: 'https://picsum.photos/800/400',
  selectedAspectRatio: '16:9',
  title: 'Modi’s inauguration ceremony at the New Parliament',
  caption:
    'Indian prime minister Narendra Modi prays before inaugurating  the new parliament building, in New Delhi, India, Sunday,May…2023. The new triangular parliament building, built at anestimated cost of $120 million, is part of a $2.8 billion revampof British-era offices and residences in central New Delhicalled “Central Vista”, even as India’s major opposition partiesboycotted the inauguration, in a rare show of unity against theHindu nationalist ruling party that has completed nine years inpower and is seeking a third term in crucial general electionsnext year. (AP Photo)',
  imageInfo: [
    { label: 'Agency', value: 'ANI', col: 6, align: 'column' },
    { label: 'Source', value: 'PTI', col: 6, align: 'column' },
    {
      label: 'Original Resolution',
      value: '1070*580px',
      col: 6,
      align: 'column',
    },
    {
      label: 'Original File Size',
      value: '31kb',
      col: 6,
      align: 'column',
    },
    { label: 'Type', value: 'Jpeg', col: 6, align: 'column' },
    {
      label: 'Agency Usage Quota',
      value: '480/600',
      col: 6,
      align: 'column',
    },
  ],
  additionalInfo: {
    header: 'Additional Info',
    info: [
      { label: 'Photographer', value: 'Ramnik Mukharji' },
      { label: 'Category', value: 'Politics' },
      {
        label: 'keywords',
        value: ['test', 'India', 'Denmark', 'USA', 'Design'],
      },
    ],
  },
  viewPorts: {
    header: 'Show image in different viewports',
    ports: [
      { label: 'Widescreen', value: '16:9' },
      { label: 'iPhone', value: '9:16' },
      { label: 'Facebook Post', value: '1.91:1' },
      { label: 'Square', value: '1:1' },
      { label: 'Landscape', value: '3:2' },
      { label: 'Presentation Slide', value: '4:3' },
    ],
  },
  actions: [
    { label: 'Edit Image', variant: 'contained', type: MenuEnum.button },
    {
      type: MenuEnum.menu,
      // label: 'test',
      icon: MoreVertIcon,
      options: [
        { label: 'Download', startIcon: PriorityHighIcon },
        {
          label: 'Set as Thumbnail',
          startIcon: PriorityHighIcon,
        },
      ],
    },
  ],
};

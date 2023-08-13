import MoreVertIcon from '@mui/icons-material/MoreVert';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { MenuEnum } from './imagepreview.types';

export const sample = {
  containerHeader: 'View Image',
  msid: 1234567,
  imageSource: 'https://picsum.photos/1920/1280',
  selectedAspectRatio: '16:9',
  title: 'Modi’s inauguration ceremony at the New Parliament',
  caption:
    '<p><strong>New Delhi, Aug 11 (IANS) Isolate</strong>d heavy<sub> to very hea</sub>vy rainfall is <sup>likely to continue</sup> over Uttarakhand, Bihar, Sikkim, Arunachal Pradesh, Assam, <u>and Meghalaya during </u>next five days while rainfall activity over rest of the country is likely to be subdued during next one week before a revival of active monsoon conditions thereafter, the IMD said on Friday.</p>',
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
        value: [
          'test djh fdksjhfdskjhf kdsjhf kjsdh fkjdsh fkjh dskjhf kjdshf kjdsh',
          'India',
          'Denmark',
          'USA',
          'Design',
        ],
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
  artDate: 1690788146853,
  creationDateTime: 1690788146853,
};

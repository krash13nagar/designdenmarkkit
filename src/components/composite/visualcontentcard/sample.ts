import type {
  VisualContentCardMenuOption,
  VisualContentCardProps,
  VisualContentCardVariant,
} from './visualcontentcard.type';

export const VISUAL_CARD_MENU_OPTIONS: VisualContentCardMenuOption[] = [
  {
    label: 'Preview',
    onClickFnc: () => {
      console.log('VisualContentCard: Preview');
    },
  },
  {
    label: 'Rewrite',
    onClickFnc: () => {
      console.log('VisualContentCard: Rewrite');
    },
  },
  {
    label: 'Translate',
    onClickFnc: () => {
      console.log('VisualContentCard: Translate');
    },
  },
];

const baseVisualSample: Omit<VisualContentCardProps, 'contentType'> = {
  id: '7650409',
  slidesCount: 10,
  imagesCount: 8,
  videosCount: 2,
  hostName: 'The Times of India',
  updatedDateTimeEpoch: 1776756528634,
  publishDateTimeEpoch: 1776756481528,
  imageUrl:
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
  imgTitle:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  cardMenuOptions: VISUAL_CARD_MENU_OPTIONS,
  handleCTA: () => {
    console.log('VisualContentCard: open in new tab');
  },
  handleClick: () => {
    console.log('VisualContentCard: card clicked');
  },
  brokenImgText: 'No Thumb Image',
  classes: { root: 'cardWrapperClass' },
  active: false,
};

export const visualContentCardSample: VisualContentCardProps = {
  ...baseVisualSample,
  contentType: 'photofeature',
};

export const visualContentCardVariantSamples: Record<
  VisualContentCardVariant,
  VisualContentCardProps
> = {
  slideshow: {
    ...baseVisualSample,
    contentType: 'slideshow',
    slidesCount: 10,
    imgTitle: 'Slideshow card sample for VisualContentCard.',
  },
  webstory: {
    ...baseVisualSample,
    contentType: 'webstory',
    slidesCount: 10,
    imgTitle: 'Webstory card sample for VisualContentCard.',
  },
  visualrichstory: {
    ...baseVisualSample,
    contentType: 'visualrichstory',
    slidesCount: 10,
    imgTitle: 'Visual rich story card sample for VisualContentCard.',
  },
  photofeature: {
    ...baseVisualSample,
    contentType: 'photofeature',
    slidesCount: 10,
    imgTitle: 'Photofeature card sample for VisualContentCard.',
  },
};

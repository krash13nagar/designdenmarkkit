/**
 * @author: sandeep.gupta1@timesinternet.in
 * @desc: Denmark UI components: app
 */

import React, { useState } from 'react';
import TestCommon from './testcommon';
import BasicMenu from './testmenu';
import DenLink from './components/common/link/link.component';
import DenBreadcrumbs from './components/common/breadcrumbs/breadcrumbs.component';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  DenTypography,
  ImagePreview,
  Title,
  TitleForUrl,
  ImageAuthoring,
} from './components';
import { TrendingSearchCard } from './components/composite/trendingsearchcard';
import { sample } from './components/complex/imagepreview/sample';
import { config } from './components/complex/imageauthoring/metadata/metadata.config';
import Summary from './components/complex/imageauthoring/metadata/metadata.sample.summary';
import MetadataUtils from './components/complex/imageauthoring/metadata/metadata.utils';

declare const module: {
  hot: {
    accept: any;
  };
};

interface AppProps {
  reqObj: object;
  callbackNgFn: () => void;
}

const breadcrumbs = [
  <DenLink underline="hover" key="1" color="inherit" href="/">
    MUI
  </DenLink>,
  <DenLink underline="hover" key="2" color="inherit" href="/">
    Core
  </DenLink>,
  <DenTypography key="3" color="text.primary" variant="inherit">
    Breadcrumb
  </DenTypography>,
];

const App = (props: AppProps) => {
  const [open, setOpen] = useState(false);
  const [triggerMBDone, setTriggerMBDone] = useState(false);
  const [triggerMBReset, setTriggerMBReset] = useState(false);
  const [model, setModel] = useState<any>(config.metadataConfig.value);
  const [summary, setSummary] = useState<any>(Summary);

  const onClickDelete = (item: any, value: any) => {
    const model = MetadataUtils.deleteMetadataGroup(
      item.metaGroup.metatype,
      value
    );
    return model;
  };

  const openMetaModel = () => {
    setOpen(true);
  };
  const onCancelClick = () => {
    // const _summary = MetadataUtils.makeSummary(originalModel);
    // setSummary(_summary);
    setTriggerMBReset(true);
    setTimeout(() => {
      setTriggerMBReset(false);
    }, 1000);
    setOpen(false);
  };
  const onSaveClick = () => {
    const _summary = MetadataUtils.makeSummary(model, summary);
    setSummary(_summary);
    setTriggerMBDone(true);
    setTimeout(() => {
      setTriggerMBDone(false);
    }, 1000);
    setOpen(false);
  };
  const handleWidgetChange = (
    type: string | number,
    value: any,
    olderValue: any,
    msid: any
  ) => {
    const obj = MetadataUtils.makeMetaObjectForModel(
      type,
      value,
      olderValue,
      msid
    );
    return obj;
    // model[type] = obj;
    // const newObj = Object.assign({},model);
    // setModel(newObj);
    //console.log(group);
  };
  const makeSummary = (model: any, summary: any) => {
    const _summary = MetadataUtils.makeSummary(model, summary);
    return _summary;
  };
  const updateModel = (model: any) => {
    setModel(model);
  };
  const handleAutocomplete = () => {
    let data = [
      {
        id: 'TRAVEL GUIDE',
        value: 'TRAVEL GUIDE',
        title: 'TRAVEL GUIDE',
        display: {
          title: 'TRAVEL GUIDE',
        },
      },
      {
        id: 'Travel News',
        value: 'Travel News',
        title: 'Travel News',
        display: {
          title: 'Travel News',
        },
      },
      {
        id: 'TRAVEL TIPS',
        value: 'TRAVEL TIPS',
        title: 'TRAVEL TIPS',
        display: {
          title: 'TRAVEL TIPS',
        },
      },
      {
        id: 'TRAVEL TRENDS',
        value: 'TRAVEL TRENDS',
        title: 'TRAVEL TRENDS',
        display: {
          title: 'TRAVEL TRENDS',
        },
      },
    ];
    return data;
  };
  const dialogClose = (event: any, reason: any) => {
    if (reason && reason == 'backdropClick') return;
    setOpen(false);
  };
  const metadataProps = {
    title: 'Selected Group',
    summary: config.metadataConfig.summary,
    selectedGroup: config.metadataConfig.selectedGroup,
    value: model,
    makeSummary: makeSummary,
    modelUpdate: updateModel,
    triggerMBDone: triggerMBDone,
    triggerMBReset: triggerMBReset,
  };
  const metadataSelectorProps = {
    metaGroup: config.metadataConfig.metagroup,
  };
  const metadataWidgetProps = {
    metaDefinationList: config.metadataConfig.metadefinitionList,
    onChangeWidget: handleWidgetChange,
    handleAutocomplete: handleAutocomplete,
  };
  const metadataSummaryProps = {
    onClickDelete: onClickDelete,
  };
  const summaryProps = {
    summary: summary,
    openMetaModel: openMetaModel,
  };
  const dialogProps = {
    open: open,
    onCancelClick: onCancelClick,
    onSaveClick: onSaveClick,
    dialogClose: dialogClose,
  };

  // <AppRoutes reqObj={props.reqObj} callbackNgFn={props.callbackNgFn} />
  return (
    <>
      {/* Test App */}
      {/* <TestCommon />
    <BasicMenu />
    <DenLink underline="none">MUI</DenLink>
    <DenBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
    >
      {breadcrumbs}
    </DenBreadcrumbs>
    <TrendingSearchCard
      label="World Cup Schedule"
      count={'100k+'}
      icon={<TwitterIcon style={{ color: '#5da8dc' }} />}
    /> */}
      {/* <ImagePreview {...sample} /> */}
      {/* <Title
      label="Image Title"
      fullWidth
      value="jdkash akjdh kajshd kjahs dkjahs dkjha dskj"
    />
    <TitleForUrl
      seoTitleProps={{
        label: 'Seo Title',
        value:
          'test seo title dsajh dsakjhd kjsah dkjsah dkjsah dkjhsadkjh sakjdh kjsahd kjsahdkjsah kdjh askjdh kasjdh kjsah dkjsahdkjjksah dkjh sakjdh kjsah dk dkasjh dasjhdkjash dkjash dkjash djkashjkdh askjhd kjasd hkjash dkjash kjadsh kjdash kjdsah kjdsah kjasdh kjsadh kjdh skjh dsakj',
        onChange: () => console.log(''),
        fullWidth: true,
      }}
      overrideLinkProps={{
        label: 'Ovveride Link',
        value: 'test Ovveride link',
        onChange: () => console.log(''),
        fullWidth: true,
      }}
    /> */}
      <ImageAuthoring
        // onClickDelete={onClickDelete}
        // openMetaModel={openMetaModel}
        // onCancelClick={onCancelClick}
        // onSaveClick={onSaveClick}
        // handleWidgetChange={handleWidgetChange}
        // makeSummary={makeSummary}
        // updateModel={updateModel}
        metadataProps={metadataProps}
        metadataSelectorProps={metadataSelectorProps}
        metadataWidgetProps={metadataWidgetProps}
        metadataSummaryProps={metadataSummaryProps}
        summaryProps={summaryProps}
        dialogProps={dialogProps}
        // handleAutocomplete={handleAutocomplete}
        // summary={summary}
        // open={open}
        // //model={model}
        // triggerMBDone={triggerMBDone}
        // triggerMBReset={triggerMBReset}
        // dialogClose={dialogClose}
      />
      {/* <TestCommon /> */}
    </>
  );
};

if (module?.hot) {
  module.hot.accept(App);
}

App.defaultProps = {
  reqObj: {},
  callbackNgFn: () => {},
};

export default App;

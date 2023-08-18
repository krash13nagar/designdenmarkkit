import React from 'react';
import './recommended.keywords.style.scss';
import { recommendWidget } from './keywords.types';
import { DenGrid } from '../../common';
import DenCard from '../../common/card/card.component';
import DenCardHeader from '../../common/cardheader/cardheader.component';
import DenCardContent from '../../common/cardcontent/cardcontent.component';

export const RecommendWidget = (props: recommendWidget) => {
  const { recommendWidgetObj } = props;

  return (
    <>
      {Object.entries(recommendWidgetObj).map((item, i) => {
        return (
          <DenCard className="Recommended-card" key={i}>
            {item[1].length > 0 && (
              <>
                <DenCardHeader
                  className="Recommended-group"
                  title={`${item[0]}(${item[1].length})`}
                />
                <DenCardContent>
                  {item[1].map((elm, index = 1) => (
                    <DenGrid key={index} container>
                      <DenGrid item xs={1}>
                        {index + 1}
                      </DenGrid>
                      <DenGrid item xs={5} className="textEllipis">
                        {elm.keywordName}{' '}
                      </DenGrid>
                      <DenGrid item xs={3}>
                        {elm.keyEnum}{' '}
                      </DenGrid>
                      <DenGrid item xs={2}>
                        {elm.relevance}{' '}
                      </DenGrid>
                      <DenGrid
                        item
                        xs={1}
                        onClick={elm.addCallbackFn}
                        className="pointerCursor"
                      >
                        {elm.addKeywordIcon}
                      </DenGrid>
                    </DenGrid>
                  ))}
                </DenCardContent>
              </>
            )}
          </DenCard>
        );
      })}
    </>
  );
};

export default RecommendWidget;

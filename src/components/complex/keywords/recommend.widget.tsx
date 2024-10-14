import React from 'react';
import styles from './recommended.keywords.module.scss';
import { recommendWidget } from './keywords.types';
import { DenGrid } from '../../common';
import DenCard from '../../common/card/card.component';
import DenCardHeader from '../../common/cardheader/cardheader.component';
import DenCardContent from '../../common/cardcontent/cardcontent.component';
import { Typography } from '@mui/material';

export const RecommendWidget = (props: recommendWidget) => {
  const { recommendWidgetArr, addCallbckFnc, label, addkeywordIcon } = props;

  return (
    <div className={styles['recommendCardWrapper']}>
          <DenCard className={styles["Recommended-card"]}>
            {recommendWidgetArr.length > 0 && (
              <>
                <DenCardHeader
                  className={styles["Recommended-group"]}
                  title={`${label}(${recommendWidgetArr.length})`}
                />
                <DenCardContent className={styles["Recommended-content"]}>
                  {recommendWidgetArr.map((elm, index = 1) => (
                    <DenGrid key={index} className={styles["cardContentDiv"]} container>
                      <DenGrid item xs={11}>
                       <Typography title={elm.keywordName} component="div" noWrap={true} className={styles.textEllipis}>{elm.keywordName}{' '}</Typography> 
                      </DenGrid>
                      <DenGrid
                        container
                        item
                        xs={1}
                        onClick={()=>{addCallbckFnc(elm)}}
                        className={styles.pointerCursor}
                        justifyContent={"flex-end"}
                        alignContent={"center"}
                      >
                        {addkeywordIcon}
                      </DenGrid>
                    </DenGrid>
                  ))}
                </DenCardContent>
              </>
            )}
          </DenCard>
    </div>
  );
};

export default RecommendWidget;

import React, { useState } from 'react';
import './favouritesection.scss';
import { IconButton, Popover, Tooltip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import { DenBox } from '../../common';
import { FavouriteSectionProps } from './favouritesection.types';

const FavouriteSection: React.FC<FavouriteSectionProps> = (props) => {
  const {favourite = [], containerRef, favAnchorEl=null,handleFavouriteSection=()=>{},renderFavouriteOptions=()=>null,handleFavClose=()=>{}} = props;

  const toggleClassIcon =  favAnchorEl? 'active' : 'default';

  return (
    <>
      <div className="article3-fav-wrapper">
        <Tooltip title="Favourite Section" placement="bottom" arrow>
          <IconButton
            onClick={handleFavouriteSection}
            className={'fav-icon ' + toggleClassIcon}
          >
            <FavoriteIcon width={'15px'} height={'15px'} />
          </IconButton>
        </Tooltip>

        <Popover
          open={Boolean(favAnchorEl)}
          anchorEl={favAnchorEl?.current}
          onClose={handleFavClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          sx={{
            '.a3-MuiPaper-root': {
              width: containerRef?.current?.clientWidth || '300px',
              maxHeight: '500px',
              minHeight:'100px',
              overflowY: 'auto',
              display:"flex",
              justifyContent:'center',
              alignItems:'center'
            },
          }}
          classes={{ paper: `article-favourite-section-popover ${ props.openedFrom === "lhs" && "favourite-section-popover-lhs"}` }}
        >
          <ul className="fav-content-area">
            {favourite && favourite.length > 0 ? (
              favourite.map((fav, index) => (
                renderFavouriteOptions(fav, index)
              ))
            ) : (
              <DenBox sx={{ whiteSpace: 'nowrap' , color:"#919191",textAlign:"center"}}>
                No favourite sections added
              </DenBox>
            )}
          </ul>
        </Popover>
      </div>
    </>
  );
};

export default FavouriteSection;

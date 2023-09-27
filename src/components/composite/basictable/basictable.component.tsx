import React, { useState } from 'react';
import { BasicTableProps } from './basictable.types';
import styles from './basictable.module.scss';
import {
  DenTable,
  DenTableBody,
  DenTableCell,
  DenTableContainer,
  DenTableHead,
  DenTableRow,
  DenPaper,
  DenIconButton,
} from '../../common';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { Create } from '../../../assets';
import clsx from 'clsx';

/**
 * Basic Table Component.
 * ref is forwarded to parent element
 */
type EditBtnProps = {
  onClick: Function;
};
const EditBtn = ({ onClick }: EditBtnProps) => {
  return (
    <DenIconButton
      className={'edit-btn'}
      onClick={(e: React.MouseEvent) => {
        onClick();
      }}
      disableRipple
    >
      <Create
        width={'12'}
        height={'12'}
        htmlColor="#4D4D4D"
        hoverHtmlColor="#0E89FF"
      />
    </DenIconButton>
  );
};

const StyledTableCell = styled(DenTableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: '#4D4D4D',
    padding: 8,
    border: 0,
    font: 'normal normal bold 14px/17px "Source Sans 3"',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: 0,
    padding: 8,
    font: 'normal normal normal 12px/15px "Source Sans 3"',
    color: '#2B2B2B',
  },
}));

const StyledTableRow = styled(DenTableRow)(({ theme }) => ({
  '&:hover': {
    boxShadow: '0px 3px 6px #00000029',
    zIndex: 1,
    position: 'relative',
  },
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&.active': {
    backgroundColor: '#CEE2FF',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  [`& .edit-btn`]: {
    visibility: 'hidden',
  },
  [`&:hover .edit-btn`]: {
    visibility: 'visible',
  },
  [`&.active:hover .edit-btn`]: {
    visibility: 'hidden',
  },
}));

export const BasicTable = React.forwardRef<HTMLDivElement, BasicTableProps>(
  (
    {
      headings = [],
      rows = [],
      showEditColumn = false,
      classes = {},
      stickyHeader = false,
      handleEditClick = () => {},
    },
    ref
  ) => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleClick = (index: number) => {
      setActiveIndex(index);
      if (handleEditClick) {
        handleEditClick(index);
      }
    };
    return (
      <DenTableContainer
        classes={{
          root: clsx(styles.tableContainerRoot, classes.containerRoot),
        }}
        component={DenPaper}
        ref={ref}
      >
        <DenTable
          aria-label="customized table"
          classes={{ root: clsx(classes.tableRoot) }}
          stickyHeader={stickyHeader}
        >
          {headings.length > 0 && (
            <DenTableHead classes={{ root: clsx(classes.tableHeadRoot) }}>
              <DenTableRow classes={{ head: clsx(classes.headRowRoot) }}>
                {headings.map((heading) => (
                  <StyledTableCell
                    classes={{ head: clsx(classes.headCellRoot) }}
                  >
                    {heading}
                  </StyledTableCell>
                ))}
                {showEditColumn && <StyledTableCell></StyledTableCell>}
              </DenTableRow>
            </DenTableHead>
          )}

          <DenTableBody classes={{ root: clsx(classes.tableBodyRoot) }}>
            {rows.map(({ rowData, id }, i) => (
              <StyledTableRow
                classes={{ root: clsx(classes.rowRoot) }}
                key={id || i}
                className={i == activeIndex ? 'active' : ''}
              >
                {rowData.map((cell) => (
                  <StyledTableCell>{cell}</StyledTableCell>
                ))}
                {showEditColumn && (
                  <StyledTableCell
                    classes={{ body: clsx(classes.bodyCellRoot) }}
                  >
                    <EditBtn
                      onClick={() => {
                        handleClick(i);
                      }}
                    />
                  </StyledTableCell>
                )}
              </StyledTableRow>
            ))}
          </DenTableBody>
        </DenTable>
      </DenTableContainer>
    );
  }
);

export default BasicTable;

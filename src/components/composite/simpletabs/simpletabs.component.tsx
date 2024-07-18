import React from 'react';
import { DenTab, DenTabs, DenTooltip } from '../../common';
import styles from './simpletabs.module.scss';
import clsx from 'clsx';
import { SimpleTabsProps, TabType } from './simpletabs.types';

const getLabel = (tab: TabType) => {
  if (tab.tooltip)
    return (
      <DenTooltip key={tab.name} title={tab.tooltip}>
        <span>
          {tab.label}
          {!tab.disabled && tab.count >= 0 && (
            <span className={clsx(styles.count)} title={tab.countLabel}>
              {tab.count}
            </span>
          )}
        </span>
      </DenTooltip>
    );
  return (
    <span key={tab.name}>
      {tab.label}
      {!tab.disabled && tab.count >= 0 && (
        <span className={styles.count} title={tab.countLabel}>
          {tab.count}
        </span>
      )}
    </span>
  );
};

const SimpleTabs = (props: SimpleTabsProps) => {
  const {
    value,
    handleChange,
    tabsList,
    tabsProps = {},
    tabProps = {},
    className = '',
    tabCount = {},
    tabCountLabels = [],
    showTabCount = false,
    showZeroCount = false,
  } = props;

  const tabPropsClassesObj = {
    root: styles.tabRoot,
    ...(tabProps.classes || {}),
  };

  const tabsPropsClassesObj = {
    root: styles.tabsRoot,
    ...(tabsProps.classes || {}),
  };

  return tabsList?.length > 0 ? (
    <div className={`${styles.tabsWrapper} ${className ? className : ''}`}>
      <DenTabs
        value={value}
        onChange={handleChange}
        {...tabsProps}
        classes={{
          ...tabsPropsClassesObj,
        }}
      >
        {tabsList.map((tab) => {
          if (showTabCount && tabCount) {
            if (showZeroCount) {
              tab.count = tabCount[tab.name];
            } else {
              tab.count = tabCount[tab.name] || undefined;
            }
            tab.countLabel = tabCountLabels?.[tab.name] || '';
          }
          return (
            <DenTab
              style={{ pointerEvents: 'auto' }}
              label={getLabel(tab)}
              key={tab.name}
              value={tab.name}
              disabled={tab.disabled}
              {...tabProps}
              classes={{
                ...tabPropsClassesObj,
                selected: styles.tabSelected,
              }}
            />
          );
        })}
      </DenTabs>
    </div>
  ) : null;
};

export default SimpleTabs;

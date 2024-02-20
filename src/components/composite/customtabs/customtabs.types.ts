export interface CustomTabsProps {
  defaultTab?: string;
  indicatorColor?: 'primary' | 'secondary';
  centered?: boolean;
  children?: any;
  visibleScrollbar?: boolean;
  orientation?: 'horizontal' | 'vertical';
  textColor?: 'primary' | 'secondary' | 'inherit';
  variant?: 'scrollable' | 'standard' | 'fullWidth';
  scrollButtons?: boolean | 'auto';
  selectionFollowsFocus?: boolean;
  disableTab?: string;
  tabTitleList?: string[];
  selectedTab?: string,
  handleTabChange?: (tabValue: string) => void,
  tabsProps?: any,
  tabProps?: any,
  tabPanelProps?: any
}

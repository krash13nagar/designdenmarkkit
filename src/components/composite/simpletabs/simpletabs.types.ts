import { TabsProps } from '@mui/material';
import { TabProps } from "@mui/material/Tab"


export interface TabType {
  name: string,
  label: string,
  tooltip?: string,
  disabled?: boolean,
  count?: number,
  countLabel?: string
}

export interface SimpleTabsProps {
  value?: string | number,
  handleChange?: TabsProps['onChange'],
  tabsList: TabType[],
  tabCount?: { [key: string]: number },
  tabsProps?: TabsProps,
  tabProps?: TabProps,
  className?: string,
  tabCountLabels?: any,
  showTabCount?: boolean,
  showZeroCount?: boolean,
  classes?: {}
}

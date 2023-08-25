import React, {useRef} from "react";
import DenTab from "../../common/tab/tab.component";
import DenTabContext from "../../common/tabcontext/tabcontext.component";
import DenTabPanel from "../../common/tabpanel/tabpanel.component";
import DenTabs from "../../common/tabs/tabs.component";
import { CustomTabsProps } from "./customtabs.types";

export const DenCustomTabs = (props: CustomTabsProps) => {
    const parentRef = useRef<HTMLDivElement>(null);
    const {
        defaultTab = "tab1",
        indicatorColor = "primary",
        centered = false,
        visibleScrollbar = false,
        orientation = "horizontal",
        textColor="primary",
        variant="scrollable",
        scrollButtons = "auto",
        selectionFollowsFocus = false,
        disableTab=''
    } = props;
    const [val, setVal] = React.useState(defaultTab);
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setVal(newValue);
    };

    let tabList = React.Children.map(props.children, (child: any, index: number) => {
        const {
            disabled=false,
            disableFocusRipple=false,
            disableRipple=false,
            icon="",
            iconPosition="top",
            wrapped=false,
            name='tab'+Number(index+1),
        } = child.props;
        let tabValue = 'tab'+Number(index+1);
        let isTabDisabled = tabValue == disableTab ? true : disabled;
        return <DenTab label={name} id={`tab-${index}`} value={tabValue} disabled={isTabDisabled} disableFocusRipple={disableFocusRipple} disableRipple={disableRipple} icon={icon} iconPosition={iconPosition} wrapped={wrapped}></DenTab>
    });

    let tabPanel = React.Children.map(props.children, (child: any, index: number) => {
        let tabPanelId = 'tab'+Number(index+1);
        return <DenTabPanel value={tabPanelId} id={`tab-panel-${index}`}>{child}</DenTabPanel>
    });

    return (
        <div ref={parentRef}>
            <DenTabContext value={val}>
                <DenTabs indicatorColor={indicatorColor}
                aria-label="tabs custom component"
                centered = {centered}
                visibleScrollbar = {visibleScrollbar}
                orientation = {orientation}
                textColor={textColor}
                variant={variant}
                scrollButtons ={scrollButtons}
                selectionFollowsFocus = {selectionFollowsFocus}
                value={val}
                onChange={handleChange}>
                {
                    tabList
                }
                </DenTabs>
                {
                    tabPanel
                }   
            </DenTabContext>
        </div>
    )
}

export default DenCustomTabs ;
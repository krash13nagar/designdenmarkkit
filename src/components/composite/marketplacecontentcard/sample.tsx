import { ButtonProps } from "@mui/material"
import React from "react"
import { DenTypography } from "../../common"

export const CARD_MENU_OPTIONS = [
    {
        label: "Preview",
        onClickFnc: function (e: React.SyntheticEvent<HTMLElement>) { console.log("selected preview") }
    },
    {
        label: "Rewrite",
        onClickFnc: function (e: React.SyntheticEvent<HTMLElement>) { console.log("selected rewrite") }
    },
]

export const AGENCY_USAGE_QUOTA = {
    imagelimit: "Image usage limit",
    imageConsumed: "Image consumed from ",
    imagepercent: " is more than 100 percent i.e ",
    title: "Agency Usage Quota",
    duration: 10000,
    alertPercent: 100,
    warningPercent: 80,
    agencyAlertClass: "agency-alert-class",
    agencyWarningClass: "agency-warning-class",
    agencyInfoClass: "agency-info-class"
}

export const marketplaceContentCardSample = {
    title: "Students Demand University Cuts Ties With Arms Firms Over Gaza War,Students Demand University Cuts Ties With Arms Firms Over Gaza War,Students Demand University Cuts Ties With Arms Firms Over Gaza War",
    subtitle: "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing,Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing,Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing",
    entityType: "IMAGES",
    imageUrl: "https://qc10denmark.timesinternet.in/apis/image/gettyExternalImage?securitykey=2992654ae785c210778b384d5cb39ef5&id=1990331476",
    classes: { "root": "cardWrapperClass" },
    ingestionDate: "6th Feb 2024 03:53 PM",
    publishDateTimestamp: "Tue Feb 08 18:31:23 IST 2022",
    cardMenuOptions: CARD_MENU_OPTIONS,
    imagesCount: 18,
    dataSource: {
        name: "Hindustan Times",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g id="Group_165990" data-name="Group 165990" transform="translate(2)">
                <rect id="Rectangle_142395" data-name="Rectangle 142395" width="16" height="16" transform="translate(-2)" fill="none" />
                <path id="image_24dp_5F6368_FILL0_wght300_GRAD0_opsz24_1_" data-name="image_24dp_5F6368_FILL0_wght300_GRAD0_opsz24 (1)" d="M141.225-808.479a1.183,1.183,0,0,1-.869-.356A1.183,1.183,0,0,1,140-809.7v-9.07a1.182,1.182,0,0,1,.356-.869,1.182,1.182,0,0,1,.869-.356h9.07a1.182,1.182,0,0,1,.869.356,1.182,1.182,0,0,1,.356.869v9.07a1.183,1.183,0,0,1-.356.869,1.183,1.183,0,0,1-.869.356Zm0-1.017h9.07a.2.2,0,0,0,.143-.065.2.2,0,0,0,.065-.143v-9.07a.2.2,0,0,0-.065-.143.2.2,0,0,0-.143-.065h-9.07a.2.2,0,0,0-.143.065.2.2,0,0,0-.065.143v9.07a.2.2,0,0,0,.065.143A.2.2,0,0,0,141.225-809.5Zm.977-1.525h7.168l-2.228-2.971-1.9,2.476-1.355-1.733Zm-1.186,1.525v0Z" transform="translate(-140 822)" fill="#818181" />
            </g>
        </svg>
        ),
        onClick: () => { console.log("data source clicked!") }

    },
    tags: [
        {
            id: 1,
            label: "Sports",
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                <g id="Group_166238" data-name="Group 166238" transform="translate(-206 -344)">
                    <rect id="Rectangle_142422" data-name="Rectangle 142422" width="12" height="12" transform="translate(206 344)" fill="none" />
                    <path id="directions_run_24dp_818181_FILL0_wght300_GRAD0_opsz24" d="M135.318-885.85v-2.213l-.949-.908-.394,1.741-2.434-.494.115-.565,1.82.376.658-3.349-.9.364v1.257h-.569v-1.629l1.505-.637a4.34,4.34,0,0,1,.424-.159.918.918,0,0,1,.251-.039.6.6,0,0,1,.322.091.729.729,0,0,1,.242.244l.379.607a2.067,2.067,0,0,0,.665.658,1.893,1.893,0,0,0,.951.289v.569a2.588,2.588,0,0,1-1.118-.3,2.6,2.6,0,0,1-.92-.808l-.282,1.426.8.773v2.706Zm.095-6.6a.675.675,0,0,1-.5-.2.675.675,0,0,1-.2-.5.675.675,0,0,1,.2-.5.675.675,0,0,1,.5-.2.675.675,0,0,1,.5.2.675.675,0,0,1,.2.5.675.675,0,0,1-.2.5A.675.675,0,0,1,135.412-892.45Z" transform="translate(77.529 1239.85)" fill="#4d4d4d" />
                </g>
            </svg>)
        },
        {
            id: 2,
            label: "India",
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                <g id="Group_166238" data-name="Group 166238" transform="translate(-206 -344)">
                    <rect id="Rectangle_142422" data-name="Rectangle 142422" width="12" height="12" transform="translate(206 344)" fill="none" />
                    <path id="directions_run_24dp_818181_FILL0_wght300_GRAD0_opsz24" d="M135.318-885.85v-2.213l-.949-.908-.394,1.741-2.434-.494.115-.565,1.82.376.658-3.349-.9.364v1.257h-.569v-1.629l1.505-.637a4.34,4.34,0,0,1,.424-.159.918.918,0,0,1,.251-.039.6.6,0,0,1,.322.091.729.729,0,0,1,.242.244l.379.607a2.067,2.067,0,0,0,.665.658,1.893,1.893,0,0,0,.951.289v.569a2.588,2.588,0,0,1-1.118-.3,2.6,2.6,0,0,1-.92-.808l-.282,1.426.8.773v2.706Zm.095-6.6a.675.675,0,0,1-.5-.2.675.675,0,0,1-.2-.5.675.675,0,0,1,.2-.5.675.675,0,0,1,.5-.2.675.675,0,0,1,.5.2.675.675,0,0,1,.2.5.675.675,0,0,1-.2.5A.675.675,0,0,1,135.412-892.45Z" transform="translate(77.529 1239.85)" fill="#4d4d4d" />
                </g>
            </svg>)
        }
    ],
    selected: false,
    checkboxProps: {
        isChecked: false,
        onCheckboxClick: (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => { console.log("checkbox clicked!", e, checked) },
        tooltipText: "This is conditional tooltip text"
    },
    headerTooltipContent: (
        <React.Fragment>
            <DenTypography variant="body2" color="textPrimary">
                <span style={{ font: 'normal normal 400 13px/18px "Source Sans 3"', color: '#818181' }}>Published at:</span> <span style={{ font: 'normal normal 400 13px/18px "Source Sans 3"', color: '#4D4D4D' }}>12:29, 7 Jun 2025</span>
            </DenTypography>
            <DenTypography variant="body2" color="textPrimary">
                <span style={{ font: 'normal normal 400 13px/18px "Source Sans 3"', color: '#818181' }}>Ingested at :</span> <span style={{ font: 'normal normal 400 13px/18px "Source Sans 3"', color: '#4D4D4D' }}>11:40, 7 Jun 2025</span>
            </DenTypography>
        </React.Fragment>
    ),
    view: 'grid',
    ImageFallback: (
        <svg id="Group_165158" data-name="Group 165158" xmlns="http://www.w3.org/2000/svg" width={"40"} height={"40"} viewBox="0 0 40 40">
            <rect id="Rectangle_1622" data-name="Rectangle 1622" width="40" height="40" fill="none" />
            <path id="Path_38794" data-name="Path 38794" d="M23.246,9.39a2.841,2.841,0,0,0-2.771,2.771,2.771,2.771,0,1,0,5.542,0A2.841,2.841,0,0,0,23.246,9.39ZM33.407,2H7.542A5.443,5.443,0,0,0,2,7.542V33.407a5.443,5.443,0,0,0,5.542,5.542H33.407a5.443,5.443,0,0,0,5.542-5.542V7.542A5.443,5.443,0,0,0,33.407,2Zm1.847,21.985-3.51-3.51a5.7,5.7,0,0,0-7.759,0l-1.663,1.663L16.964,16.78a5.7,5.7,0,0,0-7.759,0l-3.51,3.51V7.542A1.745,1.745,0,0,1,7.542,5.695H33.407a1.745,1.745,0,0,1,1.847,1.847Z" transform="translate(-0.901 -0.99)" fill="#e5e9ed" />
        </svg>
    ),
    showAllCheckboxes: false,
    onCardClick: () => { console.log("card clicked!") }
}

export const marketplaceContentCardSample2 = {
    title: "Students Demand University Cuts Ties With Arms Firms Over Gaza War,Students Demand University Cuts Ties With Arms Firms Over Gaza War,Students Demand University Cuts Ties With Arms Firms Over Gaza War",
    subtitle: "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing,Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing,Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing",
    entityType: "IMAGES",
    imageUrl: "https://qc10denmark.timesinternet.in/apis/image/gettyExternalImage?securitykey=2992654ae785c210778b384d5cb39ef5&id=1990331476",
    classes: { "root": "cardWrapperClass" },
    ingestionDate: "6th Feb 2024 03:53 PM",
    publishDateTimestamp: "Tue Feb 08 18:31:23 IST 2022",
    cardMenuOptions: CARD_MENU_OPTIONS,
    imagesCount: 18,
    videosCount: 18,
    wordCount: 18,
    dataSource: {
        name: "Hindustan Times",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g id="Group_165990" data-name="Group 165990" transform="translate(2)">
                <rect id="Rectangle_142395" data-name="Rectangle 142395" width="16" height="16" transform="translate(-2)" fill="none" />
                <path id="image_24dp_5F6368_FILL0_wght300_GRAD0_opsz24_1_" data-name="image_24dp_5F6368_FILL0_wght300_GRAD0_opsz24 (1)" d="M141.225-808.479a1.183,1.183,0,0,1-.869-.356A1.183,1.183,0,0,1,140-809.7v-9.07a1.182,1.182,0,0,1,.356-.869,1.182,1.182,0,0,1,.869-.356h9.07a1.182,1.182,0,0,1,.869.356,1.182,1.182,0,0,1,.356.869v9.07a1.183,1.183,0,0,1-.356.869,1.183,1.183,0,0,1-.869.356Zm0-1.017h9.07a.2.2,0,0,0,.143-.065.2.2,0,0,0,.065-.143v-9.07a.2.2,0,0,0-.065-.143.2.2,0,0,0-.143-.065h-9.07a.2.2,0,0,0-.143.065.2.2,0,0,0-.065.143v9.07a.2.2,0,0,0,.065.143A.2.2,0,0,0,141.225-809.5Zm.977-1.525h7.168l-2.228-2.971-1.9,2.476-1.355-1.733Zm-1.186,1.525v0Z" transform="translate(-140 822)" fill="#818181" />
            </g>
        </svg>
        )

    },
    tags: [
        {
            id: 1,
            label: "Sports",
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                <g id="Group_166238" data-name="Group 166238" transform="translate(-206 -344)">
                    <rect id="Rectangle_142422" data-name="Rectangle 142422" width="12" height="12" transform="translate(206 344)" fill="none" />
                    <path id="directions_run_24dp_818181_FILL0_wght300_GRAD0_opsz24" d="M135.318-885.85v-2.213l-.949-.908-.394,1.741-2.434-.494.115-.565,1.82.376.658-3.349-.9.364v1.257h-.569v-1.629l1.505-.637a4.34,4.34,0,0,1,.424-.159.918.918,0,0,1,.251-.039.6.6,0,0,1,.322.091.729.729,0,0,1,.242.244l.379.607a2.067,2.067,0,0,0,.665.658,1.893,1.893,0,0,0,.951.289v.569a2.588,2.588,0,0,1-1.118-.3,2.6,2.6,0,0,1-.92-.808l-.282,1.426.8.773v2.706Zm.095-6.6a.675.675,0,0,1-.5-.2.675.675,0,0,1-.2-.5.675.675,0,0,1,.2-.5.675.675,0,0,1,.5-.2.675.675,0,0,1,.5.2.675.675,0,0,1,.2.5.675.675,0,0,1-.2.5A.675.675,0,0,1,135.412-892.45Z" transform="translate(77.529 1239.85)" fill="#4d4d4d" />
                </g>
            </svg>)
        },
        {
            id: 2,
            label: "India",
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                <g id="Group_166238" data-name="Group 166238" transform="translate(-206 -344)">
                    <rect id="Rectangle_142422" data-name="Rectangle 142422" width="12" height="12" transform="translate(206 344)" fill="none" />
                    <path id="directions_run_24dp_818181_FILL0_wght300_GRAD0_opsz24" d="M135.318-885.85v-2.213l-.949-.908-.394,1.741-2.434-.494.115-.565,1.82.376.658-3.349-.9.364v1.257h-.569v-1.629l1.505-.637a4.34,4.34,0,0,1,.424-.159.918.918,0,0,1,.251-.039.6.6,0,0,1,.322.091.729.729,0,0,1,.242.244l.379.607a2.067,2.067,0,0,0,.665.658,1.893,1.893,0,0,0,.951.289v.569a2.588,2.588,0,0,1-1.118-.3,2.6,2.6,0,0,1-.92-.808l-.282,1.426.8.773v2.706Zm.095-6.6a.675.675,0,0,1-.5-.2.675.675,0,0,1-.2-.5.675.675,0,0,1,.2-.5.675.675,0,0,1,.5-.2.675.675,0,0,1,.5.2.675.675,0,0,1,.2.5.675.675,0,0,1-.2.5A.675.675,0,0,1,135.412-892.45Z" transform="translate(77.529 1239.85)" fill="#4d4d4d" />
                </g>
            </svg>)
        }
    ],
    selected: false,
    checkboxProps: {
        isChecked: false,
        onCheckboxClick: (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => { console.log("checkbox clicked!", e, checked) },
        tooltipText: "This is conditional tooltip text"
    },
    headerTooltipContent: (
        <React.Fragment>
            <DenTypography variant="body2" color="textPrimary">
                <span style={{ font: 'normal normal 400 13px/18px "Source Sans 3"', color: '#818181' }}>Published at:</span> <span style={{ font: 'normal normal 400 13px/18px "Source Sans 3"', color: '#4D4D4D' }}>12:29, 7 Jun 2025</span>
            </DenTypography>
            <DenTypography variant="body2" color="textPrimary">
                <span style={{ font: 'normal normal 400 13px/18px "Source Sans 3"', color: '#818181' }}>Ingested at :</span> <span style={{ font: 'normal normal 400 13px/18px "Source Sans 3"', color: '#4D4D4D' }}>11:40, 7 Jun 2025</span>
            </DenTypography>
        </React.Fragment>
    ),
    view: 'single',
    ImageFallback: (
        <svg id="Group_165158" data-name="Group 165158" xmlns="http://www.w3.org/2000/svg" width={"40"} height={"40"} viewBox="0 0 40 40">
            <rect id="Rectangle_1622" data-name="Rectangle 1622" width="40" height="40" fill="none" />
            <path id="Path_38794" data-name="Path 38794" d="M23.246,9.39a2.841,2.841,0,0,0-2.771,2.771,2.771,2.771,0,1,0,5.542,0A2.841,2.841,0,0,0,23.246,9.39ZM33.407,2H7.542A5.443,5.443,0,0,0,2,7.542V33.407a5.443,5.443,0,0,0,5.542,5.542H33.407a5.443,5.443,0,0,0,5.542-5.542V7.542A5.443,5.443,0,0,0,33.407,2Zm1.847,21.985-3.51-3.51a5.7,5.7,0,0,0-7.759,0l-1.663,1.663L16.964,16.78a5.7,5.7,0,0,0-7.759,0l-3.51,3.51V7.542A1.745,1.745,0,0,1,7.542,5.695H33.407a1.745,1.745,0,0,1,1.847,1.847Z" transform="translate(-0.901 -0.99)" fill="#e5e9ed" />
        </svg>
    ),
    showAllCheckboxes: true
} 
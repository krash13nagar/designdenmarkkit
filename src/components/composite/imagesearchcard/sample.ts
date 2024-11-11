export const IMAGE_CARD_MENU_OPTIONS = [
    { label: "Preview", icon: "", onClickFnc: function (e: React.SyntheticEvent<HTMLElement>) { { console.log("selected preview") } } },
    { label: "Download", icon: "", onClickFnc: function (e: React.SyntheticEvent<HTMLElement>) { { console.log("selected download") } } },
    { label: "Set as Thumbnail", icon: "", onClickFnc: function (e: React.SyntheticEvent<HTMLElement>) { { console.log("selected Set as Thumbnail") } } }
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

export const imageSearchCardSample = {
    type: "3-0",
    name: "Students Demand University Cuts Ties With Arms Firms Over Gaza War",
    agencyName: "Getty Images",
    entityType: "IMAGES",
    imageUrl: "https://qc10denmark.timesinternet.in/apis/image/gettyExternalImage?securitykey=2992654ae785c210778b384d5cb39ef5&id=1990331476",
    dataSource: "GETTYFEED",
    fromNow: "10min ago",
    imageSource: "DAM",
    classes: { "root": "cardWrapperClass" },
    resolution: "5369 x 3580",
    ingestionDate: "6th Feb 2024 03:53 PM",
    imageCardMenuOptions: IMAGE_CARD_MENU_OPTIONS,
    onCallbackSelectImagefnc: function (e: React.SyntheticEvent<HTMLElement>) { { console.log("selected image card") } }
}
import { ButtonProps } from "@mui/material"
import React from "react"

export const CARD_MENU_OPTIONS = [
    {
        label: "Preview", icon: <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16">
            <path data-name="Path 3621" d="M0 0h15.997v15.997H0Z" fill="none" />
            <path data-name="Shape 5" d="M14.398 7.925a0.136 0.136 0 0 0 0 -0.016 0.045 0.045 0 0 0 0 -0.008 0.107 0.107 0 0 0 0 -0.012v-0.013a0.501 0.501 0 0 0 -0.133 -0.274 9.852 9.852 0 0 0 -1.387 -1.356 8.781 8.781 0 0 0 -3.627 -1.91 5.772 5.772 0 0 0 -1.243 -0.133 6.004 6.004 0 0 0 -1.094 0.107 7.187 7.187 0 0 0 -2.034 0.747 11.075 11.075 0 0 0 -2.715 2.083 6.875 6.875 0 0 0 -0.427 0.472 0.522 0.522 0 0 0 0 0.699 9.884 9.884 0 0 0 1.387 1.356 8.781 8.781 0 0 0 3.627 1.91 5.76 5.76 0 0 0 1.244 0.133 5.98 5.98 0 0 0 1.094 -0.107 7.216 7.216 0 0 0 2.035 -0.747A11.099 11.099 0 0 0 13.84 8.773a6.489 6.489 0 0 0 0.427 -0.472 0.504 0.504 0 0 0 0.133 -0.274v-0.035a0.152 0.152 0 0 1 0 -0.016v-0.026l-0.002 -0.027ZM6.85 6.52a0.662 0.662 0 1 1 -0.667 0.662 0.662 0.662 0 0 1 0.667 -0.662Zm6.12 1.432a9.848 9.848 0 0 1 -2.416 1.859 6.027 6.027 0 0 1 -1.69 0.626 4.782 4.782 0 0 1 -0.872 0.082 4.573 4.573 0 0 1 -0.981 -0.107 7.59 7.59 0 0 1 -3.116 -1.662 10.42 10.42 0 0 1 -0.867 -0.792v-0.005a9.821 9.821 0 0 1 2.416 -1.859c0.148 -0.078 0.292 -0.149 0.435 -0.213a2.47 2.47 0 0 0 -0.412 1.367 2.534 2.534 0 0 0 5.067 0 2.47 2.47 0 0 0 -0.412 -1.365 9.052 9.052 0 0 1 1.981 1.28 10.38 10.38 0 0 1 0.867 0.792Z" fill="#2b2b2b" />
        </svg>, onClickFnc: function (e: React.SyntheticEvent<HTMLElement>) { console.log("selected preview") }
    },
    {
        label: "Download", icon: <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16">
            <path data-name="Path 3621" d="M0 0h15.997v15.997H0Z" fill="none" />
            <path data-name="Shape 5" d="M14.398 7.925a0.136 0.136 0 0 0 0 -0.016 0.045 0.045 0 0 0 0 -0.008 0.107 0.107 0 0 0 0 -0.012v-0.013a0.501 0.501 0 0 0 -0.133 -0.274 9.852 9.852 0 0 0 -1.387 -1.356 8.781 8.781 0 0 0 -3.627 -1.91 5.772 5.772 0 0 0 -1.243 -0.133 6.004 6.004 0 0 0 -1.094 0.107 7.187 7.187 0 0 0 -2.034 0.747 11.075 11.075 0 0 0 -2.715 2.083 6.875 6.875 0 0 0 -0.427 0.472 0.522 0.522 0 0 0 0 0.699 9.884 9.884 0 0 0 1.387 1.356 8.781 8.781 0 0 0 3.627 1.91 5.76 5.76 0 0 0 1.244 0.133 5.98 5.98 0 0 0 1.094 -0.107 7.216 7.216 0 0 0 2.035 -0.747A11.099 11.099 0 0 0 13.84 8.773a6.489 6.489 0 0 0 0.427 -0.472 0.504 0.504 0 0 0 0.133 -0.274v-0.035a0.152 0.152 0 0 1 0 -0.016v-0.026l-0.002 -0.027ZM6.85 6.52a0.662 0.662 0 1 1 -0.667 0.662 0.662 0.662 0 0 1 0.667 -0.662Zm6.12 1.432a9.848 9.848 0 0 1 -2.416 1.859 6.027 6.027 0 0 1 -1.69 0.626 4.782 4.782 0 0 1 -0.872 0.082 4.573 4.573 0 0 1 -0.981 -0.107 7.59 7.59 0 0 1 -3.116 -1.662 10.42 10.42 0 0 1 -0.867 -0.792v-0.005a9.821 9.821 0 0 1 2.416 -1.859c0.148 -0.078 0.292 -0.149 0.435 -0.213a2.47 2.47 0 0 0 -0.412 1.367 2.534 2.534 0 0 0 5.067 0 2.47 2.47 0 0 0 -0.412 -1.365 9.052 9.052 0 0 1 1.981 1.28 10.38 10.38 0 0 1 0.867 0.792Z" fill="#2b2b2b" />
        </svg>, onClickFnc: function (e: React.SyntheticEvent<HTMLElement>) { console.log("selected download") }
    },
    {
        label: "Set as Thumbnail", icon: <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16">
            <path data-name="Path 3621" d="M0 0h15.997v15.997H0Z" fill="none" />
            <path data-name="Shape 5" d="M14.398 7.925a0.136 0.136 0 0 0 0 -0.016 0.045 0.045 0 0 0 0 -0.008 0.107 0.107 0 0 0 0 -0.012v-0.013a0.501 0.501 0 0 0 -0.133 -0.274 9.852 9.852 0 0 0 -1.387 -1.356 8.781 8.781 0 0 0 -3.627 -1.91 5.772 5.772 0 0 0 -1.243 -0.133 6.004 6.004 0 0 0 -1.094 0.107 7.187 7.187 0 0 0 -2.034 0.747 11.075 11.075 0 0 0 -2.715 2.083 6.875 6.875 0 0 0 -0.427 0.472 0.522 0.522 0 0 0 0 0.699 9.884 9.884 0 0 0 1.387 1.356 8.781 8.781 0 0 0 3.627 1.91 5.76 5.76 0 0 0 1.244 0.133 5.98 5.98 0 0 0 1.094 -0.107 7.216 7.216 0 0 0 2.035 -0.747A11.099 11.099 0 0 0 13.84 8.773a6.489 6.489 0 0 0 0.427 -0.472 0.504 0.504 0 0 0 0.133 -0.274v-0.035a0.152 0.152 0 0 1 0 -0.016v-0.026l-0.002 -0.027ZM6.85 6.52a0.662 0.662 0 1 1 -0.667 0.662 0.662 0.662 0 0 1 0.667 -0.662Zm6.12 1.432a9.848 9.848 0 0 1 -2.416 1.859 6.027 6.027 0 0 1 -1.69 0.626 4.782 4.782 0 0 1 -0.872 0.082 4.573 4.573 0 0 1 -0.981 -0.107 7.59 7.59 0 0 1 -3.116 -1.662 10.42 10.42 0 0 1 -0.867 -0.792v-0.005a9.821 9.821 0 0 1 2.416 -1.859c0.148 -0.078 0.292 -0.149 0.435 -0.213a2.47 2.47 0 0 0 -0.412 1.367 2.534 2.534 0 0 0 5.067 0 2.47 2.47 0 0 0 -0.412 -1.365 9.052 9.052 0 0 1 1.981 1.28 10.38 10.38 0 0 1 0.867 0.792Z" fill="#2b2b2b" />
        </svg>, onClickFnc: function (e: React.SyntheticEvent<HTMLElement>) { console.log("selected Set as Thumbnail") },
        children: [{
            label: "Preview", icon: "", onClickFnc: function (e: React.SyntheticEvent<HTMLElement>) { console.log("selected preview 2 ") },

            children: [{
                label: "Download", icon: <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16">
                    <path data-name="Path 3621" d="M0 0h15.997v15.997H0Z" fill="none" />
                    <path data-name="Shape 5" d="M14.398 7.925a0.136 0.136 0 0 0 0 -0.016 0.045 0.045 0 0 0 0 -0.008 0.107 0.107 0 0 0 0 -0.012v-0.013a0.501 0.501 0 0 0 -0.133 -0.274 9.852 9.852 0 0 0 -1.387 -1.356 8.781 8.781 0 0 0 -3.627 -1.91 5.772 5.772 0 0 0 -1.243 -0.133 6.004 6.004 0 0 0 -1.094 0.107 7.187 7.187 0 0 0 -2.034 0.747 11.075 11.075 0 0 0 -2.715 2.083 6.875 6.875 0 0 0 -0.427 0.472 0.522 0.522 0 0 0 0 0.699 9.884 9.884 0 0 0 1.387 1.356 8.781 8.781 0 0 0 3.627 1.91 5.76 5.76 0 0 0 1.244 0.133 5.98 5.98 0 0 0 1.094 -0.107 7.216 7.216 0 0 0 2.035 -0.747A11.099 11.099 0 0 0 13.84 8.773a6.489 6.489 0 0 0 0.427 -0.472 0.504 0.504 0 0 0 0.133 -0.274v-0.035a0.152 0.152 0 0 1 0 -0.016v-0.026l-0.002 -0.027ZM6.85 6.52a0.662 0.662 0 1 1 -0.667 0.662 0.662 0.662 0 0 1 0.667 -0.662Zm6.12 1.432a9.848 9.848 0 0 1 -2.416 1.859 6.027 6.027 0 0 1 -1.69 0.626 4.782 4.782 0 0 1 -0.872 0.082 4.573 4.573 0 0 1 -0.981 -0.107 7.59 7.59 0 0 1 -3.116 -1.662 10.42 10.42 0 0 1 -0.867 -0.792v-0.005a9.821 9.821 0 0 1 2.416 -1.859c0.148 -0.078 0.292 -0.149 0.435 -0.213a2.47 2.47 0 0 0 -0.412 1.367 2.534 2.534 0 0 0 5.067 0 2.47 2.47 0 0 0 -0.412 -1.365 9.052 9.052 0 0 1 1.981 1.28 10.38 10.38 0 0 1 0.867 0.792Z" fill="#2b2b2b" />
                </svg>, onClickFnc: function (e: React.SyntheticEvent<HTMLElement>) { console.log("selected download 3 ") }
            },
            { label: "Set as Thumbnail", icon: "", onClickFnc: function (e: React.SyntheticEvent<HTMLElement>) { console.log("selected Set as Thumbnail 3") } }]
        },
        { label: "Download", icon: "", onClickFnc: function (e: React.SyntheticEvent<HTMLElement>) { console.log("selected download 2 ") } },
        { label: "Set as Thumbnail", icon: "", onClickFnc: function (e: React.SyntheticEvent<HTMLElement>) { console.log("selected Set as Thumbnail 2") } }]
    }
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

export const documentsearchcardSample = {
    title: "Students Demand University Cuts Ties With Arms Firms Over Gaza War",
    agencyName: "Getty Images",
    entityType: "IMAGES",
    imageUrl: "https://qc10denmark.timesinternet.in/apis/image/gettyExternalImage?securitykey=2992654ae785c210778b384d5cb39ef5&id=1990331476",
    fromNow: "10min ago",
    classes: { "root": "cardWrapperClass" },
    ingestionDate: "6th Feb 2024 03:53 PM",
    cardMenuOptions: CARD_MENU_OPTIONS,
    onCardClick: () => { console.log("card clicked!") },
    actionButtonsList: [{
        label: 'Add To Related',
        variant: "outlined" as ButtonProps['variant'],
        onClick: () => { console.log("Add to related clicked!") }
    },
    {
        label: 'Embed In Body',
        variant: 'contained' as ButtonProps['variant'],
        onClick: () => { console.log("Embed in body clicked!") }
    }
    ],
    status: 'ACTIVE',
    type: 'PPT'
}

export const documentsearchcardSample2 = {
    title: "Students Demand University Cuts Ties With Arms Firms Over Gaza War",
    subtitle: "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing",
    agencyName: "Getty Images",
    entityType: "IMAGES",
    imageUrl: "https://qc10denmark.timesinternet.in/apis/image/gettyExternalImage?securitykey=2992654ae785c210778b384d5cb39ef5&id=1990331476",
    classes: { "root": "cardWrapperClass" },
    ingestionDateTimestamp: 1731926561848,
    cardMenuOptions: CARD_MENU_OPTIONS,
    actionButtonsList: [{
        label: 'Add To Related',
        variant: "outlined" as ButtonProps['variant'],
        onClick: () => { console.log("Add to related clicked!") }
    },
    {
        label: 'Embed In Body',
        variant: 'contained' as ButtonProps['variant'],
        onClick: () => { console.log("Embed in body clicked!") }
    }
    ],
    handleOpenInNew: () => { console.log("open in new clicked!") },
    selected: true
}


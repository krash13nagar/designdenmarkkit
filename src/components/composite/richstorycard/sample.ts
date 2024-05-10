export const CARD_MENU_OPTIONS = [
    {label:"Preview", onClickFnc:function(e:React.SyntheticEvent<HTMLElement>){{console.log("selected preview")}}},
    {label:"Rewrite", onClickFnc:function(e:React.SyntheticEvent<HTMLElement>){{console.log("selected rewrite")}}},
    {label:"Translate", onClickFnc:function(e:React.SyntheticEvent<HTMLElement>){{console.log("selected translate")}}}
]

export const richStoryCardSample = {
    slidesCount:10,
    imagesCount:7,
    videosCount:8,
    contentType: "webstory",
    hostName: "The Times of India",
    updatedDateTimeEpoch: 1715257612,
    publishDateTimeEpoch: 1715257591,
    imageUrl: "https://qc10denmark.timesinternet.in/apis/image/gettyExternalImage?securitykey=2992654ae785c210778b384d5cb39ef5&id=1990331476",
    classes:{"root":"cardWrapperClass"},
    imgTitle: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    id: "789866578",
    handleCTA: function(e:React.SyntheticEvent<HTMLElement>){{console.log("clicked preview icon")}},
    cardMenuOptions: CARD_MENU_OPTIONS,
    handleClick : ()=>console.log("clicked!")
}
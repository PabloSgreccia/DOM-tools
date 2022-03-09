const d = document;
const w = window;

export default function responsiveContent(tagId, mediaQuery, mobileContent, desktopContent){
    let breakPoint = w.matchMedia(mediaQuery);

    const responsive = (e) => {
        (e.matches)
            ? d.getElementById(tagId).innerHTML = desktopContent
            : d.getElementById(tagId).innerHTML = mobileContent
    }

    breakPoint.addListener(responsive);
    responsive(breakPoint);
}
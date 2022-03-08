const d = document;
const n = navigator;
const ua = n.userAgent;

export default function userDeviceInfo(selectorTag){
    const $selector = d.querySelector(selectorTag);

    const isMobile = {
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipod/i),
        windows: () => ua.match(/windows phone/i),
        any: function() {
            return this.android() || this.ios() || this.windows();
        },
    }
    const isDesktop = {
        linux: () => ua.match(/linux/i),
        mac: () => ua.match(/mac os/i),
        windows: () => ua.match(/windows nt/i),
        any: function() {
            return this.linux() || this.mac() || this.windows();
        },
    }
    const isBrowser = {
        chrome: () => ua.match(/chrome/i),
        safari: () => ua.match(/safari/i),
        firefox: () => ua.match(/firefox/i),
        opera: () => ua.match(/opera|opera mini/i),
        ie: () => ua.match(/msie|iemobile/i),
        edge: () => ua.match(/edg/i),
        brave: () => ua.match(/brave/i),
        any: function() {
            return this.chrome() || this.safari() || this.firefox() || this.ie() || this.edge() || this.brave();
        },
    }


    $selector.innerHTML = `
    <ul>
        <li><b>User Agent: </b>${ua}</li>
        <li><b>OS: </b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</li>
        <li><b>Navigator: </b>${isBrowser.any()}</li>
    </ul>
    `;

    if(isBrowser.edge()) $selector.innerHTML += `<p><mark>This content is only visible in Microsoft Edge</mark></p>`;
    else if(isBrowser.firefox()) $selector.innerHTML += `<p><mark>This content is only visible in Firefox</mark></p>`;
    else if(isBrowser.chrome()) $selector.innerHTML += `<p><mark>This content is only visible in Google Chrome</mark></p>`;
    isMobile.any()
        ? $selector.innerHTML += `<br><p><mark>This content is only visible in a mobile device</mark></p>`
        : $selector.innerHTML += `<br><p><mark>This content is only visible in desktop mode</mark></p>`
}
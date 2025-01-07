function redirect(requestDetails) {
    console.log(`Redirecting to new MyPortal`);
    return {
        redirectURL: "https://portal.aws.fhda.edu/uPortal/f/home/normal/render.uP",
    };
}

browser.webRequest.onBeforeRequest.addListener(redirect, 
    {urls: ["*://myportal.fhda.edu/*", "*://experience.elluciancloud.com/fdaccdso/*"]},
    ["blocking"],
);
  
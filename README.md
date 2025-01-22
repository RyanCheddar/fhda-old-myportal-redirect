# Reject Modernity
why new myportal if old myportal do trick
![<img src="/assets/no.jpg" width="250"/>](new myportal more like what portal)

# Background
de anza college and foothill college have a new portal, it's kinda bad so i made an addon to redirect back to the old portal

# What does this do
redirects you from new fhda myportal to old fhda myportal

also injects css to the old fhda myportal so you don't see the nag message telling you to switch

# Installation
Chrome/Most Browsers: [Chrome Web Store](https://chromewebstore.google.com/detail/reject-modernity-fhda-myp/dncldecedaaiofbaepaocnadgfmmacnl)

Firefox: [Download](https://github.com/RyanCheddar/fhda-old-myportal-redirect/releases/download/yay/firefox.xpi)

Safari (iOS): [Testflight Link](https://testflight.apple.com/join/rQJw3qjX)  
Safari (macOS) .app available in Releases

# Supported Browsers
i built this on manifest v3 it should work on most up-to-date modern browsers

# Questions and Answers
Q: Do you steal data?  
A: it's one json file and one css file how would i steal your data

Q: Will this extension auto-update in the event that FHDA changes something and breaks this extension?  
A:
- Chrome: Yes (via Chrome Web Store)
- Firefox: Yes (since v1.2)
- Safari (iOS): Yes (through TestFlight, possible delays)
- Safari (macOS): No (You have to update the app yourself)
- Chromium Browsers: Depends

Q: What are the different files?  
A:
- Safari folder -> XCode project for building the extension for iOS/iPadOS/macOS Safari
- icons folder -> Pictures of an old man for the extension icon
- README.md -> you're reading it now
- firefox_update.json -> Enables Firefox auto-update
- manifest.json -> File defining all of the extension's functionalities and features
- bye.css -> Injected to the old MyPortal to remove the nag banner
- rule.json -> URL filters to send you from new portal to old portal

Only the last three matter, aren't web extensions fun?

Q: How can I build the iOS/iPadOS/macOS extension myself?  
A: Download entire project directory, open .xcodeproj in the Safari folder with XCode, glhf

Q: Can I make feature requests/pull requests?  
A: Yes but anything too extra will be rejected, this is just a redirect extension

Q: What devices can I use this extension on?  
A: Anything that runs the latest browsers/OSes will work. The extension uses Manifest v3, which is an API introduced very recently. 

Q: Why did you use Manifest v3?
A: so I don't need to write javascript

also because v3 is more privacy-centered

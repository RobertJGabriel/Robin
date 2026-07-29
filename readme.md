# Robin

![Robin](/assets/img/banner/readme.jpg "Robin")

> A lightweight, filtering web browser for low-end machines.

Robin is a web browser built for low-end machines and for parents and teachers who
want to block sites and search terms. It won **two All-Ireland Eircom Spider
awards** and has been downloaded over **40,000 times**. The goal was a free,
lightweight browser with filtering built in rather than bolted on.

> **Archived and not working.** Firebase 3.0 broke the sync layer and the rewrite
> was never finished. Kept for reference.

## Browser

The child can open the app and browse the internet which includes going back and forward in their internet history, refreshing, stopping the page from loading, going home to your homepage and having multiple tabs for easy tasks.

​The child can change the browser theme to their favorite color. Their information is saved. The web browser will sync every 1 min or on load for new settings for blocked websites from the firebase database. The system will sync the information of the current URL into the firebase.

When a child tries to access a blocked website or URL they will be redirected to the homepage and the color/ theme of the website will be changed to black and cannot be changed back until the admin(parent) resets it from the google chrome extension.
It will block other browsers from opening if the setting is checked in the chrome extension.

## Chrome (Admin Panel)
See the repo [here](https://github.com/Projectbird/Robin)

## Admin panel

The parent-facing controls live in the Chrome extension — see
[robin-chrome-extension](https://github.com/RobertJGabriel/robin-chrome-extension).

## Requirements

- [Node.js](https://nodejs.org/)
- [NW.js](https://github.com/nwjs/nw.js)
- [nw-builder](https://github.com/mllrsohn/node-webkit-builder)

## Setup

```sh
git clone https://github.com/Projectbird/Robin.git
cd Robin
npm install
gulp
```

## License

No licence file. All rights reserved unless stated otherwise.

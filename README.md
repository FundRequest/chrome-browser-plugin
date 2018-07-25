# Brower Extension [FundRequest](https://fundrequest.io) <img align="right" src="https://github.com/FundRequest.png?size=30" />
Browser Extension for FundRequest

* Chrome store: https://chrome.google.com/webstore/search/fundrequest
* Homepage: https://fundrequest.io
* Telegram: https://t.me/fundrequestofficial

## Features

* Supported browsers:
  * Chrome
* Overview pages:
  * Show estimated balance (in $) per issue
* Issues page:
  * Show total number of funders
  * Show status (Funded, Claimable, Claimed)
  * Show estimated balance in $
  * Show total funding per token
  * Action button to Fund issue
  * Action button to Claim funds

## Contributing

Anyone is welcome to [contribute](.github/CONTRIBUTING.md),
however, if you decide to get involved, please take a moment to review
the [guidelines](.github/CONTRIBUTING.md):

* [Bug reports](.github/CONTRIBUTING.md#bugs)
* [Feature requests](.github/CONTRIBUTING.md#features)
* [Pull requests](.github/CONTRIBUTING.md#pull-requests)

## Development

### Prerequisites

* [node + npm](https://nodejs.org/) (node >= 9.x, npm >= 5.x)

### Includes the following

* TypeScript
* Webpack
* jQuery
* VueJs

### Project Structure

* src: TypeScript source files
* dist: Chrome Extension directory
* dist/js: Generated JavaScript files

### Setup

```
npm install
```

### Build (for production)

```
npm run build
```

### Build in watch mode (for development)

```
npm run watch
```



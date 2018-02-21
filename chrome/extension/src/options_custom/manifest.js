// SAMPLE
this.manifest = {
    "name": "FundRequest",
    "icon": "icon.png",
    "settings": [
        {
            "tab": i18n.get("information"),
            "group": i18n.get("userDetails"),
            "name": "fndAccountAddress",
            "type": "text",
            "label": i18n.get("accountAddress"),
            "text": i18n.get("accountAddress-characters")
        },
        {
            "tab": i18n.get("information"),
            "group": i18n.get("userDetails"),
            "name": "fndAccountAddressDescription",
            "type": "description",
            "text": i18n.get("accountAddressDescription")
        },
        {
            "tab": i18n.get("developer"),
            "group": i18n.get("settings"),
            "name": "fndFundUrlPrefix",
            "type": "text",
            "label": "FundRequest fund url prefix",
            "text": "https://alpha.fundrequest.io/#/requests/fund?url="
        },
        {
            "tab": i18n.get("developer"),
            "group": i18n.get("settings"),
            "name": "fndTokenContractAddress",
            "type": "text",
            "label": "Ethereum address token contract",
            "text": "0x23b98d4ff90a169d88bfab8b8829f0b0c0e3bce0"
        },
        {
            "tab": i18n.get("developer"),
            "group": i18n.get("settings"),
            "name": "fndFundRequestContractAddress",
            "type": "text",
            "label": "Ethereum address FundRequest contract",
            "text": "0xc1b66749fe5e2a15034b882da9e690490d5a1336"
        },
        {
            "tab": i18n.get("developer"),
            "group": i18n.get("settings"),
            "name": "fndProviderApi",
            "type": "text",
            "label": "Url of the provider",
            "text": "https://ropsten.fundrequest.io"
        },
    ],
    "alignment": [
        [
            "fndFundUrlPrefix",
            "fndTokenContractAddress",
            "fndFundRequestContractAddress",
            "fndProviderApi"
        ]
    ]
};

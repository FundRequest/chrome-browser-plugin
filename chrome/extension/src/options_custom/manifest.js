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
            "text": "0x5a481b10a0138e0db94126e9b6ca2188a18cb21c"
        },
        {
            "tab": i18n.get("developer"),
            "group": i18n.get("settings"),
            "name": "fndFundRequestContractAddress",
            "type": "text",
            "label": "Ethereum address FundRequest contract",
            "text": "0x0a0d468e58a8ddb2817635fe4bef039046de8a14"
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

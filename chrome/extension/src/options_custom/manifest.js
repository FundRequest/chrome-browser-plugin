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
            "text": "0xfd1de38dc456112c55c3e6bc6134b2f545b91386"
        },
        {
            "tab": i18n.get("developer"),
            "group": i18n.get("settings"),
            "name": "fndFundRequestContractAddress",
            "type": "text",
            "label": "Ethereum address RundRequest contract",
            "text": "0x797b33d3bb0c74a7860cd2ca80bf063809dced80"
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

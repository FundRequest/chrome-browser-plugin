import * as $ from 'jquery';
import BigNumber from 'bignumber.js';
import uuid from 'uuid/v4';

export default class Utils {

    public static biggestNumber(): BigNumber {
        return new BigNumber('1.157920892e77').minus(1);
    }

    public static showLoading() {
        let loader = document.querySelector('[data-page-loader]');
        loader ? loader.classList.remove('d-none') : null;
    }


    private static _handleHttpErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    public static getJSON(url: string): Promise<any> {
        return new Promise((resolve, reject) => {
            $.getJSON(url).done(res => resolve(res)).fail(reject);
        });
    }

    public static postJSON(url: string, body: any): Promise<any> {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'POST',
                url: url,
                data: JSON.stringify(body),
                contentType: 'application/json',
                dataType: 'json'
            }).done(res => resolve(res)).fail(reject);
        });
    }

    public static post(url: string, body: any = null): Promise<any> {
        return new Promise((resolve, reject) => {
            if (body == null) {
                return $.post(url).done(res => resolve(res)).fail(reject);
            } else {
                return $.post(url, body).done(res => resolve(res)).fail(reject);
            }
        });
    }

    public static weiToString(amountInWei: any): string {
        let number = (+amountInWei / 1000000000000000000);
        return Utils.formatToCrypto(number);
    }

    public static weiToNumber(amountInWei: any): number {
        return (+amountInWei / 1000000000000000000);
    }

    public static generateUUID(): string {
        return uuid();
    }

    public static validators = {
        currency: (value) => {
            return /^(?!0+\.00)(?=.+(\.|$))(?!0(?!\.))\d{1,3}(,\d{3})*(\.\d+)?$/
                .exec(value.trim()) != null;
        },
        number: (value) => {
            return /^[0-9]+(\.[0-9]{1,2})?$/.exec(value.trim()) != null;
        },
        ethAddress: (value) => {
            // basic validation
            return /^0x[a-fA-F0-9]{40}$/i.exec(value.trim()) != null;
        }
    };

    public static formatToUsd(value: string | number, decimals: number = 2) {
        let number: number = 0;
        if (typeof value == 'string') {
            if (this.validators.currency(value)) {
                number = Number(value.replace(',', ''));
            }
        } else {
            number = value;
        }

        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        }).format(number);
    }

    public static formatToCrypto(value: string | number, decimals: number = 2) {
        return Utils.formatToUsd(value, decimals); // for now we use the same formatting
    }
}

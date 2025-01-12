/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Capitalization
 */
export interface Capitalization {
    /**
     * 
     * @type {string}
     * @memberof Capitalization
     */
    smallCamel?: string;
    /**
     * 
     * @type {string}
     * @memberof Capitalization
     */
    capitalCamel?: string;
    /**
     * 
     * @type {string}
     * @memberof Capitalization
     */
    smallSnake?: string;
    /**
     * 
     * @type {string}
     * @memberof Capitalization
     */
    capitalSnake?: string;
    /**
     * 
     * @type {string}
     * @memberof Capitalization
     */
    sCAETHFlowPoints?: string;
    /**
     * Name of the pet

     * @type {string}
     * @memberof Capitalization
     */
    aTTNAME?: string;
}

export function CapitalizationFromJSON(json: any): Capitalization {
    return CapitalizationFromJSONTyped(json, false);
}

export function CapitalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Capitalization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'smallCamel': !exists(json, 'smallCamel') ? undefined : json['smallCamel'],
        'capitalCamel': !exists(json, 'CapitalCamel') ? undefined : json['CapitalCamel'],
        'smallSnake': !exists(json, 'small_Snake') ? undefined : json['small_Snake'],
        'capitalSnake': !exists(json, 'Capital_Snake') ? undefined : json['Capital_Snake'],
        'sCAETHFlowPoints': !exists(json, 'SCA_ETH_Flow_Points') ? undefined : json['SCA_ETH_Flow_Points'],
        'aTTNAME': !exists(json, 'ATT_NAME') ? undefined : json['ATT_NAME'],
    };
}

export function CapitalizationToJSON(value?: Capitalization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'smallCamel': value.smallCamel,
        'CapitalCamel': value.capitalCamel,
        'small_Snake': value.smallSnake,
        'Capital_Snake': value.capitalSnake,
        'SCA_ETH_Flow_Points': value.sCAETHFlowPoints,
        'ATT_NAME': value.aTTNAME,
    };
}



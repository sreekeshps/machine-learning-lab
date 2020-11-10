/**
 * ML Lab Service
 * Functionality to create and manage Lab projects, services, datasets, models, and experiments.
 *
 * OpenAPI spec version: 0.2.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The LabJob model module.
* @module model/LabJob
* @version 0.2.0-SNAPSHOT
*/
export default class LabJob {
    /**
    * Constructs a new <code>LabJob</code>.
    * @alias module:model/LabJob
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>LabJob</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LabJob} obj Optional instance to populate.
    * @return {module:model/LabJob} The populated <code>LabJob</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LabJob();
                        
            
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('dockerId')) {
                obj['dockerId'] = ApiClient.convertToType(data['dockerId'], 'String');
            }
            if (data.hasOwnProperty('dockerName')) {
                obj['dockerName'] = ApiClient.convertToType(data['dockerName'], 'String');
            }
            if (data.hasOwnProperty('dockerImage')) {
                obj['dockerImage'] = ApiClient.convertToType(data['dockerImage'], 'String');
            }
            if (data.hasOwnProperty('adminLink')) {
                obj['adminLink'] = ApiClient.convertToType(data['adminLink'], 'String');
            }
            if (data.hasOwnProperty('startedAt')) {
                obj['startedAt'] = ApiClient.convertToType(data['startedAt'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('featureType')) {
                obj['featureType'] = ApiClient.convertToType(data['featureType'], 'String');
            }
            if (data.hasOwnProperty('configuration')) {
                obj['configuration'] = ApiClient.convertToType(data['configuration'], {'String': 'String'});
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], {'String': 'String'});
            }
            if (data.hasOwnProperty('finishedAt')) {
                obj['finishedAt'] = ApiClient.convertToType(data['finishedAt'], 'Number');
            }
            if (data.hasOwnProperty('exitCode')) {
                obj['exitCode'] = ApiClient.convertToType(data['exitCode'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {String} name
    */
    'name' = undefined;
    /**
    * @member {String} dockerId
    */
    'dockerId' = undefined;
    /**
    * @member {String} dockerName
    */
    'dockerName' = undefined;
    /**
    * @member {String} dockerImage
    */
    'dockerImage' = undefined;
    /**
    * @member {String} adminLink
    */
    'adminLink' = undefined;
    /**
    * @member {Number} startedAt
    */
    'startedAt' = undefined;
    /**
    * @member {String} status
    */
    'status' = undefined;
    /**
    * @member {String} featureType
    */
    'featureType' = undefined;
    /**
    * @member {Object.<String, String>} configuration
    */
    'configuration' = undefined;
    /**
    * @member {Object.<String, String>} labels
    */
    'labels' = undefined;
    /**
    * @member {Number} finishedAt
    */
    'finishedAt' = undefined;
    /**
    * @member {Number} exitCode
    */
    'exitCode' = undefined;




}

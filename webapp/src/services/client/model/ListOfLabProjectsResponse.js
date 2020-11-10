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
import LabProject from './LabProject';
import UnifiedErrorMessage from './UnifiedErrorMessage';
import ValueListFormatMetadata from './ValueListFormatMetadata';

/**
* The ListOfLabProjectsResponse model module.
* @module model/ListOfLabProjectsResponse
* @version 0.2.0-SNAPSHOT
*/
export default class ListOfLabProjectsResponse {
    /**
    * Constructs a new <code>ListOfLabProjectsResponse</code>.
    * @alias module:model/ListOfLabProjectsResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ListOfLabProjectsResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ListOfLabProjectsResponse} obj Optional instance to populate.
    * @return {module:model/ListOfLabProjectsResponse} The populated <code>ListOfLabProjectsResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListOfLabProjectsResponse();
                        
            
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ValueListFormatMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [LabProject]);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = UnifiedErrorMessage.constructFromObject(data['errors']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/ValueListFormatMetadata} metadata
    */
    'metadata' = undefined;
    /**
    * @member {Array.<module:model/LabProject>} data
    */
    'data' = undefined;
    /**
    * @member {module:model/UnifiedErrorMessage} errors
    */
    'errors' = undefined;




}

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
import UnifiedErrorMessage from './UnifiedErrorMessage';
import UnifiedFormatMetadata from './UnifiedFormatMetadata';

/**
* The StringResponse model module.
* @module model/StringResponse
* @version 0.2.0-SNAPSHOT
*/
export default class StringResponse {
    /**
    * Constructs a new <code>StringResponse</code>.
    * @alias module:model/StringResponse
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>StringResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/StringResponse} obj Optional instance to populate.
    * @return {module:model/StringResponse} The populated <code>StringResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StringResponse();
                        
            
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = UnifiedFormatMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = UnifiedErrorMessage.constructFromObject(data['errors']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/UnifiedFormatMetadata} metadata
    */
    'metadata' = undefined;
    /**
    * @member {String} data
    */
    'data' = undefined;
    /**
    * @member {module:model/UnifiedErrorMessage} errors
    */
    'errors' = undefined;




}

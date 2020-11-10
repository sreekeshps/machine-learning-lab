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

import ApiClient from "../ApiClient";
import LabInfoResponse from '../model/LabInfoResponse';
import LabServiceResponse from '../model/LabServiceResponse';
import LabStatisticsResponse from '../model/LabStatisticsResponse';
import ListOfLabEventsResponse from '../model/ListOfLabEventsResponse';
import ListOfLabUsers from '../model/ListOfLabUsers';
import ListOfStringsResponse from '../model/ListOfStringsResponse';
import StatusMessageFormat from '../model/StatusMessageFormat';

/**
* Administration service.
* @module api/AdministrationApi
* @version 0.2.0-SNAPSHOT
*/
export default class AdministrationApi {

    /**
    * Constructs a new AdministrationApi. 
    * @alias module:api/AdministrationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the checkWorkspace operation.
     * @callback module:api/AdministrationApi~checkWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusMessageFormat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Checks whether a workspace container for the passed id already exists. If not, a new one is created &amp; started.
     * @param {Object} opts Optional parameters
     * @param {module:api/AdministrationApi~checkWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StatusMessageFormat}
     */
    checkWorkspace(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'id': opts['id']
      };
      let headerParams = {
        'authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = StatusMessageFormat;

      return this.apiClient.callApi(
        '/api/admin/workspace/check', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getEvents operation.
     * @callback module:api/AdministrationApi~getEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListOfLabEventsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns events filtered by a specified event type (admin-only).
     * @param {Object} opts Optional parameters
     * @param {module:api/AdministrationApi~getEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListOfLabEventsResponse}
     */
    getEvents(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'event': opts['event']
      };
      let headerParams = {
        'authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListOfLabEventsResponse;

      return this.apiClient.callApi(
        '/api/admin/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getLabInfo operation.
     * @callback module:api/AdministrationApi~getLabInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LabInfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns information about this Lab instance.
     * @param {Object} opts Optional parameters
     * @param {module:api/AdministrationApi~getLabInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LabInfoResponse}
     */
    getLabInfo(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LabInfoResponse;

      return this.apiClient.callApi(
        '/api/admin/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getStatistics operation.
     * @callback module:api/AdministrationApi~getStatisticsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LabStatisticsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns statistics about this Lab instance (admin-only).
     * @param {Object} opts Optional parameters
     * @param {module:api/AdministrationApi~getStatisticsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LabStatisticsResponse}
     */
    getStatistics(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LabStatisticsResponse;

      return this.apiClient.callApi(
        '/api/admin/statistics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the resetAllWorkspaces operation.
     * @callback module:api/AdministrationApi~resetAllWorkspacesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusMessageFormat} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resets all workspaces. Use with caution (admin-only).
     * @param {Object} opts Optional parameters
     * @param {module:api/AdministrationApi~resetAllWorkspacesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StatusMessageFormat}
     */
    resetAllWorkspaces(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = StatusMessageFormat;

      return this.apiClient.callApi(
        '/api/admin/workspace/reset-all', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the resetWorkspace operation.
     * @callback module:api/AdministrationApi~resetWorkspaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LabServiceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resets a workspace. Removes the container (keeps all persisted data) and starts a new one.
     * @param {Object} opts Optional parameters
     * @param {module:api/AdministrationApi~resetWorkspaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LabServiceResponse}
     */
    resetWorkspace(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'id': opts['id']
      };
      let headerParams = {
        'authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LabServiceResponse;

      return this.apiClient.callApi(
        '/api/admin/workspace/reset', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the shutdownDiskExceedingContainers operation.
     * @callback module:api/AdministrationApi~shutdownDiskExceedingContainersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListOfStringsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove all workspaces that exceed the disk storage limit (docker-local mode only).
     * @param {Object} opts Optional parameters
     * @param {module:api/AdministrationApi~shutdownDiskExceedingContainersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListOfStringsResponse}
     */
    shutdownDiskExceedingContainers(dryrun, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'dryrun': dryrun
      };
      let headerParams = {
        'authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = ListOfStringsResponse;

      return this.apiClient.callApi(
        '/api/admin/workspace/shutdown-disk-exceeding', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the shutdownUnusedWorkspaces operation.
     * @callback module:api/AdministrationApi~shutdownUnusedWorkspacesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListOfLabUsers} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Shutdown all unused workspaces - 15 days without activity (admin-only).
     * @param {Object} opts Optional parameters
     * @param {module:api/AdministrationApi~shutdownUnusedWorkspacesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListOfLabUsers}
     */
    shutdownUnusedWorkspaces(dryrun, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
        'dryrun': dryrun,
        'threshold': opts['threshold']
      };
      let headerParams = {
        'authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['*/*'];
      let accepts = ['application/json'];
      let returnType = ListOfLabUsers;

      return this.apiClient.callApi(
        '/api/admin/workspace/shutdown-unused', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}

/**
 * ProcessMaker API
 * This ProcessMaker I/O API provides access to a BPMN 2.0 compliant workflow engine api that is designed to be used as a microservice to support enterprise cloud applications.  The current Alpha 1.0 version supports most of the descriptive class of the BPMN 2.0 specification.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@processmaker.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ProcessMakerApi) {
      root.ProcessMakerApi = {};
    }
    root.ProcessMakerApi.MetaLog = factory(root.ProcessMakerApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MetaLog model module.
   * @module model/MetaLog
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MetaLog</code>.
   * @alias module:model/MetaLog
   * @class
   * @param importLog {String} 
   */
  var exports = function(importLog) {
    var _this = this;

    _this['import_log'] = importLog;
  };

  /**
   * Constructs a <code>MetaLog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetaLog} obj Optional instance to populate.
   * @return {module:model/MetaLog} The populated <code>MetaLog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('import_log')) {
        obj['import_log'] = ApiClient.convertToType(data['import_log'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} import_log
   */
  exports.prototype['import_log'] = undefined;



  return exports;
}));



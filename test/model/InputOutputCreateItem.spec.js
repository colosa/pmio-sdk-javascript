/**
 * ProcessMaker API
 * This ProcessMaker Core API provide access to the new generation engine with BPMN 2.0 support. The current Alpha 1.0 version supports  the part of BPM system functionality like process import, process execution, task assignment
 *
 * OpenAPI spec version: 1.0.0
 * Contact: alpha-program@processmaker.com
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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ProcessMakerApi);
  }
}(this, function(expect, ProcessMakerApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ProcessMakerApi.InputOutputCreateItem();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InputOutputCreateItem', function() {
    it('should create an instance of InputOutputCreateItem', function() {
      // uncomment below and update the code to test InputOutputCreateItem
      //var instane = new ProcessMakerApi.InputOutputCreateItem();
      //expect(instance).to.be.a(ProcessMakerApi.InputOutputCreateItem);
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instane = new ProcessMakerApi.InputOutputCreateItem();
      //expect(instance).to.be();
    });

  });

}));

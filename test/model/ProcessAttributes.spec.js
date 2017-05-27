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
    instance = new ProcessMakerApi.ProcessAttributes();
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

  describe('ProcessAttributes', function() {
    it('should create an instance of ProcessAttributes', function() {
      // uncomment below and update the code to test ProcessAttributes
      //var instane = new ProcessMakerApi.ProcessAttributes();
      //expect(instance).to.be.a(ProcessMakerApi.ProcessAttributes);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ProcessMakerApi.ProcessAttributes();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ProcessMakerApi.ProcessAttributes();
      //expect(instance).to.be();
    });

    it('should have the property parentProcessId (base name: "parent_process_id")', function() {
      // uncomment below and update the code to test the property parentProcessId
      //var instane = new ProcessMakerApi.ProcessAttributes();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ProcessMakerApi.ProcessAttributes();
      //expect(instance).to.be();
    });

    it('should have the property durationBy (base name: "duration_by")', function() {
      // uncomment below and update the code to test the property durationBy
      //var instane = new ProcessMakerApi.ProcessAttributes();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new ProcessMakerApi.ProcessAttributes();
      //expect(instance).to.be();
    });

    it('should have the property assignment (base name: "assignment")', function() {
      // uncomment below and update the code to test the property assignment
      //var instane = new ProcessMakerApi.ProcessAttributes();
      //expect(instance).to.be();
    });

    it('should have the property designAccess (base name: "design_access")', function() {
      // uncomment below and update the code to test the property designAccess
      //var instane = new ProcessMakerApi.ProcessAttributes();
      //expect(instance).to.be();
    });

    it('should have the property showMap (base name: "show_map")', function() {
      // uncomment below and update the code to test the property showMap
      //var instane = new ProcessMakerApi.ProcessAttributes();
      //expect(instance).to.be();
    });

    it('should have the property showMessage (base name: "show_message")', function() {
      // uncomment below and update the code to test the property showMessage
      //var instane = new ProcessMakerApi.ProcessAttributes();
      //expect(instance).to.be();
    });

    it('should have the property showDelegate (base name: "show_delegate")', function() {
      // uncomment below and update the code to test the property showDelegate
      //var instane = new ProcessMakerApi.ProcessAttributes();
      //expect(instance).to.be();
    });

    it('should have the property showDynaform (base name: "show_dynaform")', function() {
      // uncomment below and update the code to test the property showDynaform
      //var instane = new ProcessMakerApi.ProcessAttributes();
      //expect(instance).to.be();
    });

    it('should have the property categoryId (base name: "category_id")', function() {
      // uncomment below and update the code to test the property categoryId
      //var instane = new ProcessMakerApi.ProcessAttributes();
      //expect(instance).to.be();
    });

    it('should have the property subCategoryId (base name: "sub_category_id")', function() {
      // uncomment below and update the code to test the property subCategoryId
      //var instane = new ProcessMakerApi.ProcessAttributes();
      //expect(instance).to.be();
    });

    it('should have the property createUserId (base name: "create_user_id")', function() {
      // uncomment below and update the code to test the property createUserId
      //var instane = new ProcessMakerApi.ProcessAttributes();
      //expect(instance).to.be();
    });

    it('should have the property debug (base name: "debug")', function() {
      // uncomment below and update the code to test the property debug
      //var instane = new ProcessMakerApi.ProcessAttributes();
      //expect(instance).to.be();
    });

    it('should have the property dynaformSummaryId (base name: "dynaform_summary_id")', function() {
      // uncomment below and update the code to test the property dynaformSummaryId
      //var instane = new ProcessMakerApi.ProcessAttributes();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new ProcessMakerApi.ProcessAttributes();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new ProcessMakerApi.ProcessAttributes();
      //expect(instance).to.be();
    });

  });

}));
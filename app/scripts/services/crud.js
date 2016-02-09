'use strict';

/**
 * @ngdoc service
 * @name sapWizardReportApp.crud
 * @description
 * # crud
 * Factory in the sapWizardReportApp.
 */
angular.module('sapWizardReportApp')
  .factory('crud', ['$q','$http',function ($q,$http) {

    $.ajaxSetup({
      converters: {
          "text json": function (textValue) {
              return jQuery.parseJSON(textValue.replace(/(^|[^\\])\\'/g, "$1'"));
          }
      }
    });

    var origin = document.location.origin;
    var origin = 'http://ex3healthcare.softlayer.com:8000/'
    var url    = origin + 'sap/bc/ibmishc/abap_reports?sap-client=';

    function get(mandt){

      var deferred  = $q.defer();
      var sURL      = url + mandt;

      var oParameters = {
        "_method"		  : 'GET',
      };

      jQuery.ajax({
          url: sURL,
          async: true,
          dataType: 'json',
          data: oParameters,
          type: 'GET',

          success: function(oData) {
            return deferred.resolve(oData);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown){
            return deferred.reject(textStatus)
          }
      });

      return deferred.promise;
    }

    function getById(mandt, id){

      var deferred  = $q.defer();
      var sURL      = url + mandt;

      var oParameters = {
        "_method"		  : 'GET',
        "option"      : 'byId',
        "reporid"     : id
      };

      jQuery.ajax({
          url: sURL,
          async: true,
          dataType: 'json',
          data: oParameters,
          type: 'GET',

          success: function(oData) {
            return deferred.resolve(oData);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown){
            return deferred.reject(textStatus)
          }
      });

      return deferred.promise;
    }

    function getTablesById(mandt, id){

      var deferred  = $q.defer();
      var sURL      = url + mandt;

      var oParameters = {
        "_method"		  : 'GET',
        "option"      : 'tablesById',
        "reportid"     : id
      };

      jQuery.ajax({
          url: sURL,
          async: true,
          dataType: 'json',
          data: oParameters,
          type: 'GET',

          success: function(oData) {
            return deferred.resolve(oData);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown){
            return deferred.reject(textStatus)
          }
      });

      return deferred.promise;
    }

    function getConditionsById(mandt, id){

      var deferred  = $q.defer();
      var sURL      = url + mandt;

      var oParameters = {
        "_method"		  : 'GET',
        "option"      : 'conditionsById',
        "reportid"     : id
      };

      jQuery.ajax({
          url: sURL,
          async: true,
          dataType: 'json',
          data: oParameters,
          type: 'GET',

          success: function(oData) {
            return deferred.resolve(oData);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown){
            return deferred.reject(textStatus)
          }
      });

      return deferred.promise;
    }

    function getConditionsSelById(mandt, id){

      var deferred  = $q.defer();
      var sURL      = url + mandt;

      var oParameters = {
        "_method"		  : 'GET',
        "option"      : 'conditionsSelById',
        "reportid"     : id
      };

      jQuery.ajax({
          url: sURL,
          async: true,
          dataType: 'json',
          data: oParameters,
          type: 'GET',

          success: function(oData) {
            return deferred.resolve(oData);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown){
            return deferred.reject(textStatus)
          }
      });

      return deferred.promise;
    }

    function getTableFields(mandt,tabname){

      var deferred  = $q.defer();
      var sURL      = url + mandt;

      var oParameters = {
        "_method"		  : 'GET',
        "option"      : 'tabFields',
        "tabname"     : tabname
      };

      jQuery.ajax({
          url: sURL,
          async: true,
          dataType: 'json',
          data: oParameters,
          type: 'GET',

          success: function(oData) {
            return deferred.resolve(oData);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown){
            return deferred.reject(textStatus)
          }
      });

      return deferred.promise;
    }

    function setTable(mandt,key,name){

      var deferred  = $q.defer();
      var sURL      = url + mandt;

      var oParameters = {
        "_method"		  : 'GET',
        "option"      : 'setTable',
        "tabname"     : name,
        "reportid"    : key,
        "_method"		  : 'POST',
      };

      jQuery.ajax({
          url: sURL,
          async: true,
          dataType: 'json',
          headers : { "Accept" : 'application/json' },
          data: oParameters,
          type: 'GET',

          success: function(oData) {
            return deferred.resolve(oData);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown){
            return deferred.reject(textStatus)
          }
      });

      return deferred.promise;
    }

    function setCondition(mandt,key,tab1,tab2,field1,field2){

      var deferred  = $q.defer();
      var sURL      = url + mandt;

      var oParameters = {
        "_method"		  : 'GET',
        "option"      : 'setCondition',
        "table1"      : tab1,
        "table2"      : tab2,
        "field1"      : field1,
        "field2"      : field2,
        "reportid"    : key,
        "_method"		  : 'POST',
      };

      jQuery.ajax({
          url: sURL,
          async: true,
          dataType: 'json',
          headers : { "Accept" : 'application/json' },
          data: oParameters,
          type: 'GET',

          success: function(oData) {
            return deferred.resolve(oData);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown){
            return deferred.reject(textStatus)
          }
      });

      return deferred.promise;
    }

    function setConditionSel(mandt,key,tab1,field1,operator,value,connector){

      var deferred  = $q.defer();
      var sURL      = url + mandt;

      var oParameters = {
        "_method"		  : 'GET',
        "option"      : 'setConditionSel',
        "table"      : tab1,
        "field"      : field1,
        "operator"    : operator,
        "value"       : value,
        "connector"   : connector,
        "reportid"    : key,
        "_method"		  : 'POST',
      };

      jQuery.ajax({
          url: sURL,
          async: true,
          dataType: 'json',
          headers : { "Accept" : 'application/json' },
          data: oParameters,
          type: 'GET',

          success: function(oData) {
            return deferred.resolve(oData);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown){
            return deferred.reject(textStatus)
          }
      });

      return deferred.promise;
    }

    function create(data){

      var deferred  = $q.defer();
      var sURL      = url + '100';

      var oParameters = {
              "tecname" 		: data.tecname,
              "title"		    : data.title,
              "description"	: data.description,
              "option"      : 'report',
  	          "_method"		  : 'POST',
      };

      jQuery.ajax({
          url: sURL,
          async: true,
          dataType: 'json',
          data: oParameters,
          type: 'GET',

          success: function(oData) {
            return deferred.resolve(oData);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown){
            return deferred.reject(textStatus)
          }
      });

      return deferred.promise;
    }

    function destroy(mandt, option, key, tabname, condid){

        var deferred  = $q.defer();
        var sURL      = url + '100';

        var oParameters = {
                "option" 		  : option,
                "reportid"    : key,
                "tabname"     : tabname,
                "condid"      : condid,
    	          "_method"		  : 'DELETE',
        };

        jQuery.ajax({
            url: sURL,
            async: true,
            dataType: 'json',
            data: oParameters,
            type: 'GET',

            success: function(oData) {
              return deferred.resolve(oData);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
              return deferred.reject(textStatus)
            }
        });

        return deferred.promise;


    }

    // Public API here
    return {
      get: get,
      getById: getById,
      getTablesById: getTablesById,
      getConditionsById: getConditionsById,
      getConditionsSelById: getConditionsSelById,
      getTableFields: getTableFields,
      setTable: setTable,
      setCondition: setCondition,
      setConditionSel: setConditionSel,
      create: create,
      destroy: destroy
    };


  }]);

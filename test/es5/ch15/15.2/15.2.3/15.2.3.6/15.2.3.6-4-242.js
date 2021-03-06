/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-242.js
 * @description Object.defineProperty - 'O' is an Array, 'name' is an array index named property,  'name' is data property and 'desc' is accessor descriptor, and the [[Configurable]] attribute value of 'name' is true, test 'name' is converted from data property to accessor property (15.4.5.1 step 4.c)
 */


function testcase() {

        var arrObj = [3];

        function setFunc(value) {
            arrObj.setVerifyHelpProp = value;
        }
        Object.defineProperty(arrObj, "0", {
            set: setFunc
        });

        return accessorPropertyAttributesAreCorrect(arrObj, "0", undefined, setFunc, "setVerifyHelpProp", true, true);
    }
runTestCase(testcase);

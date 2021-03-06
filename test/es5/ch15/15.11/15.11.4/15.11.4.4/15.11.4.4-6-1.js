/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.11/15.11.4/15.11.4.4/15.11.4.4-6-1.js
 * @description Error.prototype.toString - 'Error' is returned when 'name' is absent and empty string is returned when 'msg' is undefined
 */


function testcase() {
        var errObj = new Error();
        return errObj.toString() === "Error";
    }
runTestCase(testcase);

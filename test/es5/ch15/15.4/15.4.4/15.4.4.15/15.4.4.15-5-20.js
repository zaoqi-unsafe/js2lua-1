/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.4/15.4.4/15.4.4.15/15.4.4.15-5-20.js
 * @description Array.prototype.lastIndexOf - value of 'fromIndex' which is a string containing a number with leading zeros
 */


function testcase() {
        var targetObj = {};
        return [0, true, targetObj, 3, false].lastIndexOf(targetObj, "0002.10") === 2 &&
            [0, true, 3, targetObj, false].lastIndexOf(targetObj, "0002.10") === -1;
    }
runTestCase(testcase);

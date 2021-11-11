var util = require('util');

var txt='congratulations %s to achieve %d rank in India!!';

var result= util.format(txt,'Eman',1);

console.log(result);

var deprecatedFunction=util.deprecate(
    function(){console.log('deprecated function called')},
    "Warning this fuction is deprecated",
    'Deprecated API'
);

deprecatedFunction();
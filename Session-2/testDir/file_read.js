var chalk = require( "chalk" );
var path = require( "path" );

console.log( chalk.red.bold( "Using __dirname:" ) );

var fileSystem = require( "fs" );
//absolute path
console.log( path.join( __dirname, "data.txt" ) );
console.log( chalk.dim( fileSystem.readFileSync( path.join( __dirname, "data.txt" ) ) ) );

console.log( "" );

console.log( chalk.red.bold( "Using require.resolve():" ) );
//relative path so need to resolve
console.log( require.resolve( "./data.txt" ) );
console.log( chalk.dim( fileSystem.readFileSync( require.resolve( "./data.txt" ) ) ) );

'use strict';

var matrix = require( 'dstructs-matrix' ),
	variance = require( './../lib' );

var k,
	mat,
	out,
	tmp,
	i;

// ----
// Plain arrays...
k = new Array( 10 );
for ( i = 0; i < k.length; i++ ) {
	k[ i ] = i;
}
out = variance( k );
console.log( 'Arrays: %s\n', out );


// ----
// Object arrays (accessors)...
function getValue( d ) {
	return d.x;
}
for ( i = 0; i < k.length; i++ ) {
	k[ i ] = {
		'x': k[ i ]
	};
}
out = variance( k, {
	'accessor': getValue
});
console.log( 'Accessors: %s\n', out );


// ----
// Deep set arrays...
for ( i = 0; i < k.length; i++ ) {
	k[ i ] = {
		'x': [ i, k[ i ].x ]
	};
}
out = variance( k, {
	'path': 'x/1',
	'sep': '/'
});
console.log( 'Deepset:');
console.dir( out );
console.log( '\n' );


// ----
// Typed arrays...
k = new Float64Array( 10 );
for ( i = 0; i < k.length; i++ ) {
	k[ i ] = i;
}
tmp = variance( k );
out = '';
for ( i = 0; i < k.length; i++ ) {
	out += tmp[ i ];
	if ( i < k.length-1 ) {
		out += ',';
	}
}
console.log( 'Typed arrays: %s\n', out );


// ----
// Matrices...
mat = matrix( k, [5,2], 'float64' );
out = variance( mat );
console.log( 'Matrix: %s\n', out.toString() );


// ----
// Matrices (custom output data type)...
out = variance( mat, {
	'dtype': 'uint8'
});
console.log( 'Matrix (%s): %s\n', out.dtype, out.toString() );

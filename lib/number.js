'use strict';

// MODULES //

var isPositive = require( 'validate.io-positive-primitive' );


// VARIANCE //

/**
* FUNCTION variance( k )
*	Computes the distribution variance for a Chi-squared distribution with parameter k.
*
* @param {Number} k - degrees of freedom
* @returns {Number} distribution variance
*/
function variance( k ) {
	if ( !isPositive( k ) ) {
		return NaN;
	}
	return 2 * k;
} // end FUNCTION variance()


// EXPORTS

module.exports =  variance;

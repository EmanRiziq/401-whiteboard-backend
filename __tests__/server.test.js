'use strict';

const supertest = require( 'supertest' );
const server = require( '../server' );
const request = supertest( server.app );

describe( 'Server Running', () => {
    it( ' invalid route', async () => {
        const res = await request.get( '/test' );
        expect( res.status ).toEqual( 404 );
    } );
    it( 'Home page works', async () => {
        const res = await request.get( '/' );
        expect( res.status ).toEqual( 200 );
        expect( res.text ).toEqual( '{\"message\":\"Home page\",\"code\":200}' );
    } );
} );

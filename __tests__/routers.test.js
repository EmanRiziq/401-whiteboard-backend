'use strict';

const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);
jest.setTimeout(10000);

describe('Test Post get routes', () => {
    it('Get all posts', async () => {
        const res = await request.get('/post');
        expect(res.status).toEqual(200);
    });
    it('Get one post', async () => {
        const res = await request.get('/post/1');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('{"id":1,"title":"first post","content":"first post for testing","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ig2oiZskQ831gT0f-xLQfG2UJR3_2RBL2g&usqp=CAU","createdAt":"2022-09-12T18:11:05.029Z","updatedAt":"2022-09-12T18:11:05.029Z"}');

        // "{\"id\":1,\"title\":\"first post\",\"content\":\"first post for testing\",\"img\":\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ig2oiZskQ831gT0f-xLQfG2UJR3_2RBL2g&usqp=CAU\",\"createdAt\":\"2022-09-12T18:11:05.029Z\",\"updatedAt\":\"2022-09-12T18:11:05.029Z\"}"

    });
});

describe('Test Post post route', () => {
    it('Create a post', async () => {
        const res = await request.post('/post').send({
            title: 'this is a test',
            content: 'this is a test'
        })
        expect(res.status).toEqual(201);
    });
});

// describe('Test Post put route', () => {
//     it('Update a post', async () => {
//         const res = await request.put('/post/1').send({
//             title: 'new title',
//             content: 'new content'
//         });
//         expect(res.status).toEqual(200);
//     });
// });


describe('Test Post delete route', () => {
    it('Delete a post', async () => {
        const res = await request.delete('/post/2');
        expect(res.status).toEqual(204);
        expect(res.text).toEqual('');
    });
});
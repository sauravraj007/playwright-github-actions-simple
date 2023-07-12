import { expect, test } from "@playwright/test";
import HttpStatus from "../constants/httpStatusCodes";

test.use({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

test('should be able to get all posts', async ({request}) => {
    const response = await request.get('posts');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(HttpStatus.Ok);
})

test('should be able to get single post', async ({request}) => {
    const postId = Math.floor((Math.random() * 100) + 1);
    const response = await request.get(`posts/${postId}`);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(HttpStatus.Ok);
})

test('should be able to create new post', async ({request}) => {
    const postId = Math.floor((Math.random() * 100) + 1);
    const response = await request.post('posts', {
        data: {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(HttpStatus.Created);
})

import { writable } from 'svelte/store';

export const currentArticle = writable({
    title: '',
    author: '',
    published: '',
    ttr: 0,
    image: '',
    content: ''
});

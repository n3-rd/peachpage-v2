import { writable } from 'svelte/store';

export const currentArticle = writable({
    url: '',
    title: '',
    author: '',
    published: '',
    ttr: 0,
    image: '',
    content: ''
});

// const isDarkMode = localStorage.getItem('isDarkMode') === 'true';

// export const darkMode = writable(isDarkMode);

// darkMode.subscribe(value => {
//     // @ts-ignore
//     localStorage.setItem('isDarkMode', value);
//     // @ts-ignore
//     document.querySelector('html').classList.toggle('dark', value);
// });


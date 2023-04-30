// db.js
import Dexie from 'dexie';

export const db = new Dexie('articleDatabase');
db.version(1).stores({
    articles: '++id, url, title, description, image, content, author, source, published, ttr, uid', // Primary key and indexed props
});
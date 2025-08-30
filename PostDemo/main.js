"use strict";
const postsUl = document.getElementById('posts');
const countEl = document.getElementById('count');
const statusEl = document.querySelector('#status');
const btnLoadEl = document.querySelector('#btn-load');
const form = document.querySelector('#create-form');
const inputTitleEl = document.querySelector('#title');
const inputBodyEl = document.querySelector('#body');
const createStatusEl = document.querySelector('#create-status');
const fetchData = async (url) => {
    const res = await fetch(url);
    if (!res.ok)
        throw new Error(`http ${res.status}`);
    return res.json();
};
const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (!res.ok)
        throw new Error(`http ${res.status}`);
    return res.json();
};
form.addEventListener('submit', e => {
    e.preventDefault();
    const title = inputTitleEl.value.trim();
    const body = inputBodyEl.value.trim();
    if (!title || !body)
        return;
    const newItem = { title, body };
    createStatusEl.textContent = 'Submit...';
    try {
        const created = postData('https://jsonplaceholder.typicode.com/posts', newItem);
        console.log(created);
        postsState = [newItem, ...postsState];
        renderPosts(postsState);
        createStatusEl.textContent = 'Submit successfully';
        createStatusEl.className = 'status ok';
        form.reset();
    }
    catch (error) {
        createStatusEl.textContent = `Submit failed: ${error.message}`;
        createStatusEl.className = 'status error';
    }
    statusEl.textContent = '';
    statusEl.className = '';
});
const renderPosts = (posts) => {
    console.log('posts', posts);
    postsUl.innerHTML = posts.map(p => {
        var _a;
        return `
        <li>
            <b>${p.title}</b> (#${(_a = p.id) !== null && _a !== void 0 ? _a : 'new'})<br/>
            ${p.body}
        </li>
    `;
    }).join('');
    countEl.textContent = posts.length.toString();
};
let postsState = [];
btnLoadEl === null || btnLoadEl === void 0 ? void 0 : btnLoadEl.addEventListener('click', async () => {
    statusEl.textContent = 'Loading....';
    statusEl.className = 'status';
    try {
        const all = await fetchData('https://jsonplaceholder.typicode.com/posts');
        console.log('posts', all);
        postsState = all.slice(0, 5);
        renderPosts(postsState);
        statusEl.textContent = 'Load successfully';
        statusEl.className = 'status ok';
        createStatusEl.textContent = '';
        createStatusEl.className = '';
    }
    catch (error) {
        statusEl.textContent = `error: ${error.message}`;
        statusEl.className = 'status error';
    }
});

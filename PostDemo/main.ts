type Post = {
    id?:number;
    userId?:number;
    title:string;
    body:string;
}

const postsUl = document.getElementById('posts') as HTMLUListElement;
const countEl = document.getElementById('count') as HTMLElement;
const statusEl = document.querySelector('#status') as HTMLElement;
const btnLoadEl = document.querySelector('#btn-load') as HTMLButtonElement;
const form = document.querySelector('#create-form') as HTMLFormElement;
const inputTitleEl = document.querySelector('#title') as HTMLInputElement;
const inputBodyEl = document.querySelector('#body') as HTMLInputElement;
const createStatusEl = document.querySelector('#create-status') as HTMLElement;


const fetchData = async<T> (url:string):Promise<T> => {
    const res = await fetch(url);
    if (!res.ok) throw new Error (`http ${res.status}`);
    return res.json();
}

const postData = async <T>(url:string, data:Post):Promise<T> => {
    const res = await fetch(url, {
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(data)
    })
    if(!res.ok) throw new Error(`http ${res.status}`);
    return res.json();
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const title = inputTitleEl.value.trim();
    const body = inputBodyEl.value.trim();
    if(!title || !body) return;
    const newItem:Post = {title, body};
    createStatusEl.textContent = 'Submit...';

    try {
        const created = postData<Post>('https://jsonplaceholder.typicode.com/posts', newItem);
        console.log(created);
        postsState = [newItem, ...postsState];
        renderPosts(postsState);
        createStatusEl.textContent = 'Submit successfully';
        createStatusEl.className = 'status ok';
        form.reset();
    } catch (error:any) {
        createStatusEl.textContent = `Submit failed: ${error.message}`;
        createStatusEl.className = 'status error';
    }
    statusEl.textContent = '';
    statusEl.className = '';
});


const renderPosts = (posts:Post[]) => {
    console.log('posts', posts);
    postsUl.innerHTML = posts.map( p => `
        <li>
            <b>${p.title}</b> (#${p.id ?? 'new'})<br/>
            ${p.body}
        </li>
    `).join('');
    countEl!.textContent = posts.length.toString();
}

let postsState:Post[] = [];
btnLoadEl?.addEventListener('click', async () => {
    statusEl.textContent = 'Loading....';
    statusEl.className = 'status';

    try {
        const all = await fetchData<Post[]>('https://jsonplaceholder.typicode.com/posts');
        console.log('posts', all);
        postsState = all.slice(0, 5);
        renderPosts(postsState);
        statusEl.textContent = 'Load successfully';
        statusEl.className = 'status ok';
        createStatusEl.textContent = '';
        createStatusEl.className = '';
    } catch (error:any) {
        statusEl.textContent = `error: ${error.message}`;
        statusEl.className = 'status error';
    }
});


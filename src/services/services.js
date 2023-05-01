
// const BashUrl = "https://social-gwp6.onrender.com"
const BashUrl = "http://localhost:4500"

export async function  getPosts (){
    const response = await fetch(`${BashUrl}/post/getPosts`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    return await response.json();
};



export  async function createPosts ( data ){
    const response = await fetch(`${BashUrl}/post/createPost`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    console.log(response);
    return await response.json();
}

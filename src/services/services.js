
const BashUrl = "https://social-gwp6.onrender.com"
// const BashUrl = "http://localhost:4500"

export async function  getPosts (){
    const response = await fetch(`${BashUrl}/post/getPosts`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    return await response.json();
};

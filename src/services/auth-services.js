
const BashUrl = "https://social-gwp6.onrender.com"
// const BashUrl = "http://localhost:4500"

export  async function adminLogin ( email, password ){
        const response = await fetch(`${BashUrl}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        console.log(response);
        return await response.json();
}


export  async function addUser ( email, password ){
    const response = await fetch(`${BashUrl}/auth/signUp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });
    console.log(response);
    return await response.json();
}


export  async function getUsers (){
    const response = await fetch(`${BashUrl}/auth/getUsers`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    return await response.json();
};
const apiKey = process.env.REACT_APP_IPIFY_API_KEY

const BACKEND_API = process.env.REACT_APP_BACKEND ? process.env.REACT_APP_BACKEND : '';

export const getIpDetails = (ip) => {
    return  fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ip ? ip : ''}`)
    .then((res) => res.json())
}

export const createUser = async (body) => {
    let ipDetails = await fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress`)
    ipDetails = await ipDetails.json();
    body.userIp = ipDetails.ip;

    return fetch(`${BACKEND_API}/api/user/create`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then((res) => res.json())
}
export default async function handler(req, res) {
    const data = {
        name: "ruslan",
        id: "1"
    }
    const url = "https://localhost:4000/booking/"

    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    console.log("Send: ", response)
    return response.json();
}
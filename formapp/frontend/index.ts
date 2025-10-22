// Change this URL to match your backend
const API_BASE_URL = 'http://localhost:5000';

// Example fetch calls:
async function addUser(userData: any) {
    const response = await fetch(`${API_BASE_URL}/users1`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    });
    return await response.json();
}

async function deleteUser(userId: number) {
    const response = await fetch(`${API_BASE_URL}/users1/${userId}`, {
        method: 'DELETE'
    });
    return await response.json();
}
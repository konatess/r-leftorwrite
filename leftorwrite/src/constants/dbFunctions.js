export default {
    changeUsername: (userId, newUsername) => {
        fetch(`${server}/user/${userId}`, {
            method: 'PUT',
            body: JSON.stringify({
                username: newUsername
            })
        })
        .then(response => response.json())
        .then(
            (response) => {
                return response
            },
            (error) => {
                return error
            }
        );
    }
}
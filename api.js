const baseUrl = 'https://front-end-chat.onrender.com/';

export async function getMotivated(prompt) {
    try {
        const response = await fetch(`${baseUrl}/motivate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from the server.');
        }

        const data = await response.json(); // Parse the response as JSON

        return data.message;
    } catch (error) {
        console.error('Error:', error);
        return 'Failed to get motivation. Please try again later.';
    }
}



// Service to connect to the backend API for sending messages to the AI
export const sendMessageToAi = async (userMessage) => {
    try {
        const response = await fetch('http://192.168.100.152:3000/api/chat/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userMessage }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error('Error sending message to AI:', error);
        throw error;
    }
}
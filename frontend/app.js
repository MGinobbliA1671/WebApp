async function updateClickCount() {
    try {
        const response = await fetch('http://localhost:3000/api/click', { method: 'POST' });
        const data = await response.json();
        console.log(`Button clicks: ${data.clickCount}`);
    } catch (error) {
        console.error('Error sending click data:', error);
    }
}

document.getElementById('videoLink').addEventListener('click', async () => {
    await updateClickCount();
    window.open('https://youtu.be/es_E2fdNa8M?si=aWxTiy_1YyGfcdyQ', '_blank');
});


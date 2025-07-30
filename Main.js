# Gimkit Answer Revealer

(function() {
    const originalFetch = window.fetch;
    window.fetch = async function(...args) {
        const response = await originalFetch(...args);
        if (response.url.includes('gimkit.com/api/')) {
            const data = await response.json();
            console.log('Gimkit Answers:', data);
        }
        return response;
    };
})();

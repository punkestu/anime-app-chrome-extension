chrome.runtime.onMessage.addListener(function (request, _, sendResponse) {
    if (request.type === "search") {
        if (!request.query) {
            sendResponse({ result: [] });
            return true;
        }
        fetch(
            `https://anime-app-mauve.vercel.app/api/v1/anime/search?q=${request.query}`,
        )
            .then((res) => res.json())
            .then((res) => {
                sendResponse({ result: res.data });
            });
    }
    return true;
});

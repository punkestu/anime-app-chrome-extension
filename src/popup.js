document.getElementById("search").addEventListener("change", (e) => {
    const animeContainer = document.getElementById("anime-list");
    animeContainer.innerHTML = "loading...";
    chrome.runtime.sendMessage(
        {
            type: "search",
            query: e.target.value,
        },
        (res) => {
            if (res.result.length === 0) {
                animeContainer.innerHTML = "not found";
                return;
            }
            animeContainer.innerHTML = res.result
                .map(
                    (anime) => `
        <li class="w-full">
          <a 
          class="hover:bg-slate-100 duration-300 px-2 py-1 w-full block" 
          href="https://anime-app-mauve.vercel.app${anime.link}" target="_blank">
            ${anime.title}
          </a>
        </li>`,
                )
                .join("\n");
        },
    );
});

class SearchBar extends HTMLElement {  
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();

    }

    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = `  
        <div class="search-bar">
            <div id="search-container" class="search-container">
                <input placeholder="Search your favorit films..." id="searchElement" type="search">
                <button id="searchButtonElement" type="submit">Search</button>
            </div>
                <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" alt="Logo">
            </div>
        `
        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);
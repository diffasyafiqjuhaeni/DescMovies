class JumboTron extends HTMLElement {
    
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        :host {
            width: 100%;
            height: 200px;
            background-image: url("https://cdns.klimg.com/dream.co.id/resources/news/2020/01/17/127377/kalau-diperhatikan-ternyata-hanya-ada-10-desain-poster-film-200117g.jpg");
            color: white;
            display: block;
        }
        
        h1, h2 {
            text-align: center;
            padding: 10px;
            font-size: 50px;
            text-shadow: 3px 3px 3px black;
        }

        @media screen and (max-width: 700px){
            h1, h2 {
                font-size: 30px;
            }
            :host {
                height: 100px;
            }
        }

        @media screen and (max-width: 405px){
            h1, h2 {
                font-size: 25px;
            }
        }

        </style>
        <div>
            <h1>Welcome</h1>
            <h2>Find your favorit movies</h2>
        </div>
        `;
    }
}

customElements.define("jumbo-tron", JumboTron);
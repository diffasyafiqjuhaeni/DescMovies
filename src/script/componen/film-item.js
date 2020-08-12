class FilmItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set film(film) {
        this._film = film;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
               * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
               }
               
                img {
                   max-height: 250px;
                   object-fit: cover;
                   border-top-left-radius: 10px;
                   border-bottom-left-radius: 10px;
               }
              
               table{
                width: 600px;
                margin-left: 80px;
                margin-top: 30px;
                margin-bottom: 15px;
                float: left;
                border-radius: 10px;
                box-shadow: 0px 0px 10px 2px #404040;
               }

               th, td {
                padding: 3px;
               }

               #row {
                   background-color: #cccccc;
               }

                @media screen and (max-width: 1350px){
                    table {
                        width: 500px;
                    }
                }

                @media screen and (max-width: 1180px){
                    table {
                        width: 450px;
                        margin-left: 50px;
                    }
                }
                
                @media screen and (max-width: 1020px){
                    table {
                        width: 800px;
                        margin: 50px;
                    }
                }

                @media screen and (max-width: 890px){
                    table {
                        width: 650px;
                    }
                }

                @media screen and (max-width: 735px){
                    table {
                        width: 550px;
                        margin: 30px;
                        margin-left: 40px;
                    }
                    img {
                        width: 100px;
                    }
                }

                @media screen and (max-width: 627px){
                    table {
                        width: 450px;
                        margin-left: 30px;
                    }
                }

                @media screen and (max-width: 506px){
                    table {
                        width: 350px;
                    }
                    tr, td {
                        font-size: 12px;
                    }
                }

                @media screen and (max-width: 405px){
                    table {
                        width: 315px;
                    }
                }

                @media screen and (max-width: 321px){
                    table {
                        width: 260px;
                    }
                }
        </style>

           <table>
           <tr>
                <th rowspan="5"><img src="https://image.tmdb.org/t/p/w500${this._film.poster_path}" alt="Poster not available">
                </th>
           </tr>
           <tr>
                <th id="row">Title:</th>
                <td id="row">${this._film.title}</td>
           </tr>
           <tr>
                <th>Release:</th>
                <td>${this._film.release_date}</td>
           </tr>
           <tr>
               <th id="row">Rate:</th>
               <td id="row">${this._film.vote_average}</td>
           </tr>
           <tr>
               <th>Overview:</th>
               <td>${this._film.overview}</td>
           </tr>
         </table>`;
    }
 }
  
 customElements.define("film-item", FilmItem);
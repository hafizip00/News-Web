console.log("This is NEWS");
// 83f3209ea06c48588cffeca17823f57b KEY

///grab the news container


let newsaccordian = document.getElementById("newsaccordian");
let country  = 'us';
// let source  = 'nbc-news';


const apikey = '83f3209ea06c48588cffeca17823f57b';


const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`, true);

//xhr.open('GET' , `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}` , true);
// xhr.getResponseHeader('Content-type', 'application/json')


xhr.onload= function(){
    if(this.status == 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles
        // console.log(articles);

        let newshtml = '';
        articles.forEach((element , index) => {
            console.log(element);
            let commingnews = `<div class="accordion-item my-4">
                            <h2 class="accordion-header" id="heading${index}">
                                <button
                                class="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse${index}"
                                aria-expanded="true"
                                aria-controls="collapse${index}">
                                <h2>${element.title}</h2>
                                </button>
                            </h2>
                            <div
                                id="collapse${index}"
                                class="accordion-collapse collapse"
                                aria-labelledby="heading${index}"
                                data-bs-parent="#newsaccordian">
                                <div class="accordion-body">
                                <h3> Author: ${element.author}</h3>
                                <div><img src="${element.urlToImage}" class="img-fluid"></div>
                                <div><p>${element.description}</p>
                                <p><a href="${element.url}" target="_blank">Read More..</a></p>
                                </div>
                                
                                <p mx-2>Source: ${element.source.name}</p>
                                </div>
                            </div>
                            </div>`;

            newshtml += commingnews;
        });
              
            newsaccordian.innerHTML = newshtml;
    }
    else{
        console.log("SOME  ERROR OCCURRED")
    }
}

xhr.send();

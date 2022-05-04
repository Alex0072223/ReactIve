import React, {useEffect, useState} from 'react';
import './ApiSpace.css'

const ApiSpace = () => {

        const [articles,setArticles] = useState([]);

        useEffect(() => {

            const fetchData = async () => {
                const response = await  fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=10');

                const articles = await  response.json();

                setArticles(articles)

            }

            fetchData();


        }, []);




    return (
        <div>
            <h2>Placeholder </h2>

            {
                articles.map(article=>(
                    <div className="article">

                        <br/>
                            <span>Номер космической новости: {article.id}      </span>
                        <br/>
                          <h1>  <span>       {article.title}</span> </h1>
                        <br/>
                            <img className="imgs" src={article.imageUrl}/>
                        <br/>
                            <span>{article.summary}</span>
                        <br/>
                        <span>Дата публикации:  {article.publishedAt}</span>
                        <br/>
                            <button className="button_1"><a href={article.url}>Ссылка на статью</a></button>

                    </div>
                ))
            }


        </div>
    )
}

export default ApiSpace;
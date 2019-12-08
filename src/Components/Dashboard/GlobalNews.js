import React, { Component } from 'react'

export default class GlobalNews extends Component {

    constructor() {
        super()
        this.state = {
            news: [
                {
                    title: "News title",
                    news: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus justo justo, aliquam eu viverra eu, consequat tincidunt tellus. Sed vulputate in augue vel tempor. Ut tempor sodales vehicula. Aliquam eu lorem odio. Etiam lectus ex, elementum id feugiat sed, eleifend et augue. Etiam elit lorem, dignissim quis mauris molestie, porta sagittis dui. Mauris ac sollicitudin nunc, in efficitur orci. Maecenas tortor ligula, pretium non mattis non, maximus vel elit. Praesent nec egestas risus, at fringilla erat. Aliquam dolor velit, iaculis eget blandit at, pulvinar id diam. Curabitur consequat nisl id mi c"
                },
                {
                    title: "News title",
                    news: "Some news."
                },

                {
                    title: "News title",
                    news: "Some news."
                },
                {
                    title: "News title",
                    news: "Some news."
                }
            ]
        }
    }

    render() {
        return (
            <div id="globalNews" className="mt-2">

                <h2 style={h2} className="display-4">News</h2>

                <br/>

                <div className="jumbotron pt-3 pb-0 text-center text-break" style={jumbotron} data-simplebar>

                    {this.state.news.map((news, key) => (
                        <div className="news" key={key}>
                            <h4 className="newsTitle">{news.title}</h4>
                            <p>{news.news}</p>
                        </div>
                    ))}

                </div>
            </div>
        )
    }
}

let h2 = {
    textAlign: "center",
    textDecoration: "underline"
},
    jumbotron = {
        background: "none",
        height: "300px",
        borderRadius : "0",
        boxShadow : "0px 10px 20px 0px rgba(0, 0, 0, 0.3)"
    }
import React from 'react'

const RecipeItem = ({item, searchString}) => {

    const pItem = item || {thumbnail: '', title: '', ingredients: ''}
    const pSearchString = searchString || ''
    
    const highlight = (text) => {
        const regex = new RegExp(`(${pSearchString})`, 'gi')
        const parts = text.split(regex)

        return <span>{parts.map(callback)}</span>

        function callback(part, idx){
            return shouldHighlight(part)
                        ? <mark key={idx}>{part}</mark>
                        : part
        }

        function shouldHighlight(part){
            return part.toLowerCase() === pSearchString.toLowerCase();
        }
    }

    const pack = text => ({__html: text})

    return (
        <div className="col-sm-3 mt-4">
            <div className="card">
                <img className="card-img-top img-fluid" src={pItem.thumbnail} alt={pItem.title} />
                <div className="card-body">
                    <h5 className="card-title">{
                        highlight(pItem.title)
                    }</h5>
                    <p className="card-text">
                        <strong>Ingredients: </strong>
                        {highlight(pItem.ingredients)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RecipeItem;
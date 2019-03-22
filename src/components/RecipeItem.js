import React from 'react'

const RecipeItem = ({item, searchString}) => {

    const pItem = item || {thumbnail: '', title: '', ingredients: ''}
    const pSearchString = searchString || ''
    
    const highlight = (text) => {
        const regex = new RegExp(pSearchString, 'gi')
        const highlighted = text.replace(regex, replaceFunc)
        return highlighted

        function replaceFunc(match){
            return `<mark>${match}</mark>`
        }
    }

    const pack = text => ({__html: text})

    return (
        <div className="col-sm-3 mt-4">
            <div className="card">
                <img className="card-img-top img-fluid" src={pItem.thumbnail} alt={pItem.title} />
                <div className="card-body">
                    <h5 className="card-title" dangerouslySetInnerHTML={
                        pack(highlight(pItem.title))
                    }/>
                    <p className="card-text" dangerouslySetInnerHTML={
                        pack('<strong>Ingredients: </strong>'+highlight(pItem.ingredients))
                    }/>
                </div>
            </div>
        </div>
    )
}

export default RecipeItem;
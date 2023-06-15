import React from 'react'
import UseAnimation from 'react-useanimations';
import trash2 from 'react-useanimations/lib/trash2';
import bookmark from 'react-useanimations/lib/bookmark';
import arrowDown from 'react-useanimations/lib/arrowDown';
import settings2 from 'react-useanimations/lib/settings2';
import '../css/bookMarkTab.css'
import { getCurrentTab } from '../functions/getCurrentTab';
import { getName } from '../functions/getName';
export function BookMarkTab({ statusButtons ,nextClick, deleteClick, addItems ,body, updateErrors }) {
    const nextButton  = () => {
        if( statusButtons() === true ) return nextClick();
        return updateErrors('No has hecho ningun BookMark')
    };
    const deleteButton = () => {
        if( statusButtons() === true ) return deleteClick( body.id );
        return updateErrors('No has hecho ningun BookMark');
    };
    const addButton = () => {
        if( statusButtons() === true ){
            getCurrentTab().then(
                url => {
                    console.log(`Aqui va la url: ${ url }`)
                    const item = {
                        url: url,
                        name: getName( url ),
                        id: new Date().getMilliseconds(),
                    }
                    return addItems( item )
                }
            )
            return updateErrors('Item agregado')
        }
        return updateErrors('No puedes agregar ningun item')
    }
  return (
    <div className='elements'>
    <UseAnimation className='nextBookMark' animation={ arrowDown } size={100} 
        onClick={ nextButton } />
    <UseAnimation className='addUrl' animation={ bookmark } size={100}
        onClick={ addButton } />
    <UseAnimation className='deleteBookMark' animation={ trash2 } size={100}
        onClick={ deleteButton } />
    <UseAnimation className='config' animation={ settings2 } size={100} />
    </div>
    /*
    <>
    <button className='btnBmNext' onClick={ nextButton } >
        <span>Next BookMark</span>
        <div className='topBtnBmNext'></div>
        <div className='leftBtnBmNext'></div>
        <div className='bottomBtnBmNext'></div>
        <div className='rightBtnBmNext'></div>
    </button>
    <button className='btnBmAddUrl' onClick={ addButton }>
        <span>Add Url</span>
        <div className='topBtnBmAddUrl'></div>
        <div className='leftBtnBmAddUrl'></div>
        <div className='bottomBtnBmAddUrl'></div>
        <div className='rightBtnBmAddUrl'></div>
    </button>
    <button className='btnBmDelete' onClick={ deleteButton }>
        <span>Delete Bookmark</span>
        <div className='topBtnBmDelete'></div>
        <div className='leftBtnBmDelete'></div>
        <div className='bottomBtnBmDelete'></div>
        <div className='rightBtnBmDelete'></div>
    </button>
    </>
    */
  )
}

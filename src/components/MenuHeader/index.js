import React, { useEffect } from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategory } from '../../actions';
import { Nav, Navbar } from 'react-bootstrap';

/**
* @author
* @function MenuHeader
**/

const MenuHeader = (props) => {

  const category = useSelector(state => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const goToCategory=(link)=>{
    window.location=link;
  }

  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <li key={category.name}>
          {
            <button className="button"
            onClick={()=>goToCategory(`/${category.slug}?cid=${category._id}`)}>
            {category.name}
            </button >
          }
          {/* {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null} */}
        </li>
      );
    }
    return myCategories;
  }
  return (
    <div className="menuHeader">
      <ul>
        {category.categories.length > 0 ? renderCategories(category.categories) : null}
      </ul>
    </div>
  )

}

export default MenuHeader
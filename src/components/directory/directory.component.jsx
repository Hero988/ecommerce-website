import CategoryItem from '../category-item/category-item.component'

import './directory.styles.scss'

// we are creating a directory component and we are going to get the categories as a prop
const Directory = ({ categories }) => {
    return (
        //  this div holds the categories containers i.e. Hats, Jackets e.t.c }
        <div className="directory-container">
        {/* we are going to map over the categories and then we pass a function where we get the title of the categroy from the catgories array and pass that on to
        our code. This is going to be used to easily add multiple categories.*/}
        {categories.map((category) => (
        //  Make sure to use the key as the ID when mapping things so we can better distinguish which category we are talking about
        //  make sure to call the key where we actually call the map
        // calling the categorys component and passing the key and the category i.e. category.title which we destructure in the component 
        <CategoryItem key={category.id} category={category}/>
        ))}
        </div>
    );
};

export default Directory;
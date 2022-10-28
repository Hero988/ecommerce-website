import './category-item.styles.scss'

// created a category function and we are going to recieve each category as a prop
const CategoryItem = ({ category }) => {
    // we are destructing the image ure and the title. I.e. category.imageUrl
    const { imageUrl, title } = category;
    return (
        // contains all the content in 1 category i.e. Hats categorie. 
        <div className="category-container">
            {/* *image component in the the catgory add a style of background image to this specific component*/}
            <div className="background-image" style={{
                // add the imageURL as the background image (allows us to use a string value insid another string) (adds a custom style to the URL element)
                backgroundImage: `url(${imageUrl})`
            }} />
            
            {/* this container hold the actual content in the container i.e. The Hats Text */}
            <div className="category-body-container">

                {/* text text of the container i.e. what can you read in the container */}
                <h2>{title}</h2>
                <p>SHOP NOW</p>
            </div>
        </div>
    )
}

export default CategoryItem
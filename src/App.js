import Directory from "./components/directory/directory.component";

const App = () => {
  // an array that contains objects that reflect what we have as the categories of our website
  const categories = [
    // to determain what should be in here you have to think what is going to change i.e. title of the category and put that in here and the shop now is not going going to
    // change there we do not put it in here
    {
      // the id of the categories
      id: 1,
      // the title of the category i.e. Hats, Jacets, Mens Ware
      title: "hats",
      // the image we are going to use as the background image
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      // the id of the categories
      id: 2,
      // the titel of the category i.e. Hats, Jacets, Mens Ware
      title: 'Jackets',
      // the image we are going to use as the background image
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      // the id of the categories
      id: 3,
      // the titel of the category i.e. Hats, Jacets, Mens Ware
      title: 'Sneakers',
      // the image we are going to use as the background image
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      // the id of the categories
      id: 4,
      // the titel of the category i.e. Hats, Jacets, Mens Ware
      title: 'Womens',
      // the image we are going to use as the background image
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      // the id of the categories
      id: 5,
      // the titel of the category i.e. Hats, Jacets, Mens Ware
      title: 'Mens',
      // the image we are going to use as the background image
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png"
    },
  ]

  return (
    <Directory categories={categories} />
  )
}

export default App;
// do it all in 1 file and then create a components folder
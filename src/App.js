// import the routes component 
import { Routes, Route} from "react-router-dom";

// import Navigation component
import Navigation from "./components/routes/navigation/navigation.component";

// import the home component
import Home from "./components/routes/home/home.component";

// import Authentication componets
import Authentication from "./components/routes/authentication/authentication.component";

// Shop component 
const Shop = () => {
  return (
    <div>
      <div>
        <h1>I am the Shop page</h1>
      </div>
    </div>
  )
}

const App = () => {
  return (
    // anything that is routable i.e. the home page is wrapped in the routes component (routes allows this application to register the route components)
    <Routes>
      {/* this should nest everything */}
      <Route path="/" element={<Navigation />}>
        {/* route will then render a specific component when it matches the specific route that we are looking for. 
        {/* call the home compoenent to get the home page, index means when you match this / i.e. with nothing in it then this should be the home component*/}
        <Route index element={<Home />} />
        {/* So when you match path / (home page, base URL level) then I want you to render a specific element i.e. the honme component, 
        call the Shop compoenent to get the home page */}
        <Route path="shop" element={<Shop />} />
        {/* add the signin route */}
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App;
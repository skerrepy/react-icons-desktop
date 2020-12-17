import WindowFrame from "./Components/layout/frame/WindowFrame";
import Layout from "./Components/layout/layout/Layout";
import Navbar from "./Components/layout/navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchPage from "./Components/search-page/SearchPage";
import IconSets from "./Components/icons-list/IconSets";
import IconSetDisplay from "./Components/icon-set-display/IconSetDisplay";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GithubPage from "./Components/github-page/GithubPage";
function App() {
  return (
    <Router>
      <WindowFrame />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Layout>
        <Navbar />
        <Route path="/" exact component={SearchPage} />
        <Route path="/icons/sets" exact component={IconSets} />
        <Route path="/icons/sets/:id" exact component={IconSetDisplay} />
        <Route path="/github" exact component={GithubPage}/>
      </Layout>
    </Router>
  );
}

export default App;

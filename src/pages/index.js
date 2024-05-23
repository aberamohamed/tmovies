import  {Fragment, React, useState} from "react";
import Login from "./login";
import Dashboard from "./Dashboard";

export default function Index() {
  const [open, setOpen] = useState(true);
  const [renderedComponent, setRenderedComponent] = useState("login");
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
<Fragment>
  {renderedComponent === "login" && <Login setRenderedComponent = {setRenderedComponent} renderedComponent = {renderedComponent}/> ||
  renderedComponent === "dashboard" && <Dashboard setRenderedComponent = {setRenderedComponent} renderedComponent = {renderedComponent}/> ||
  renderedComponent === "channel" && <Login setRenderedComponent = {setRenderedComponent} renderedComponent = {renderedComponent}/> ||
  renderedComponent === "program" && <Login setRenderedComponent = {setRenderedComponent} renderedComponent = {renderedComponent}/>}
</Fragment>

  );
}

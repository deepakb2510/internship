import Footer from "./footer";
import classes from "./Layout.module.css";
import Header from "./header";

function Layout(props) {
  console.log(props.children);
  return (
    <div>
      <Header toggleTheme={props.toggleTheme} theme={props.theme} />
      <div className={classes.body}>
        <main className={classes.main}>{props.children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

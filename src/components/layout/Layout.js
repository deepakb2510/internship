import Footer from './footer';
import Header from './header';
import classes from './Layout.module.css';
function Layout(props){
    return (<div>
        <Header/>
     <main className={classes.main }>{props.children}</main>
     <Footer/>  
    </div>
    )
}

export default Layout;
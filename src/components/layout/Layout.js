import Footer from './footer';
import Header from './header';
import classes from './Layout.module.css';
import Testheader from './testheader';
import Testnavbar from './testnavbar';

function Layout(props){
    console.log(props.children)
    return (<div>
        {/* <Testheader></Testheader> */}
        <Testnavbar></Testnavbar>
        {/* <Header/> */}
        <div className={classes.body}>
            <main className={classes.main }>{props.children}</main>
        </div>
        <Footer/>  
    </div>
    )
}

export default Layout;
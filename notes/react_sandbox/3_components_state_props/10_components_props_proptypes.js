/*
NOTES: Components, Props, & PropTypes

  #Components, Props, & PropTypes overview {
    * Props are basically properties you can pass into a component from outside *
    - Begin your components file name with an uppercase // Navbar.js 
    - Set prop name and value in App.js
    - Import components you want to use into App.js 
      ex:
        import Navbar from './components/layout/Navbar';

        return (
          <div className='App'>
            <Navbar />
          </div>
        )
    - To structure component // go to component file // Nav bar.js 
      ex:
        return (
          <nav className='navbar bg-primary'>
            <h1>Navbar</h1>
          </nav>
        );
    

  }

  #Props {
    - Props are basically properties you can pass into a component from outside 
    - In App.js you can pass in a prop 
    - create a prop called title 
      ex:
        return (
          <div>
            <Navbar title="prop value"/>
          </div>
        )
        
        export default App;
    - To use prop // go to where you want to use it file name // Navbar.js
      ~ if using style component use this.props.prop_name to call prop
      ~ if using functional components // no need for this.
      ~ use curly when braces on props {} 
      ex:
        return (
          <nav className= 'navbar bg-primary'>
            <h1>
              {props.title}
            </h1>
          </nav>
        )

        export default Navbar;
    - can also set default props // dont need to be passed into App.JS // just set name and value in current file 
      ex:
        static defaultProps = {
          title: 'Github Finder' ,
          icon: 'fab fa-github'
        };
        
  }
  
  #Proptypes {
    - basically type checking // will tell you if your product should be a string, number, or array
    - add propType to component file you want it to apply to
    - short-cut to proptype // impt + enter // which will bring in import PropTypes from 'prop-types';
      ex:
        static propTypes = {
          title: PropTypes.string.isRequired,
          icon: PropTypes.string.isRequired
        }

    

  }


*/
/*
NOTES: Intro To JSX & Fragments

  #JSX overview {
    * JSX is basically a faster and cleaner way of writing markup/html in javascript *
    - JSX = Javascript syntax extension
    - under the hood JSX is just javascript 
    - when you want to use a class in JSX = className"enter_name"
    - for attribute in regular HTML // <label for='name'>Name</label> // but in JSX <label htmlFor='name'></label>
    - JSX has to have one parent element // each element/expression must have one parent element 
    - if you only want the element and dont want to render a div use fragments
    - import fragment when using it <> </> or <Fragment> </Fragment> so you dont have to write <React.Fragment></React.Fragment>
    - If not for JSX writing static markup/HTML in straight javascript with a bunch of markup, expressions, attributes, props, would get really messy
  }
  

  #FRAGMENTS { 
    - used to replace divs 
    - almost like a ghost element // wont show up in dom 
    - eer
        ex:
          - <REACT.Fragment></REACT.Fragment>
          - in regular html...
          return (
            <div>
              <h1>Hello from React</h1>
              <h2>Goodbye</h2>
          </div>
          );

  }
    


*/
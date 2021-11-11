/*
NOTES: Expressions & Conditionals In JSX

  #Expressions & Conditionals overview {
    * JSX is basically a faster and cleaner way of writing html in javascript *
    - You can add JS within your markup
    - Ternary operator operator is shortcut for if statement 
    - You can use variables in jsx by using curly braces {}
        ex:
          const name = 'John Doe';

          return (
            <div className='App'>
              <h1>Hello {name}</h1>
            </div>
          );
    - You can put any JS expression inside curly braces {}
        ex:
          const name = 'John Doe';

          return (
            <div className='App'>
              <h1>Hello {1 + 1}</h1>
            </div>
          ):
    - You can add methods inside curly braces {}
        ex:
          const name = 'John Doe';

          return (
            <div className='App'>
              <h1>Hello {name.toUpperCase()}</h1>
            </div>
          );
    - You can add function inside curly braces {}
        ex:
          const name = 'John Doe';

          const foo = () => 'Bar';

          return (
            <div className='App'>
              <h1>Hello {foo()}</h1>
            </div>
          );
    - You can also run conditionals inside curly braces {}
      ~ in a situation where you are fetching data from an API // you might have a loading variable // that shows either a spinner img or text that says loading if this condition is true 
        ex:
          const name = 'John Doe';
          const loading = true;

          if(loading) {
            return <h4>Loading...</h4>
          }


          return (
            <div className='App'>
              <h1>Hello {foo()}</h1>
            </div>
          );
    - You can use ternary operator inside curly braces {}
      ~ If loading // then show <h4></h4> else which is represented : // show <h1></h1>
        ex: 
          const name = 'John Doe';
          const loading = false;
          return (
            <div className='App'>
              {loading ? <h4>Loading...</h4> : <h1>Hello {name}</h1>}
            </div>
          );

  }
  

*/
/*
NOTES: Getting Started With Component State

  #Component State overview {
    * JSX is basically a faster and cleaner way of writing html in javascript *
    - Component level state means that your state is contained within a single component
    - To output component bring it into App.js
    - when doing inline style in component background-color is not going to work// backgroundColor: 'red' will

  }
  
  #Add state to component/ class based  {
    - @2:30 // video 11 
    - in a class based component whenever you want to grab something from stat you use this.state
    - You dont need a constructor to define your state // there are other ways 
    - use constructor if you need to // function that run when component runs
    ex:
      constructor() {
        super();
        this.state = {
          id: 'id',
          login: 'mojombo',
          avater_url: 'https...'
          html_url: 'https:...'
        }
      }

      render() {
        return 
        <div className="card text-center">
          <img 
            src={this.state.avatar_url} 
            alt="" 
            className="round-img"
            style={{ width: '60px' }}
          />
          <h3>{this.state.login}</h3>
          <div></div>

        </div>;
      }
  }
  
  #Without State / Destructor  {
    - @8:04 // video 11 
    - You dont need a constructor to define your state 
      state = {
        id: 'id',
        login: 'mojombo',
        avatar_url: 'https://avaters0.githubusercontent.com',
        html_url: 'https://github.com/mojomb'
      }
    - Destructor so you can pull the values out from state // destructor is to pull stuff out from object 
    - When you destruct no longer have to say this.state 
      ex:
        const { login, avatar_url, html_url } = this.state

        render() {
          return 
          <div className="card text-center">
            <img 
              src={avatar_url} 
              alt="" 
              className="round-img"
              style={{ width: '60px' }}
            />
            <h3>{login}</h3>

            <div>
              <a href={html_url}>More</a>
            </div>

          </div>;
        }

  }

  export default UserItem;

*/
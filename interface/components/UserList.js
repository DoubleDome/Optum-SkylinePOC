import React from 'react';


const iconRouter = {
  female: "girl",
  male: "boy"
}

function UserList({data = []}) {

  const view = data.map((user, idx) => {
    const {gender, name, selected} = user;

    return (
      <li key={idx} className={`user`}>
       <button className={`user-button ${selected ? 'user-button--selected' : ''}`} selected={selected}>
        <div className="user-icon-wrapper">
            <img className="user-icon" src={require(`../assets/svgs/${iconRouter[gender]}.svg`)}/>
          </div>
          <span className="user-name">{name}</span>
       </button>
      </li>
    )
  })
  return (
    <React.Fragment>
       <UserListStyles></UserListStyles>
      <div className="user-list">
        <ul className="users">
          {view}
        </ul>
      </div>
    </React.Fragment>
  );
}

function User(){

}

function UserListStyles() {
  return (
    <style jsx>{`
      .user-list {
        margin-top: 10px;
        margin-bottom: 10px;
        position: relative;
        box-sizing: border-box;
        border-bottom: 1px solid var(--grey-1);
      }
      .user-icon-wrapper {
        border-radius: 50% ;
        padding:10px;
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        margin-bottom: 5px;
        box-shadow: var(--box-shadow-settings);
      }
      .user-icon {
        width: 20px;
        background-color: white;
      }

      .users {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }

      .user-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: transparent;
        border: none;
        position: relative;
      }
      .user-name{

      }

      .user-button--selected:after{
        content: '';
        width: calc(100% + 20px);
        height: 5px;
        border-radius: 15px;
        background-color: var(--blue-1);
        bottom: -2px;
        position: relative;
      }
    `}</style>
  );
}

export default UserList;

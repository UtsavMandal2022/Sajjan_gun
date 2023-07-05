const Content = () => {
    return (
<div className="Page_content">
        <p class="intro_jk">
          Welcome! Sajjan Gun<br></br>
           If you are bored and dont like to read just keep clicking the "Real_Me" until you get the exact value of PI below :3 <br></br>
            OR click on the Intro icon to know more about me :D
            <br></br>Happy Reading!
        </p>
          <p>Arbitary pi nearby : {Math.PI+Math.random()*0.001}</p>
          </div>
      );
}

export default Content;
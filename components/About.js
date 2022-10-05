import React from "react";


function About(){
  const imgUrl= 'https://i0.wp.com/www.pd.co.ke/wp-content/uploads/2022/10/unnamed-40.jpg?resize=500%2C333&ssl=1'
    return(
        <div className="image">
         <img src={imgUrl} alt="newsimage" />
        
            <p><h1>check up daily to get top stories and trending trending news</h1>
            <h2>Our sources are the most reliable</h2>
            </p>
            

        </div>
        
    )
}
export default About;
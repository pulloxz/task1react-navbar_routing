

import React, { Component } from 'react';
import background from '/Users/fatimamuhammed/Desktop/taskone/src/imgs/monread_dental_clinic_naas_state_of_the_art_surgery_0296-1200x400.jpeg'


class HomePage extends Component {
    
    state = {  }
    render() { 
        return ( 
            <div>
               <div>
                <div style={{ backgroundImage: `url(${background})` }}>
    </div>
                 </div>
                 <div className='imp-line1'>
                    <h4 style={{textAlign:'center'}}>
                         Smiles for your whole family!
                    </h4>
                
                 <h6 style={{textAlign:'center'}}>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam..
                 </h6>
       
      

                 </div>
            </div>
            
         );
    }
}
 
export default HomePage;
import React, {Component} from 'react'

class People extends Component{
   constructor(){
       super()
   }

   render(){
       const {id, name, city, country, title, employer, favoriteMovies} = this.props.info
       return (
           <div className='card'>
               <p className='id'>{id}/25</p>
             <h3 className='name'>{name.first} {name.last}</h3>
             <p className='hist'><b>From:</b> {city}, {country}</p>
             <p className='hist'><b>Job Title:</b> {title}</p>
             <p className='hist'><b>Employer:</b> {employer}</p>
             <p className='movies'><b>Favorite Movies:</b>
             <ol>
                 <li>{favoriteMovies[0]}</li>
                 <li>{favoriteMovies[1]}</li>
                 <li>{favoriteMovies[2]}</li>
             </ol>
             </p>
               
               
           </div>
       )
   }
}
 export default People

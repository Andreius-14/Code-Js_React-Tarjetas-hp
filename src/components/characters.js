// import React, { useEffect, useState } from "react";

const Characters = ({name, imagen}) => {

    // const [personaje, setPersonaje] = useState([])
    // const urlApi = 'https://www.dnd5eapi.co'
    // const urlApi = ''


    // const personajeDnd = (urlApi) => { 
    //     fetch(`${urlApi}${url}`)
    //     .then(res => res.json())
    //     .then(data => {setPersonaje(data);
    //          console.log(data)})
    // }

    // useEffect(() => {
    //     personajeDnd(urlApi)
    // }, [])

    // if(personaje.image){

        return ( 
            <>
            <div className="col-lg-4 col-md-6 col-sm-12 p-4" >

              <div className="card " style={{ minWidth: "200px"}}>
                <img className="rounded mx-auto d-block m-2" loading="lazy" src={imagen} alt={name} />
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <hr />
                  {/* <p className="card-text">Dato: {personaje.actions}</p> */}
                  {/* <p className="card-text">Location: {item.location.name}</p> */}
                </div>
              </div>
              </div>
            </>
            
          )
    // }else{
    //     return("")
    // }
}
 
export default Characters;
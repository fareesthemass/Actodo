function Card(props){
    return(
        
        <div style={{backgroundColor:props.bgcolor}} className=" py-5 px-10 border rounded-md flex-grow">
            <h1 className="text-2xl font-medium">{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
        
    )
}

export default Card
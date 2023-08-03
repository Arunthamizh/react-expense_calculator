import './Card.css'
function Card(props){
    // get the class name from the props where the class name is used in component selector 
    const classes = 'card ' + props.className;
    return(
        <div className={classes}>
            {/* props.children is a reserved keyword in react */}
            {props.children}
        </div>
    )
}

export default Card
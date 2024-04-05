export default function About({image, about}){
return(
    <div>
        <aside>
            {/* if no image is passed down, we have a default placeholder*/}
            {image ? (<img src={image} alt="blog logo"/>) : (<img src="https://via.placeholder.com/215" alt="blog logo"/>)}
            <p>{about}</p>
        </aside>
    </div>
)
}
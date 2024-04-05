export default function Article({ title, date, preview, minutes }){
    return(
        
            <article>
            <h3>{title}</h3>
             <small>{date ? (date) : ("January 1, 1970")}</small>
             <p>{preview}</p>
             </article>
        

    )
}
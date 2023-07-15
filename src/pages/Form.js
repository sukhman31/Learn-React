export const Form = () =>{
    return(
        <form>
            <input className = "text-input" type="text" placeholder="Full Name..."/>
            <input className = "text-input" type="text" placeholder="Email..."/>
            <input className = "text-input" type="text" placeholder="Age..."/>
            <input className = "text-input" ype="password" placeholder="Password..."/>
            <input className = "text-input" type="password" placeholder="Confirm Password"/>
            <input className = "text-input" type="submit"/>
        </form>
    )
}
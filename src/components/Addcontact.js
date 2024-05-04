const Addcontact = () =>{
    return(
        <div className="formheader">
            <div className="add-contact">Addd Contact</div>
            <form>
                <label>Name: </label>
                <input type="text" placeholder="Enter Your Name" />
                <label>Email: </label>
                <input type="email" placeholder="Enter Your Email" />
            </form>
            <button>Add Contact</button>
        </div>
    )
}

export default Addcontact;
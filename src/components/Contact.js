const Contact = () => {
    return (
        <div>            
            <h1 className="m-4 p-4 font-bold">Contact Us Page</h1>
            <input className="border border-black m-2" placeholder="Name" />
            <input className="border border-black m-2" placeholder="Message" />
            <button className="p-4 bg-green-400 rounded-lg">Submit</button>
        </div>
    );
}

export default Contact;
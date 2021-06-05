function CreateAccount() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);

    

    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    };
    return (
        <Card
            bgColor="primary"
            header="Create Account"
            status={status}
            body={show ? (
                <>
                    Name<br/>
                    <input type="input" className="form-control" id="name"
                     placeholder="Enter name" value={name} onChange={e => 
                     setName(e.currentTarget.value)}/><br/>
                    <input type="input" className="form-control" id="email"
                     placeholder="Enter email" value={email} onChange={e => 
                     setEmail(e.currentTarget.value)}/><br/>
                    <input type="password" className="form-control" id="password"
                     placeholder="Enter password" value={password} onChange={e => 
                     setPassword(e.currentTarget.value)}/><br/>
                     <button type="submit" className="btn btm-dark" onClick={console.log(`handleCreate`)}>Create Account</button>
                     
                </>
            ):(
                <>
                    <h5>Success</h5>
                    <button type="submit" className="btn btm-dark" 
                    onClick={clearForm}>Add another Account</button>
                </>
            )}
        />
    );
};
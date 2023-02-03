


function HelloWorld() {
    let name = "Cee"

    const user = {
        firstName: "Harper",
        lastName: "perez"
    };

    const formName = (user) => {
        return user.firstName + ' ' + user.lastName;
    };

    return (
        <div>
            <div>xin chào : {name} và{formName(user)} </div>
            <div>{name === 'Cee' ? "Xin Chào Cee" : `Xin Chào ${formName(user)}`}</div>
        </div>
    );
}

export default HelloWorld;

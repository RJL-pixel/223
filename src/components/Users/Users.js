import {useEffect, useState} from "react";
import {getUsers} from "../../services";
import User from "../User/User";



export default function Users({elevate}) {


let [users, setUsers] = useState([]);

    useEffect(() => {

            getUsers().then(({data}) => setUsers([...data]))

        },
        []);

    return (




        <div>

        <div>
            {users.map(user => <User key={user.id}
                                       user={user}
                                       elevate={elevate}/>)
            }
</div>


        </div>);

}


import React, { useEffect } from 'react'
import User from '../type'
import Buttonselect from './Buttonselect'

interface Props {
    correntDiv: string
    correntRow: string
    user: User
    setUser: React.Dispatch<React.SetStateAction<User>>
}

export default function Rowselect({ correntDiv, setUser, user, correntRow }: Props) {
    useEffect(() => {
        console.log(user);
    }, [])

    return (
        <div className='Rowselect'>
            <h1> {correntRow}</h1>
            <div className="Buttonselects-meny">
                {[1, 2, 3, 4, 5].map((n) =>
                    <Buttonselect setUser={setUser} user={user} correntDiv={correntDiv} correntRow={correntRow} correntN={n} />

                )}</div>
        </div>
    )
}

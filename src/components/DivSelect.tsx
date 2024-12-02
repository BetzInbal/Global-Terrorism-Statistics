import React, { useEffect } from 'react'
import Rowselect from './Rowselect'
import User ,{}from '../type'

interface Props {
    correntDiv: string
    user: User
    setUser: React.Dispatch<React.SetStateAction<User>>
}
export default function DivSelect({ correntDiv, setUser, user }: Props) {
    const x:string[] = Object.keys((user as any)[correntDiv]||{})
    useEffect(() => {
        console.log(x);
    }, [])
    return (
        <div className='DivSelect'>
            {correntDiv}
            { x.map((k) =>
                <Rowselect setUser={setUser} user={user} correntDiv={correntDiv} correntRow={k} key={k} />
            )} 


        </div>
    )
}

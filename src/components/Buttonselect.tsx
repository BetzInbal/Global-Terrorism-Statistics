import React, { useEffect } from 'react'
import User from '../type'

interface Props {
    correntDiv: string
    correntRow: string
    correntN: number
    user: User
    setUser: React.Dispatch<React.SetStateAction<User>>
}

export default function Buttonselect({ correntDiv, setUser, user, correntRow, correntN }: Props) {
    useEffect(() => {
        console.log(user);
    }, [])


    return (
        <label className="kNQqukZg">
            <input type="radio" className="HpuCzejn"  hidden value="1"/>
                <span className="_4KhRFVBU ">
                {correntN}</span>
        </label>

    )
}

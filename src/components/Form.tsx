import React, { useState } from 'react'
import Anchaiot from './Anchaiot'
import DivSelect from './DivSelect'
import User from '../type'

export default function Form() {
const [user, setUser] =useState(new User())
const endelsubmit =()=>{}
  return (
    <div className='Form'>
        <label htmlFor='name'>שם מלא</label>
        <input type="text" name='name'/>
        <Anchaiot/>
        <DivSelect setUser={setUser} user={user} correntDiv='combatPreferences' key={"combatPreferences"}/>
        <DivSelect setUser={setUser} user={user} correntDiv='supportPreferences' key={"supportPreferences"}/>
        <DivSelect setUser={setUser} user={user} correntDiv='techPreferences' key={"techPreferences"}/>
        <label htmlFor='anaut'>הערות</label>
        <input type="text" name='anaut'/>
        <button type='submit' onClick={endelsubmit}>שלח טופס</button>
    </div>
  )
}

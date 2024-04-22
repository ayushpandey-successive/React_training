/*Develop a language switcher application using the useContext hook.
Create a context to manage the current language (e.g., English or Spanish).
Provide buttons to switch between languages.
Use the useContext hook to access the current language value.
Display different language versions of the application's content.*/

import React from 'react'
import { useContext } from'react'
import { LanguageContext} from './Provider'




const LanguageSwitcher = () => {
    const {language,toggleFunction} = useContext(LanguageContext)
  return (
    <div>
      <button onClick={()=>toggleFunction("en")}>To English</button>
      <button onClick={()=>toggleFunction("fr")}>To French</button>

      {language==="en"?(<div>English</div>):(<div>French</div>)}
    </div>
  )
}

export default LanguageSwitcher

import React, { useRef, useState } from 'react'

function LisaToode() {
  const [sõnum, muudaSõnum] = useState(""); 
  const luger = useRef();
  
  // hook (Reacti erikood) -> peavad olema imporditud, peavad algama use- eesliidesega

  // function lisa() {

  // }

  const lisa = () => {
    if (luger.current.value === "") {
      muudaSõnum("Tühja nimetusega ei saa toodet lisada!");
    } else {      
      muudaSõnum("Toode lisatud: " + luger.current.value);
    }
  }

  return (
    <div>
      <div>{sõnum}</div>
      <label>Toote nimi</label>
      <input ref={luger} type="text" />
      <button onClick={lisa}>Sisesta</button>
    </div>
  )
}

export default LisaToode
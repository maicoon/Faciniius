import { useState } from "react";

const ModalCookies = () => {
  const [modal, setModal] = useState(false);
  const [teste, setTeste] = useState(false);
  const [cookie, setCookie] = useState(() => {
    if (typeof window !== "undefined") {
      const coke = localStorage.getItem('@Alpha:Cookie');
      if (coke) {
        return { coke };
      }
    } 
    return {};
  });

  function handleCookie() {
    localStorage.setItem('@Alpha:Cookie', 'true');
    setTeste(!teste)
    setCookie({
      coke: 'true'
    })
  }

  console.log('teste', cookie)
  
  return (
    <div className={`containerCookie ${teste || !!cookie.coke ? 'coke' : ''}`}>
      <div className="infoCookie">
        <span>
          Utilizamos cookies para melhorar sua experiência. Ao continuar
          navegando, você aceita a nossa política de monitoramento. Mais
          informações, consulte a seção "Utilização de cookies" em nossos
          <button className="buttonTerms" onClick={() => setModal(!modal)}>
            Nossos termos de uso.
          </button>
        </span>
      </div>

      <button 
        className="buttonAcceptCookies"
        onClick={handleCookie}
        >
            Aceitar
        </button>
        
    </div>
  );
};

export default ModalCookies;
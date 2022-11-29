import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import FlagBr from '../../../public/images/flag_br.png'
import FlagEua from '../../../public/images/flag_eua.png'
import i18n from "../../i18n";

const languageOptions = [
  {
    name: "Pt-br",
    value: "ptbr",
    flag: FlagBr,
  },
  {
    name: "EN",
    value: "en",
    flag: FlagEua,
  },
];

const stylesButton = {
  display: 'grid',
  placeItems: 'center',
  border: 'none',
  background: 'transparent',
  width: '26px',
  height: '26px',
  borderRadius: '50%',
  flexShirink: '0',
  marginLeft: '1rem',
  cursor: 'pointer'
}

export default function LanguagesSwitch() {
  const router = useRouter()
  const { push, pathname} = useRouter()
  const mockUrl = pathname
  function handleOnLanguage(language: string) {
    i18n.changeLanguage(language);
    localStorage.setItem("@Facinnius:lang", language);
    push(mockUrl, undefined, { locale: language, scroll: false })
  }

  return (
    <div className="language-switch">
      <div className="fieldLanguage" style={{ display: 'flex' }}>
        {languageOptions.map((row) => (
          <button
            style={stylesButton}
            key={row.value}
            onClick={() => {
              handleOnLanguage(row.value)
            }}
            
          >
            <Image 
              src={row.flag} 
              alt={row.name} 
              style={{ 
                filter: i18n.language === row.value ? 'grayscale(0)' : 'grayscale(1)' 
              }} />
          </button>
        ))}
      </div>
    </div>
  );
}

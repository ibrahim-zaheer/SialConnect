// frontend/src/App.js
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '../src/routes/router'; // Import the router configuration
import { Trans,useTranslation } from 'react-i18next';
import LanguageSelector from './components/language/language-selector';
function App() {
  const { t } = useTranslation();

  const {line1,line2} = t("description",{
    channel: "IbrahimZaheer",}
  );
  return (
    <div className="App">
      <LanguageSelector/>
      <h1>{t("greeting")}</h1>
      
      <span>
        <Trans
          // i18nKey={"description.line1"}
          i18nKey={line1}
          values={{
            channel: "RoadsideCoder",
          }}
          components={{1: <b />}}
        ></Trans>
      </span>

      <RouterProvider router={router} />
    </div>
  );
}

export default App;

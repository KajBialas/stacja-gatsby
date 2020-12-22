import React from 'react';
import Navigation from '../components/navigation';
import Helmet from 'react-helmet';


function IndexPage() {
  return (
    <div>
      <Helmet>
        <title>Strona startowa</title>
      </Helmet>

      <Navigation/>
      Strona główna
      <div>
        Treść strony
      </div>
    </div>
  )
}

export default IndexPage

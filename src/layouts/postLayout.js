import React from 'react';
import Navigation from '../components/navigation';

function PostLayout({children}) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}

export default PostLayout;
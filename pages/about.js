import Link from 'next/link';
import React from 'react';

const about = () => {
   return (
      <div>
         <h1>About Page</h1>
         <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo nisi
            dignissimos pariatur ullam dolorem doloremque porro temporibus
            voluptatem ex exercitationem.
         </p>
         <Link href="/">
            <a>Back to Home</a>
         </Link>
      </div>
   );
};

export default about;

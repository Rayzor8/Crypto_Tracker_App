import { useEffect, useState } from 'react';

export default function Home() {
   const [showHello, setShowHelow] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setShowHelow(false);
      }, 1000);

      return () => clearTimeout(timer);
   }, []);

   return (
      <div className="flex flex-col">
         {showHello ? (
            <div className="w-full min-h-screen text-yellow-400 bg-blue-600 text-center grid place-content-center">
               <h1 className="text-4xl md:text-6xl font-mono">
                  Welcome To Rayzordev
               </h1>
            </div>
         ) : (
            <div>
               <h1 className="text-4xl font-bold italic">Rayzor Dev</h1>
               <h1 className="text-xs italic font-mono">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam error iusto similique labore rem quam cumque
                  delectus a sunt laborum!
               </h1>
            </div>
         )}
      </div>
   );
}

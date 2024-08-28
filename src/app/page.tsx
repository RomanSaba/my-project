import React from 'react'
import Image from 'next/image';
const page = () => {
  return(
     <div><figure className="bg-slate-100 rounded-xl dark:bg-slate-800">
     <Image className="w-24 h-30" src="/my-pic.jpg" alt="" width="384" height="512"></Image>
     <div className="pt-6 space-y-4">
       <blockquote>
         <p className="text-lg">
           “Tailwind CSS is the only framework that I've seen scale
           on large teams. It’s easy to customize, adapts to any design,
           and the build size is tiny.”
         </p>
       </blockquote>
       <figcaption>
         <div>
           Sarah Dayan
         </div>
         <div>
           Staff Engineer, Algolia
         </div>
       </figcaption>
     </div>
   </figure>
   </div>
  )
}

export default page
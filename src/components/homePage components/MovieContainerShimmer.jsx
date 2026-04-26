export const MovieContainerShimmer = ()=>{
   return <div className="shimmer  ml-2 pt-2 h-35 lg:h-90 w-full overflow-hidden flex justify-evenly gap-2">
    {Array.from({length:5},(_,i)=>{
       return <div key={i} className="bg-white/20 rounded-2xl animate-pulse h-full w-20 md:w-40 lg:w-60  aspect-2/3 text-white">
     </div>
    })}
    
   </div>
 
}

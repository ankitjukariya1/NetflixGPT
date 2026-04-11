export const MainVideoShimmer = ({data,frame})=>{
    //yha pe ham ek shimmer overlays create krte hai jo data load hone pe opacity 100% kr dete hai so shimmer transparent ho jata hai islye hmare niche k youtube k option v ni aari jo hover krne me aati hai agr vo v chahiye to condition me pointer event none se auto kr dena
   return <div className={`w-full h-[90dvh] absolute pt-20 inset-0 z-10 transition-opacity duration-500 bg-black ${data && frame?"opacity-0 ":"opacity-100" } `}>
       <div className="bg-white/20 rounded-2xl animate-pulse m-5  h-[82%]"></div>
   </div>
}
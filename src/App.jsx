import { useContext } from "react";
import { FollowersCard } from "./components/FollowersCard";
import { Header } from "./components/Header";
import { OverviewCard } from "./components/OverviewCard";
import { FollowersData } from "./Data/FollowersData";
import { overViewData } from "./Data/OverViewData";
import { AppContext } from "./context/AppContext";

function App() {
  const {isDark, isMobile} = useContext(AppContext);

  return (
    <div className={`pt-6 ${isDark?`bg-slate-700 text-white`:`bg-white`} ${window.innerWidth <= 768 ? `px-6` : `px-24`}`}>
      <Header />
      { !isMobile ? 
        <div className="flex justify-between gap-3">
          {
            FollowersData.map((data, index)=>{
              return (<FollowersCard {...data} key={index} />);
            })
          }
        </div>
         : 
        <div>
          {
            FollowersData.map((data, index)=>{
              return (<FollowersCard {...data} key={index} />);
            })
          }
        </div>

      }
      <h1 className="text-3xl mb-6 opacity-70 font-semibold">
        Overview - Today
      </h1>
        
      {
        !isMobile ?
        <div className="flex justify-between gap-3 flex-wrap">
          {
            overViewData.map((data, index)=>{
              return (<OverviewCard {...data} key={index} />)
            })
          }
        </div>
        :
        <div>
          {
            overViewData.map((data, index)=>{
              return (<OverviewCard {...data} key={index} />)
            })
          }
        </div>
      }

    </div>
  )
}

export default App;

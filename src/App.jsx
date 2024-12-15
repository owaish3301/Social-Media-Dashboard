import { FollowersCard } from "./components/FollowersCard";
import { Header } from "./components/Header";
import { FollowersData } from "./Data/FollowersData";

function App() {

  return (
    <div className="px-6 mt-6">
      <Header />
      {
        FollowersData.map((data, index)=>{
          return (<FollowersCard {...data} key={index} />);
        })
      }
      <h1 className="text-3xl mb-6 opacity-70 font-semibold">
        Overview - Today
      </h1>

      
    </div>
  )
}

export default App;

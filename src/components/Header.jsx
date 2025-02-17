import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export const Header = () => {
  const {isDark, setDark, isMobile} = useContext(AppContext);
  function handleSwitchFlip(){
    setDark(!isDark);
    console.log(isDark);
  }
  
  return (
    <div className="pb-4">
      <div className="flex justify-between">
        <div>
          {/* top header */}
          <h3 className="text-lg font-semibold">Social Media Dashboard</h3>
          <p className="text-sm">Total followers: 23,004 </p>
        </div>
        { window.innerWidth > 768 &&
          <div className="flex gap-[10px]">
            {/* dark mode switch for desktop */}
            <div className="text-gray-400">Dark Mode</div>
            <div
              className="w-12 h-6 bg-slate-400 rounded-full px-[0.15rem] flex"
              onClick={handleSwitchFlip}
            >
              <div
                className={`w-6 h-[1.3rem] rounded-full bg-white self-center ${
                  isDark ? `ml-auto` : ""
                }`}
              >
              </div>
            </div>
          </div>
  }
      </div>
      <div className="my-4">
        {/* line */}
        <hr className="border-[0.5px] border-slate-500" />
      </div>
      { isMobile &&
        <div className="flex justify-between">
          {/* dark mode switch */}
          <div>Dark Mode</div>
          <div
            className="w-12 h-6 bg-slate-400 rounded-full px-[0.15rem] flex"
            onClick={handleSwitchFlip}
          >
            <div
              className={`w-6 h-[1.3rem] rounded-full bg-white self-center ${
                isDark ? `ml-auto` : ""
              }`}
            >
            </div>
          </div>
        </div>
      }
    </div>
  );
}

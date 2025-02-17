import upIcon from '/images/icon-up.svg';
import downIcon from '/images/icon-down.svg';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';


export const FollowersCard = ({ userName, followersCount, followersText, todaysTrend, upOrDown, socialLogo }) => {
  const {isDark} = useContext(AppContext);
  return (
    <div className={`w-full h-[200px] rounded-md my-4 ${isDark? `bg-slate-600` : `bg-slate-100`} ${window.innerWidth <= 768? ``:``}`}>
        <div className={`w-full h-1 rounded-t-md bg-blue-500`}>
        </div>
        <div className="my-4">
            <div className="flex justify-center gap-2">
                {/* logo and username */}
                <img src={socialLogo} alt="social logo" />
                <p> {userName} </p>
            </div>
            <div className='w-max mx-auto mt-4'>
                {/* followers count */}
                <h1 className='font-bold text-5xl'> {followersCount} </h1>
                <p className='tracking-widest w-max mx-auto opacity-60'> {followersText} </p>
            </div>
            <div className='flex justify-center mt-6 items-center gap-2'>
                {/* trend up or down */}
                <div>
                    {
                        upOrDown === 'up' &&
                        <img src={upIcon} alt="upIcon" />
                    }
                    {
                        upOrDown === 'down' &&
                        <img src={downIcon} alt="downIcon" />
                    }
                </div>
                <div className={`flex gap-1 font-bold ${upOrDown==='up' ? `text-green-500` : `text-red-500`}`}>
                    <p> {todaysTrend} </p>
                    <p>Today</p>
                </div>
            </div>
        </div>
    </div>
  )
}

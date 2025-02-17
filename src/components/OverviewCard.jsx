import { useContext } from 'react';
import downIcon from '/images/icon-down.svg';
import upIcon from '/images/icon-up.svg';
import { AppContext } from '../context/AppContext';

export const OverviewCard = ({headerText, socialIcon, count, upOrDown, trendChangePercent}) => {
  const {isDark} = useContext(AppContext);
  return (
    <div className={`flex-grow flex-shrink basis-[20%] h-[128px] p-6 rounded-md mb-4 last:mb-0 ${isDark?`bg-slate-600`:`bg-slate-100`}`}>
        <div className="flex justify-between">
            <h1> {headerText} </h1>
            <img src={socialIcon} alt="socialIcon" />
        </div>
        <div className='mt-4 flex justify-between items-center'>
            <p className='text-4xl font-bold'> {count} </p>
            <div className='flex items-center gap-2'>
                <img src={upOrDown === 'up' ? upIcon : downIcon} alt="" className='w-[8px] h-[8px]' />
                <p className={`${upOrDown === 'up' ? `text-green-500` : `text-red-500`}`}>{trendChangePercent}%</p>
            </div>
        </div>
    </div>
  )
}

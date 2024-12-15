import fbIcon from '/images/icon-facebook.svg';
import upIcon from '/images/icon-up.svg';
import downIcon from '/images/icon-down.svg';


export const FollowersCard = ({ userName, followersCount, followersText, todaysTrend, upOrDown, socialLogo }) => {
  return (
    <div className="w-full h-[200px] bg-slate-100 rounded-md my-4">
        <div className={`w-full h-1 rounded-t-md bg-blue-500`}>
        </div>
        <div className="my-4">
            <div className="flex justify-center gap-2">
                {/* logo and username */}
                <img src={socialLogo} alt="" />
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
                        <img src={downIcon} alt="" />
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
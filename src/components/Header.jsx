
export const Header = () => {
  return (
    <div className="pb-4">
      <div>
        {/* top header */}
        <h3 className="text-lg font-semibold">Social Media Dashboard</h3>
        <p className="text-sm">Total followers: 23,004 </p>
      </div>
      <div className="my-4">
        {/* line */}
        <hr className="border-[0.5px] border-slate-500" />
      </div>
      <div className="flex justify-between">
        {/* dark mode switch */}
        <div>Dark Mode</div>
        <div className="w-12 h-6 bg-slate-400 rounded-full px-[0.15rem] flex">
          <div className="w-6 h-[1.3rem] rounded-full bg-white self-center">
            {/* add functionality to this switch */}
          </div>
        </div>
      </div>
    </div>
  )
}

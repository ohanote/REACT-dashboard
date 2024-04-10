import MenuItems from "./MenuItems.tsx"

const Aside = () => {
  return (
    <aside className="p-6 flex flex-col justify-between h-[100vh] border-r-zinc-800 border-r-2">
      <nav>
        <div className="flex
        flex-col justify-center items-center min-h-32 w-full">
          <h1 className="font-bold text-2xl">ohanote</h1>          
        </div>
        <MenuItems />
      </nav>

      <div className="flex gap-2 cursor-pointer">
        <img src="../src/assets/icon-out.svg" alt="logout" width={24} />
        LogOut
      </div>
    </aside>
  )
}

export default Aside
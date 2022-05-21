export default function Nav({ setShowMenu, showMenu }: any) {
  console.warn('Show menu nav.tsx: ' + showMenu)
  return (
    <div
      className={`${
        showMenu ? '' : 'hidden sm:hidden md:hidden lg:block xl:block 2xl:block'
      }`}
    >
      <ul className="fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center py-10 text-3xl bg-primary sm:fixed sm:bg-primary md:relative md:flex md:flex-row md:bg-transparent md:text-base">
        <li className="pt-10 text-base font-black cursor-pointer text-light hover:text-white md:pt-0 lg:text-lg">
          <a href="javascript: void(0)">About</a>
        </li>
        <li className="pt-10 text-base font-black cursor-pointer text-light hover:text-white md:ml-5 md:pt-0 lg:ml-10 lg:text-lg">
          <a href="javascript: void(0)">Résumé</a>
        </li>
        <li className="pt-10 text-base font-black cursor-pointer text-light hover:text-white md:ml-5 md:pt-0 lg:ml-10 lg:text-lg">
          <a href="javascript: void(0)">Posts</a>
        </li>
        <li className="pt-10 text-base font-black cursor-pointer text-light hover:text-white md:ml-5 md:pt-0 lg:ml-10 lg:text-lg">
          <a href="javascript: void(0)">Contact</a>
        </li>
      </ul>
    </div>
  )
}

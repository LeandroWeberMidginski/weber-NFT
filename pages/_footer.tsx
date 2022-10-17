import Logo from "../assets/Logo";

export default function Footer() {
  return (
    <div className="px-[10%] mt-10 pb-4">
      <hr className="w-full border-[#242634] mt-12" />
      <div className="h-16 py-10 flex items-center">
        <Logo />
        <p className="ml-3 text-[#93989a]">Weber`s NFT. All rights reserved.</p>
      </div>
    </div>
  )
}
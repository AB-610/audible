import Link from "next/link";

export default function Nav() {

  const user = true;

  return(
    <div className="flex justify-between items-center py-10">
    <Link href="/">
      <button className="text-lg font-medium">Audible2.0</button>
    </Link>

    <ul>
    {
      !user && (
    
      <Link href={"/auth/login"}>
        <p className="py-2 px-4 text-sm bg-[#f2cda6] text-white rounded-lg font-medium ml-8">Join now</p>
      </Link>
      )
    }

    {user && (
      <div className="flex items-center gap-6">
      <Link href="/post">
        <button className="py-2 px-4 text-sm bg-[#f2cda6] text-[#002b6f] rounded-md text-small">Join now</button>
      </Link>
      </div>
    )}
    </ul>
    </div>
  )
};

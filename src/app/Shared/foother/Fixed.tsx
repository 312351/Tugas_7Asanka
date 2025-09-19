import Link from "next/link";

export default function ReserveButtonFixed() {
  return (
    <div className="w-full lg:hidden fixed bottom-0 left-0 z-50 bg-[#F3EEE7] p-3">
  <Link
    href="/reserve"
    className="block w-full bg-[#313131] text-white py-4 text-center text-sm uppercase tracking-wide font-anaheim hover:bg-gray-800 transition shadow-lg"
  >
    Reserve
  </Link>
</div>

  );
}

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function VolunteerCTA() {
  return (
    <div className="flex justify-center items-center w-full min-h-[350px] p-6 mt-20">
      <div className="relative w-full max-w-6xl overflow-hidden rounded-3xl shadow-xl bg-gradient-to-br from-bazma to-green-500 p-6 sm:p-12 text-white flex flex-col items-center text-center gap-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide drop-shadow-lg">
          Gabung #JadiVolunteer
        </h2>
        <p className="mt-2 text-base sm:text-lg max-w-[90%] sm:max-w-2xl opacity-90">
          Yuk bergabung dalam setiap program kebaikan Bazma
        </p>
        <Button className="group w-full sm:w-fit bg-red-800 hover:bg-redbazma rounded-2xl mt-4">
          <Link href="/login">
            Daftar Volunteer
          </Link>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}

import Link from "next/link";
import Calendar from "../components/calendar/calendar";

const Reservation = (props: any) => {
  return (
    <div className="pt-[82px] lg:pt-[106px]">
      <div className="flex min-h-[500px] items-center justify-center">
        <div className="card m-4 rounded-xl bg-blue p-4 shadow-xl">
          <h2 className="mb-3 text-xl font-bold">1. Sélectionnez votre date</h2>
          <p className="mb-4">
            Choisissez la date pour laquelle vous souhaitez réserver une
            chambre.
          </p>
          <Calendar />{" "}
        </div>
      </div>
    </div>
  );
};

export default Reservation;

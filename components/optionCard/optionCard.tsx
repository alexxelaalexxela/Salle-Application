import React, { useState } from "react";
import { MdCheckCircle, MdRadioButtonUnchecked } from "react-icons/md";

const OptionCard = ({ title, details, selected, onSelect }) => {
  return (
    <div
      className={`group flex flex-col rounded-3xl border-2 ${
        selected ? "border-customGreen" : "border-gray-300"
      } bg-white p-6 px-4 transition ${
        selected ? "bg-customGreen text-white" : "hover:bg-gray-200"
      } dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.01] dark:to-transparent dark:drop-shadow-none dark:hover:border-gray-dark dark:hover:bg-gray-dark sm:px-6`}
      onClick={onSelect}
    >
      <div className="mb-8">
        <h3
          className={`text-[22px] font-black ${
            selected ? "text-white" : "text-black dark:text-white"
          }`}
        >
          {title}
        </h3>
      </div>
      <ul
        className={`space-y-5 pb-7 text-sm font-bold ${
          selected ? "text-white" : "group-hover:text-black"
        }`}
      >
        {details.map((detail, index) => (
          <li key={index} className="flex items-center">
            {selected ? (
              <MdCheckCircle size={20} />
            ) : (
              <MdRadioButtonUnchecked size={20} />
            )}
            <p className="ltr:pl-3 rtl:pr-3">{detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SelectionSection = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      title: "Working Space",
      details: ["Boissons", "Espace de travail adapté"],
      price: "50,00CHF/heure",
    },
    {
      title: "Business Meeting",
      details: ["Boissons", "Amuse-bouches", "Espace de meeting adapté"],
      price: "70,00CHF/heure",
    },
    {
      title: "Fêtes/Anniversaires",
      details: ["Repas", "Boisson", "Organisation de la salle"],
      price: "350CHF/soirée",
    },
  ];

  return (
    <section className="relative mt-6 rounded-xl bg-customLaFab py-14 px-6 text-center shadow-md">
      <div className="absolute top-0 left-0 inline-block rounded-tl-lg rounded-br-lg bg-white px-5 py-2">
        <h3 className="text-lg font-semibold text-customLaFab">
          Deuxieme étape
        </h3>
      </div>
      <h2 className="mt-8 mb-6 text-4xl font-bold text-white">
        Choisissez une date pour votre événement
      </h2>
      <p className="mb-6 text-white">
        Trouvez le jour parfait pour célébrer vos moments spéciaux avec nous.
      </p>
      <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
        {options.map((option, index) => (
          <OptionCard
            key={index}
            title={option.title}
            details={option.details}
            selected={selectedOption === index}
            onSelect={() => setSelectedOption(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default SelectionSection;

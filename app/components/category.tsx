import { Dispatch, SetStateAction, useState } from "react";

interface CategoryProps {
  name: String;
  active?: boolean;
  setter: () => void; 
}

export default function CategoryHolder() {
  const [selected, setSelected] = useState(0);

  const newSetId = (id: number) => () => setSelected(id)

  // puro xgh

  return (
    <>
      <Category name="All" active={0 == selected} setter={newSetId(0)}/>
      <Category name="Music" active={1 == selected} setter={newSetId(1)} />
      <Category name="Gaming" active={2 == selected} setter={newSetId(2)}/>
      <Category name="Live" active={3 == selected} setter={newSetId(3)}/>
    </>
  );
}

export function Category({ name, active, setter }: CategoryProps) {
  // hm ja sei
  // KKKKKKKKKK adivinha

  return (
    <button onClick={() => { setter() }}>
        <div
      className={`${
        active
          ? "bg-white text-black"
          : "bg-slate-950 text-white hover:bg-opacity-25"
      } flex justify-center items-center rounded-lg px-3 py-1 font-medium`}
    >
      <p>{name}</p>
    </div> 
    </button>
    
  );
}

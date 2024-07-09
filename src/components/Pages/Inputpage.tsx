import { Input } from "../Input";

type InputPageProps = {
  setChoice: React.Dispatch<React.SetStateAction<number>>;
};

export function InputPagepage({ setChoice }: InputPageProps) {
  return (
    <div>
      <Input setChoice={setChoice} />
    </div>
  );
}

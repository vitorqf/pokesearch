interface Props {
  label: string;
  value: string;
}

export const InfoBox = ({ label, value }: Props) => (
  <div className="flex flex-col items-center">
    <p className="text-slate-500 text-sm">{label}</p>
    <p className="text-xl font-semibold text-slate-800">{value}</p>
  </div>
);

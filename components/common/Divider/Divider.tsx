export default function Divider({ className }: any) {
  return (
    <div className={`relative flex items-center`}>
      <div className={`mt-2 flex-grow border-t ${className}`} />
    </div>
  );
}

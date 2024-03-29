import { useFormikContext } from "formik";

function FormBtn({ title }) {
  const { handleSubmit } = useFormikContext();

  return (
    <button
      onClick={handleSubmit}
      className="text-white mr-5 py-[12px] rounded px-5 bg-[#e50914] border-none w-full mt-6 text-lg font-semibold"
      type="button"
    >
      {title}
    </button>
  );
}

export default FormBtn;

import { FiUploadCloud } from "react-icons/fi";

const UploadCard = () => {
  return (
    <div className="rounded-3xl border-2 border-dashed border-gray-300 bg-white p-10 shadow-sm transition hover:border-blue-500 hover:shadow-md">
      <div className="flex flex-col items-center text-center">
        <div className="mb-5 rounded-full bg-blue-100 p-5">
          <FiUploadCloud className="text-5xl text-blue-600" />
        </div>

        <h2 className="text-2xl font-semibold text-gray-900">
          Upload Your Resume
        </h2>

        <p className="mt-3 max-w-xl text-gray-600">
          Drag & drop your PDF or DOCX resume here, or browse your files to
          start the analysis.
        </p>

            <button className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
            Browse Resume
            </button>

        <p className="mt-4 text-sm text-gray-500">
          Supported formats: PDF, DOC, DOCX (Max 5 MB)
        </p>
      </div>
    </div>
  );
};

export default UploadCard;
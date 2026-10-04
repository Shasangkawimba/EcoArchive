export default function Card({ data }) {
  if (!data) return null;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xs border border-[#A3B18A]/30 flex flex-col hover:shadow-md transition">
      {data.image && (
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-60 object-cover"
        />
      )}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A3B18A]">
            {data.category}
          </span>
          <span className="text-base font-bold text-[#C97B63]">
            {data.price}
          </span>
        </div>
        <h3 className="text-lg font-bold text-[#2F3E2E] mb-2">{data.title}</h3>
        <p className="text-[#2B2B2B]/80 text-sm leading-relaxed mb-4 flex-1">
          {data.description}
        </p>
        <button className="w-full py-2.5 bg-[#2F3E2E] text-[#F5F0E6] font-medium rounded-xl hover:bg-[#233022] transition text-sm">
          Beli Sekarang
        </button>
      </div>
    </div>
  );
}
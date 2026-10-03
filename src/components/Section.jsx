export default function Section({ title, children, className = "" }) {
  return (
    <section className={`py-16 px-6 ${className}`}>
      <div className="max-w-4xl mx-auto">
        {title && (
          <h2 className="font-display text-3xl font-bold text-[#3A5A40] mb-8 text-center">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
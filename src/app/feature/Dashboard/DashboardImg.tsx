export default function DashboardImg() {
  return (
    <section className="min-h-[4vh] w-full bg-[#F3EEE7]">
      <div className="max-w-[1580px] py-16 mx-auto flex flex-col justify-center items-center">
        <iframe
          className="w-[80%] max-w-7xl aspect-video"
          src="https://www.youtube.com/embed/DXdFA9BnYkE"
          title="Youtube Amankila"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

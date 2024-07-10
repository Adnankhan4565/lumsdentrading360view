import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 mt-32">
    <h1 className="text-2xl font-bold">Groove Street 608 360 view</h1>
    <iframe
  width="80%"
  height={840}
  frameBorder={0}
  allow="xr-spatial-tracking; gyroscope; accelerometer"
  allowFullScreen=""
  scrolling="no"
  src="https://kuula.co/share/collection/7KK4c?logo=0&info=0&fs=1&vr=1&sd=1&initload=1&thumbs=1"
/>

    </main>
  );
}

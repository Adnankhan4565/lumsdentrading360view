import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 mt-32">
    <h1 className="text-2xl font-bold">Groove Street 608 House Construction Virtual Tour</h1>
    <iframe
  width="100%"
  height={840}
  frameBorder={0}
  allow="xr-spatial-tracking; gyroscope; accelerometer"
  allowFullScreen=""
  scrolling="no"
  src="https://kuula.co/share/collection/7KKh7?logo=1&info=0&fs=1&vr=1&zoom=1&sd=1&thumbs=1"
/>

    </main>
  );
}

import Image from "next/image";
export function BrandLogo({ small = false }: { small?: boolean }) {
  return (
    <>
      <span className="brand-mark">
        <Image
          src="/images/logo.png"
          alt="Símbolo da Galvani Studio"
          width={small ? 40 : 48}
          height={small ? 40 : 48}
        />
      </span>
      <span className="brand-wm">
        <span className="brand-wm-a">GALVANI</span>
        <span className="brand-wm-b">STUDIO</span>
      </span>
    </>
  );
}

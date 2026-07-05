import logo from "@/assets/logo.png";

export function BrandLogo({ small = false }: { small?: boolean }) {
  return (
    <>
      <img
        src={logo}
        alt="Galvani Studio"
        className={small ? "brand-mark brand-mark--sm" : "brand-mark"}
        width={small ? 26 : 32}
        height={small ? 26 : 32}
      />
      <span className="brand-wm">
        <span className="brand-wm-a">GALVANI</span>
        <span className="brand-wm-b">STUDIO</span>
      </span>
    </>
  );
}

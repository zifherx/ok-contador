export function UbicacionNosotros() {
  return (
    <div className="bg-white mx-auto flex flex-col py-5">
      <div className="text-center">
        <h1 className="text-2xl font-bold uppercase">Ubicación</h1>
        <p className="text-lg my-8">Dirección</p>
      </div>
      <div className="flex justify-center py-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.0655035731043!2d-79.04779272424582!3d-8.094802880957197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3dc08252a3f9%3A0xdf2657b62c64b9bf!2sOro%20449%2C%20Trujillo%2013007!5e0!3m2!1ses-419!2spe!4v1721550632084!5m2!1ses-419!2spe"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="footer flex h-20 flex-col items-center justify-center bg-slate-400">
        <h2> Copyright &copy; {currentYear}</h2>
      </div>
    </>
  );
};

export default Footer;

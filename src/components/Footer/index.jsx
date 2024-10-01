const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="footer text-center">
        <h2>Copyright &copy; {currentYear}</h2>
      </div>
    </>
  );
};

export default Footer;

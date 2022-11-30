const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="w-full bg-zinc-900 py-3">
          <p className="text-sm text-center text-white lg:text-base">Copyright &copy; { currentYear }. All Rights Reserved.</p>
      </footer>
    );
}

export default Footer;

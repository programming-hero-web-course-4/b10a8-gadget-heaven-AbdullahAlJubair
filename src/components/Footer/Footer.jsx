const Footer = () => {
    return (
        <div className="Sora text-center bg-white pt-14 px-2 mt-14 md:mt-24">
            <div className="pb-5 space-y-2 md:space-y-4">
                <h2 className="BlackText text-2xl md:text-3xl font-bold">Gadget Heaven</h2>
                <p className="GrayText text-sm md:text-base font-medium">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="divider"></div>
            <footer className="max-w-[1250px] mx-auto flex flex-col md:flex-row gap-y-6 justify-evenly py-4 md:py-10">
                <nav className="text-center flex flex-col">
                    <h6 className="BlackText text-lg font-bold mb-2">Services</h6>
                    <a className="GrayText text-base font-normal cursor-pointer">Product Support</a>
                    <a className="GrayText text-base font-normal cursor-pointer">Order Tracking</a>
                    <a className="GrayText text-base font-normal cursor-pointer">Shipping & Delivery</a>
                    <a className="GrayText text-base font-normal cursor-pointer">Returns</a>
                </nav>
                <nav className="text-center flex flex-col">
                    <h6 className="BlackText text-lg font-bold mb-2">Company</h6>
                    <a className="GrayText text-base font-normal cursor-pointer">About Us</a>
                    <a className="GrayText text-base font-normal cursor-pointer">Careers</a>
                    <a className="GrayText text-base font-normal cursor-pointer">Contact</a>
                </nav>
                <nav className="text-center flex flex-col">
                    <h6 className="BlackText text-lg font-bold mb-2">Legal</h6>
                    <a className="GrayText text-base font-normal cursor-pointer">Terms of Service</a>
                    <a className="GrayText text-base font-normal cursor-pointer">Privacy Policy</a>
                    <a className="GrayText text-base font-normal cursor-pointer">Cookie Policy</a>
                </nav>
            </footer>
            <div className="divider"></div>
            <p className="GrayText text-[9px] md:text-xs font-medium">Designed and Developed by <a href="https://facebook.com/fahad.wares" target="_blank" className="AccentText font-bold pb-2">Abdullah AL JUbair</a> </p>

        </div>
    );
};

export default Footer;
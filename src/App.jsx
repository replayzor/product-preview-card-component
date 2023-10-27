import mobileImage from "/images/image-product-mobile.jpg";
import desktopImage from "/images/image-product-desktop.jpg";
import cartIcon from "/images/icon-cart.svg";

function App() {
	return (
		<div className="flex flex-col items-center justify-center h-screen sm:flex-row">
			<div className="flex flex-col w-2/3 max-w-lg bg-white sm:flex-row rounded-xl sm:w-8/12">
				<div className="">
					<img
						src={mobileImage}
						alt="mobile image"
						className="mx-auto rounded-t-xl sm:hidden"
					/>
					<img
						src={desktopImage}
						alt="desktop image"
						className="hidden object-cover h-full sm:mx-auto sm:block rounded-l-md"
					/>
				</div>
				<div className="px-3">
					<p className="px-4 pt-6 text-xs tracking-[0.3rem] uppercase text-neutral-darkGrayishBlue font-Montserrat">
						Perfume
					</p>
					<h1 className="px-3 py-3 text-3xl font-Frances">
						Gabrielle Essence Eau De Parfum
					</h1>
					<p className="px-3 text-sm text-neutral-darkGrayishBlue font-Montserrat">
						A floral, solar and voluptuous interpretation composed by Olivier
						Polge, Perfumer-Creator for the House of CHANEL.
					</p>
					<h1 className="flex pt-5 pl-3 font-Frances text-primary-darkCyan">
						$149.99{" "}
						<span className="flex items-center pl-4 font-sans text-xs font-semibold line-through text-neutral-darkGrayishBlue">
							$169.99
						</span>
					</h1>
					<div className="flex items-center justify-center py-5">
						<button className="flex items-center justify-center w-11/12 py-3 text-sm font-semibold tracking-wider text-white rounded-lg bg-primary-darkCyan">
							<img src={cartIcon} alt="Cart Icon" className="mr-3" />
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

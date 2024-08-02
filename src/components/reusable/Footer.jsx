
export const Footer = () => {
	const date = new Date()
  return (
	<footer className="text-center">
		<p className=" font-semibold text-[0.5rem] md:text-[0.8rem]">© Copyright {date.getFullYear()} , Eurasia All Right Reserved </p>
	</footer>
  )
}


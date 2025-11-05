interface props {
  className?: string
}

export function Logo({ className }:props) {
  return (
      <img
        src="NightmareLogo.svg"
        alt="Logo"
        loading="lazy"
        className={"h-40 w-40 sm:h-50 sm:w-50 object-fill  "+className}
      />
  )
}

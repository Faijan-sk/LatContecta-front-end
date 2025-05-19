import Link from 'next/link'

const Breadcumnd = ({
  breadcrumbs,
  clss,
}: {
  breadcrumbs: string[][]
  clss?: string
}) => {
  return (
    <ul className="breadcumnd__link">
      {breadcrumbs?.map(([itm, link], i, arr) => (
        <>
          <li key={i} className={clss}>
            {i !== arr.length - 1 ? (
              <Link href={link} className={clss}>
                {itm}
              </Link>
            ) : (
              itm
            )}
          </li>
          {i !== arr.length - 1 && (
            <li>
              <i className={`material-symbols-outlined ${clss}`}>
                chevron_right
              </i>
            </li>
          )}
        </>
      ))}
    </ul>
  )
}

export default Breadcumnd

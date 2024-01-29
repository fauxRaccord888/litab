import { Link } from '@tanstack/react-router'

export default function LeftSideBar() {
  return (
    <>
        <Link to="/">
            <h2>
                /
            </h2>
        </Link>

        <Link to="/account/register">
            <h2>
                register
            </h2>
        </Link>

        <Link to="/account/signIn">
            <h2>
                signIn
            </h2>
        </Link>

    </>
  )
}

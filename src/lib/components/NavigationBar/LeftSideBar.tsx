import { Link } from '@tanstack/react-router'

export default function LeftSideBar() {
  return (
    <>
        <Link to="/">
            <h2>
                /
            </h2>
        </Link>

        <Link to="/preference">
            <h2>
                preference
            </h2>
        </Link>

        <Link to="/register">
            <h2>
                register
            </h2>
        </Link>

        <Link to="/signin">
            <h2>
                signIn
            </h2>
        </Link>

    </>
  )
}

import { Link } from '@tanstack/react-router'

export default function LeftSideBar() {
  return (
    <>
        <Link to="/hello/">
            <h2>
                /hello
            </h2>
        </Link>

        <Link to="/preference/">
            <h2>
                preference
            </h2>
        </Link>

        <Link to="/account/register/">
            <h2>
                register
            </h2>
        </Link>

        <Link to="/account/signin/">
            <h2>
                signIn
            </h2>
        </Link>

    </>
  )
}

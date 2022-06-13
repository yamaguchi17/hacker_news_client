import { Layout } from '../components/Layout'
import Link from 'next/link'

export default function Other() {
  return (
    <div>
      <Layout header="Next.js" title="Other page.">
      <div>
        <h5>This is Other page...</h5>
        <Link href=".">
          <button>
            &lt;&lt; Back to Top
          </button>
        </Link>
      </div>
      </Layout>
    </div>
  )
}
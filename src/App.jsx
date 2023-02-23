import { Catalog } from "./components/Catalog/Catalog"
import { Header } from "./components/header/header"
import { Navigation } from "./components/Navigation/Navigation"

export const App = () => {

  return (
    <>
      <Header />
      <main>
        <Navigation />
        <Catalog />
      </main>
      <footer></footer>
    </>
  )
}


import { useContext } from "react"
import { languageContext } from "../App"

export default function Details() {
    const { lang } = useContext(languageContext)
    return (
        <section>
            <h3>{lang["details.header"]}</h3>
            <p>{lang["details.text"]}</p>
        </section>
    )
}
import quote from '../styles/quote.module.scss'

export default function Quote({ text, credits }) {
  return (
    <>
      <section className={quote.quote}>
        <p className={quote.text}>
          {text}
        </p>
        <span className={quote.credits}>
          {credits}
        </span>
      </section>
    </>
  )
}

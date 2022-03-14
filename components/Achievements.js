import bio from '../styles/bio.module.scss'
import pgpa from '../lib/ParalympicGamesParaAthletics.js'
import wcpa from '../lib/WorldChampionshipsParaAthletics.js'
import wcps from '../lib/WorldChampionshipsParaSnowboard.js'
import pgps from '../lib/ParalympicGamesParaSnowboard.js'
import ecpa from '../lib/EuropeanChampionshipsParaAthletics.js'

export default function Achievements() {
  return (
    <>
    <section className={bio.achievements}>
      <div className={bio.achievementsInner}>
        <ul className={bio.list}>
          <h4>Paralympic Games - Para athletics</h4>
          {pgpa.map(({id, year, event, result, rank}) => (
            <li className={bio.li} key={id}>
              <span className={bio.year}>{year}</span>
              <span className={bio.record}>{event}</span>
              <span className={bio.length}>{result}</span>
              <span className={bio.where}>{rank}</span>
            </li>
          ))}
        </ul>
        <ul className={bio.list}>
          <h4>World Championships - Para athletics</h4>
          {wcpa.map(({id, year, event, result, rank}) => (
            <li className={bio.li} key={id}>
              <span className={bio.year}>{year}</span>
              <span className={bio.record}>{event}</span>
              <span className={bio.length}>{result}</span>
              <span className={bio.where}>{rank}</span>
            </li>
          ))}
        </ul>
        <ul className={bio.list}>
          <h4>World Championships - Para Snowboard</h4>
          {wcps.map(({id, year, event, result, rank}) => (
            <li className={bio.li} key={id}>
              <span className={bio.year}>{year}</span>
              <span className={bio.record}>{event}</span>
              <span className={bio.length}>{result}</span>
              <span className={bio.where}>{rank}</span>
            </li>
          ))}
        </ul>
        <ul className={bio.list}>
          <h4>Paralympic Games - Para Snowboard</h4>
          {pgps.map(({id, year, event, result, rank}) => (
            <li className={bio.li} key={id}>
              <span className={bio.year}>{year}</span>
              <span className={bio.record}>{event}</span>
              <span className={bio.length}>{result}</span>
              <span className={bio.where}>{rank}</span>
            </li>
          ))}
        </ul>
        <ul className={bio.list}>
          <h4>European Championships – Para Athletics</h4>
          {ecpa.map(({id, year, event, result, rank}) => (
            <li className={bio.li} key={id}>
              <span className={bio.year}>{year}</span>
              <span className={bio.record}>{event}</span>
              <span className={bio.length}>{result}</span>
              <span className={bio.where}>{rank}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
    </>
  )
}

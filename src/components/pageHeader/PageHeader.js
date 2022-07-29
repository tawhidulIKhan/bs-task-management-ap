import { Link } from 'react-router-dom'

export default function PageHeader(props) {
    const { title, linkLabel, link } = props
  return (
        <div className='page__header'>
        <h2 className='page__header__title'>{title}</h2>
            <div>
                <Link to={link}>{linkLabel}</Link>
            </div>
        </div>
    )
}

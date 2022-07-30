import { Link } from 'react-router-dom';
import './PageHeader.scss';

export default function PageHeader(props) {
  const { title, linkLabel, link, btnLabel, btnLink } = props;
  return (
    <div className="page__header">
      <h2 className="page__header__title">{title}</h2>
      {link && linkLabel ? (
        <div className="page__header__breadcrumb">
          <Link to={link}>{linkLabel}</Link>
        </div>
      ) : null}
      {btnLabel && btnLink ? (
        <div className="page__header__breadcrumb">
          <Link className="btn--link" to={btnLink}>
            {btnLabel}
          </Link>
        </div>
      ) : null}
    </div>
  );
}

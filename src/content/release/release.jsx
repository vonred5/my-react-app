import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './release.module.css';

function Release(props) {
  const { releases, buttonPreviousPage: PreviousPage, buttonNextPage: NextPage } = props;
  return (
    <>
      <div className={s.items}>
        {releases.albums.items.map((album) => (
          <Link className={s.item} key={album.id} to={`/albums/${album.id}`}>
            <img src={album.images[1].url} alt="img" />
            <p>{album.name}</p>
            <div className={s.artists}>
              <p>
                {album.artists.map((artist) => (
                  `${artist.name} `
                ))}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className={s.paginator}>
        {releases.albums.previous
          ? (
            <button
              type="button"
              onClick={() => { PreviousPage(releases.albums.previous); }}
            >
              Previous
            </button>
          )
          : (<button type="button" disabled>Previous</button>)}
        {releases.albums.next
          ? (
            <button
              type="button"
              onClick={() => { NextPage(releases.albums.next); }}
            >
              Next
            </button>
          )
          : (<button type="button" disabled>Next</button>)}
      </div>
    </>
  );
}

Release.propTypes = {
  releases: PropTypes.objectOf.isRequired,
  buttonPreviousPage: PropTypes.func.isRequired,
  buttonNextPage: PropTypes.func.isRequired,
};

export default Release;

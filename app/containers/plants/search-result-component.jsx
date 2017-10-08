import React from 'react';
import PropTypes from 'prop-types';

function getCssMap(populationArr) {
  const map = {};
  populationArr.sort((a, b) => (a - b));

  for(let i = 0; i < populationArr.length; i++) {
    if (!map[populationArr[i]]) {
      const scale = i < 10 ? i + 1 : 10;
      map[populationArr[i]] = `scale-${scale}`;
    }
  }

  return map;
}

const SearchResult = ({ items }) => {
  const populationArr = items.map((o) => Number(o.population) || 0);
  const cssMap = getCssMap(populationArr);
  return (
    <div className="list-group">
      {
        items.map((item, i) => (
          <div className={`list-group-item ${cssMap[Number(item.population) || 0]}`}
            key={i} onClick={() => {
              alert(item.url);
            }}>
            <div className="list-group-item-heading">
              {item.name}
            </div>
            <div className="list-group-item-text small">
              <p>
                <span>
                  <i className="fa fa-users sm" aria-hidden="true"></i> Population: {item.population}
                </span>
                <span>
                  <i className="fa fa-cloud sm" aria-hidden="true"></i> Terrain: {item.terrain}
                </span>
                <span>
                  <i className="fa fa-thermometer-empty sm" aria-hidden="true"></i> Climate: {item.climate}
                </span>
                <span>
                  <i className="fa fa-globe sm" aria-hidden="true"></i> Gravity: {item.gravity}
                </span>
              </p>
              <p style={{ marginTop: '30px' }}>
                <i className="fa fa-calendar-check-o sm" aria-hidden="true"></i> Modified: {item.edited}
              </p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

SearchResult.propTypes = {
  items: PropTypes.array.isRequired
};

export default SearchResult;

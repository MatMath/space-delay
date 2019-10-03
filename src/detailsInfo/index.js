import React, { useState } from 'react';

import './details.css';

export default function DetailsInfo ({project}) {
  const [show, setShow] = useState(false);
  if (show === false) {
    return (
    <div>
      <button onClick={() => setShow(true)}>Geeks Need Moar Info</button>
    </div>);
  }
  return (
    <table className='details-table'>
      <tbody>
        {project.news.map(item => {
          return (
          <tr key={item.id}>
            <td><strong>{item.miniDesc}</strong></td>
            <td>{(item.url?<a href={item.url} target="blank">Link</a>: '')} </td>
            <td>{item.descriptions}</td>
          </tr>)
        })}
      </tbody>
    </table>
  );
}
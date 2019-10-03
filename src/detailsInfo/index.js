import React from 'react';

export default function({project}) {

  return (
    <div>
      <h1>{project.name} - {project.descriptions}</h1>
      <table>
        <tbody>
          {project.news.map(item => {
            return (
            <tr key="item.id">
              <td><strong>{item.miniDesc}</strong></td>
              <td>{(item.url?<a href={item.url} target="blank">Link</a>: '')} </td>
              <td>{item.descriptions}</td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
  );
}
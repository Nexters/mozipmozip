import React from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <div>
      <h2>Here is Main Page!</h2>
      <ul>
        <li>
          <Link to={'/Admin'}>모집모집 관리자 페이지</Link>
        </li>
        <li>
          <Link to={'/user/infoform'}>모집모집 사용자 서류작성 페이지</Link>
        </li>
        <li>
          <Link to={'/todo'}>TODO 페이지</Link>
        </li>
        <li>
          <Link to={'/employees'}>Go Employees Page</Link>
        </li>
      </ul>
    </div>
  );
}

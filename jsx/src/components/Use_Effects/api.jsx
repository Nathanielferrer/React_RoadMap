import { useState, useEffect } from 'react';
import { fetchBio } from './api.js';

export default function Page() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState(null);
  useEffect(() => {
    async function startFetching() {
      setBio(null);
      const result = await fetchBio(person);
      if (!ignore) {    //This creates cleanup marks so after the old request like (bob) and u suddenly chose alice the bob will fail to render
        setBio(result);
      }
    }

    let ignore = false; //This is a flag to prevent the race condition. It means to avoid wrong ui to shows 
    startFetching();
    return () => {
      ignore = true;
    }
  }, [person]); //The use Effect is depends on the person changes. If person changes, rerun the effect.


  return (
    <>
      <select value={person} onChange={e => {
        setPerson(e.target.value);
      }}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p><i>{bio ?? 'Loading...'}</i></p>
    </>
  );
}

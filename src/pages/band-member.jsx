import { useParams } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from "react";
const BandMemberPage = () => {
  const { bandMemberId }= useParams();

  const [bandMemberData, setbandMemberData] = useState({})
  
  const fetchBandMemberData = () => {
    axios
    .get(`http://localhost:2000/band_members/${bandMemberId}`)
    .then((res) => {
      setbandMemberData(res.data)
    })
    .catch((err) => {
      console.log(err)
      alert("terjadi kesalahan di server")
    })
  }

  useEffect (() => {
     fetchBandMemberData()
  }, [])
  return (
    <div>
      <h1>{bandMemberData.full_name}</h1>
      <ul>
        <li>{bandMemberData.instrument}</li>
        <li>{bandMemberData.date_of_birth}</li>
        <li>{bandMemberData.hobby}</li>
      </ul>
    </div>
  );
};

export default BandMemberPage;

import React from 'react';
import { Link } from 'react-router-dom';

const ItemDoctor = ({ data, handleButton }) => {
  const url = `/pickdoctor?${data.id}`;
  return (
    <div className="ItemDoctor">
      <div className="ItemDoctor-Image">
        <img src={data.image} alt="imagedoctor"></img>
      </div>
      <h2 className="ItemDoctor-Name">
        <span>{data.position}</span>
        {data.name}
      </h2>
      <p className="ItemDoctor-Work">{data.work}</p>
      <p className="ItemDoctor-Exp"> {data.experience} năm kinh nghiệm</p>

      <div className="ItemDoctor-Major"> Chuyên khoa: {data.major}</div>
<<<<<<< HEAD

      <Link to={url}>
        <button onClick={handleButton}>Đặt khám</button>
=======
      <Link to={url}>
        <button>Đặt khám</button>
>>>>>>> Nam/DoctorSelectTime
      </Link>
    </div>
  );
};

export default ItemDoctor;

// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({data}) => {
    return (
    <div>
      <img src={data.photo} alt={data.name} />
      <div>
        <h5>{data.phone}</h5>
        <div>
          <h2>{data.name}</h2>
          <p>{data.email}</p>
        </div>
      </div>
    </div>
    )
}

export default Contact;
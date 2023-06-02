import React, { useEffect, useState } from 'react';

const DisplayQoute = () => {
  const [qoute, setqoute] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const quoteApi = 'https://api.api-ninjas.com/v1/quotes?category=';
  const token = 'NpIyy7AoiV/za/U0ht20ew==4F4oVlmUzGUvmLMN';

  const fetchApi = async () => {
    try {
      const response = await fetch(quoteApi, {
        headers: {
          'X-Api-Key': token,
          'content-type': 'application/json',
        },
      });
      const data = await response.json();
      setqoute(data[0].quote);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return (
      <p>
        Error:
        {' '}
        {error.message}
      </p>
    );
  }
  return (
    <div className="qoute-container">
      <h2>Qoute of the Day</h2>
      <p>{qoute}</p>
    </div>
  );
};

export default DisplayQoute;

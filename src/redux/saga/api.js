//GET

export const fetchReceiveData = async () => {
  const response = await fetch(
    `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/referral/v1.0/%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F/Ru/Moscow/Mocsow/New-York/2020-12-01/%7Binboundpartialdate%7D`,
    {
      headers: {
        'x-rapidapi-key': '6ad83c11e2msh55e048f8e8cf7c3p1c01fajsn83996e46a486',
        'x-rapidapi-host':
          'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
        useQueryString: true,
      },
    }
  );
  const result = await response.json();
  return result;
};

//POST

export const fetchAdd = async (action) => {
  const response = await fetch(`URL`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      // body
    }),
  });
  const result = await response.json();
  return result;
};

export  async function onRequest({request}) {
  const response = await fetch('http://drogbaqu.qcdntest.cn/drogbaqu/img/drogba.jpg')

  return new Response(response, {
    headers: {
      'content-type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

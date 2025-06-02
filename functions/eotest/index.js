export async function onRequest({ request }) {
  const response = await fetch(
    'http://drogbaqu.qcdntest.cn/drogbaqu/img/drogba.jpg'
  );

  return response;
}

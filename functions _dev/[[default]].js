// 这个文件可以匹配所有 /api/* 下的路径
export async function onRequest({ request, params, env }) {
  // // 在这里可以进行 KV 统计
  // const visitCount = await my_kv.get('visitCount');
  // let visitCountInt = Number(visitCount);
  // visitCountInt += 1;
  // await my_kv.put('visitCount', visitCountInt.toString());
  
  console.log(request.url);
  return;
}
// 这个文件可以匹配所有 /api/* 下的路径
export async function onRequest({ request, params, env }) {
  // // 在这里可以进行 KV 统计
  // const visitCount = await my_kv.get('visitCount');
  // let visitCountInt = Number(visitCount);
  // visitCountInt += 1;
  // await my_kv.put('visitCount', visitCountInt.toString());
  
  // 透传到静态资源或其他处理
  // 如果需要继续处理原始请求，可以使用 fetch
  const url = new URL(request.url);
  // 这里可以决定是否继续处理或返回自定义响应
}